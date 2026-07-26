from __future__ import annotations

import os
import re
from dataclasses import dataclass

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas


ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_DIR = os.path.join(ROOT, "output", "pdf")

PAGE_W, PAGE_H = A4
MARGIN_X = 44
TOP = 784
CONTENT_TOP = 697
FOOTER_Y = 32
AVATAR_SIZE = 66
LEFT_W = 154
GAP = 28
RIGHT_X = MARGIN_X + LEFT_W + GAP
RIGHT_W = PAGE_W - RIGHT_X - MARGIN_X
ACCENT = colors.HexColor("#5E7460")
TEXT = colors.HexColor("#1F1F1F")
MUTED = colors.HexColor("#6F6F6F")
LIGHT = colors.HexColor("#D7D7D7")
PALE = colors.HexColor("#EEF2ED")


UNICODE_FONT_PATH = "/System/Library/Fonts/Supplemental/Arial Unicode.ttf"
ZH_REGULAR_FONT_PATH = "/System/Library/Fonts/STHeiti Light.ttc"
ZH_BOLD_FONT_PATH = "/System/Library/Fonts/STHeiti Medium.ttc"
AVATAR_PATHS = [
    os.path.join(ROOT, "tmp", "pdfs", "extracted", "0_X2.jp2.png"),
    os.path.join(ROOT, "prototype", "assets", "ningli-portrait.png"),
]

pdfmetrics.registerFont(TTFont("ResumeUnicode", UNICODE_FONT_PATH))
pdfmetrics.registerFont(TTFont("ResumeZh", ZH_REGULAR_FONT_PATH, subfontIndex=0))
pdfmetrics.registerFont(TTFont("ResumeZhBold", ZH_BOLD_FONT_PATH, subfontIndex=0))


@dataclass
class Fonts:
    regular: str
    bold: str
    italic: str


EN_FONTS = Fonts("ResumeUnicode", "ResumeUnicode", "ResumeUnicode")
ZH_FONTS = Fonts("ResumeZh", "ResumeZhBold", "ResumeZh")


def cjk_aware_tokens(text: str) -> list[str]:
    punctuation = r"，。、；：！？）\)\]》〉」』”’"
    return re.findall(rf"[\u3400-\u9fff]|[{punctuation}]|[^\u3400-\u9fff\s{punctuation}]+|\s+", text)


def wrap_text(text: str, font: str, size: float, width: float) -> list[str]:
    leading_punctuation = set("，。、；：！？）)]》〉」』”’、")
    lines: list[str] = []
    current = ""
    for token in cjk_aware_tokens(text):
        if token.isspace() and not current:
            continue
        candidate = current + token
        if pdfmetrics.stringWidth(candidate.rstrip(), font, size) <= width:
            current = candidate
            continue
        if token in leading_punctuation and current:
            current += token
            continue
        if current:
            lines.append(current.rstrip())
            current = token.lstrip()
        else:
            # Last-resort character split for a very long URL or word.
            piece = ""
            for ch in token:
                if pdfmetrics.stringWidth(piece + ch, font, size) <= width:
                    piece += ch
                else:
                    if piece:
                        lines.append(piece)
                    piece = ch
            current = piece
    if current.strip():
        lines.append(current.rstrip())
    return lines


def draw_wrapped(
    c: canvas.Canvas,
    text: str,
    x: float,
    y: float,
    width: float,
    font: str,
    size: float,
    leading: float,
    fill=TEXT,
    bullet: bool = False,
    url: str | None = None,
) -> float:
    bullet_w = 10 if bullet else 0
    lines = wrap_text(text, font, size, width - bullet_w)
    c.setFillColor(fill)
    c.setFont(font, size)
    for i, line in enumerate(lines):
        if bullet and i == 0:
            c.circle(x + 2.2, y + 3.4, 1.25, fill=1, stroke=0)
        c.drawString(x + bullet_w, y, line)
        if url:
            text_w = pdfmetrics.stringWidth(line, font, size)
            c.linkURL(url, (x + bullet_w, y - 2, x + bullet_w + text_w, y + size + 2), relative=0)
        y -= leading
    return y


def draw_tracked(c: canvas.Canvas, text: str, x: float, y: float, font: str, size: float, tracking: float = 2) -> None:
    c.setFont(font, size)
    c.setFillColor(TEXT)
    cursor = x
    for ch in text:
        c.drawString(cursor, y, ch)
        cursor += pdfmetrics.stringWidth(ch, font, size) + tracking


def section(c: canvas.Canvas, label: str, x: float, y: float, width: float, fonts: Fonts, tracked: bool = False) -> float:
    if tracked:
        draw_tracked(c, label, x, y, fonts.bold, 8.2, 1.8)
    else:
        c.setFont(fonts.bold, 11.8)
        c.setFillColor(TEXT)
        c.drawString(x, y, label)
    c.setStrokeColor(LIGHT)
    c.setLineWidth(0.8)
    c.line(x, y - 8, x + width, y - 8)
    return y - 26


def draw_sidebar_item(c: canvas.Canvas, item: dict, x: float, y: float, width: float, fonts: Fonts) -> float:
    title = item["title"]
    meta = item["meta"]
    url = item.get("url")
    c.setFillColor(TEXT)
    c.setFont(fonts.bold, 9.0)
    y = draw_wrapped(c, title, x, y, width, fonts.bold, 9.0, 11.0, url=url)
    c.setFillColor(MUTED)
    c.setFont(fonts.regular, 8.4)
    y = draw_wrapped(c, meta, x, y - 2, width, fonts.regular, 8.4, 10.2, MUTED, url=url)
    return y - 9


def draw_sidebar_groups(c: canvas.Canvas, groups: list[dict], x: float, y: float, width: float, fonts: Fonts, lang: str) -> float:
    label_size = 8.3 if lang == "en" else 8.8
    item_size = 8.2 if lang == "en" else 8.35
    item_leading = 10.3 if lang == "en" else 10.7
    group_gap = 8.0 if lang == "en" else 9.0
    for group in groups:
        c.setFillColor(ACCENT)
        c.setFont(fonts.bold, label_size)
        c.drawString(x, y, group["label"])
        y -= 11.5
        for item in group["items"]:
            y = draw_wrapped(c, item, x, y, width, fonts.regular, item_size, item_leading, TEXT, bullet=True)
            y -= 1.8
        y -= group_gap
    return y


def draw_role(c: canvas.Canvas, role: dict, x: float, y: float, width: float, fonts: Fonts, lang: str) -> float:
    c.setFillColor(TEXT)
    title_size = 10.7 if lang == "en" else 11.4
    body_size = 8.75 if lang == "en" else 8.75
    body_leading = 11.35 if lang == "en" else 11.95
    title_leading = 12.2 if lang == "en" else 12.9
    meta_offset = 1 if lang == "en" else -0.8
    meta_leading = 10.4 if lang == "en" else 10.8
    meta_gap = 1.2 if lang == "en" else 2.6
    bullet_gap = 1.8 if lang == "en" else 2.7
    c.setFont(fonts.bold, title_size)
    y = draw_wrapped(c, role["title"], x, y, width, fonts.bold, title_size, title_leading)
    c.setFillColor(MUTED)
    c.setFont(fonts.italic, 8.6)
    y = draw_wrapped(c, role["meta"], x, y + meta_offset, width, fonts.italic, 8.6, meta_leading, MUTED, url=role.get("url"))
    y -= meta_gap
    for bullet in role["bullets"]:
        y = draw_wrapped(c, bullet, x, y, width, fonts.regular, body_size, body_leading, TEXT, bullet=True)
        y -= bullet_gap
    return y - (6.2 if lang == "en" else 7.2)


def avatar_path() -> str | None:
    for path in AVATAR_PATHS:
        if os.path.exists(path):
            return path
    return None


def draw_avatar(c: canvas.Canvas, x: float, y: float, size: float) -> None:
    path = avatar_path()
    if not path:
        return
    c.saveState()
    p = c.beginPath()
    p.circle(x + size / 2, y + size / 2, size / 2)
    c.clipPath(p, stroke=0, fill=0)
    c.drawImage(ImageReader(path), x, y, width=size, height=size, preserveAspectRatio=True, anchor="c", mask="auto")
    c.restoreState()
    c.setStrokeColor(PALE)
    c.setLineWidth(1.2)
    c.circle(x + size / 2, y + size / 2, size / 2, fill=0, stroke=1)


def draw_header(c: canvas.Canvas, data: dict, fonts: Fonts, lang: str) -> None:
    draw_avatar(c, MARGIN_X, TOP - AVATAR_SIZE + 21, AVATAR_SIZE)
    name_x = MARGIN_X + AVATAR_SIZE + 18
    name_size = 27 if lang == "en" else 26
    c.setFont(fonts.bold, name_size)
    c.setFillColor(TEXT)
    c.drawString(name_x, TOP - 8, data["name"])

    c.setFillColor(TEXT)
    c.setFont(fonts.regular, 13)
    c.drawString(name_x, TOP - 36, data["title"])

    c.setFont(fonts.regular, 8.8)
    y = TOP - 10
    contact_x = RIGHT_X + 170
    for item in data["contact"]:
        label = item["label"] if isinstance(item, dict) else item
        url = item.get("url") if isinstance(item, dict) else None
        c.setStrokeColor(LIGHT)
        c.setLineWidth(0.6)
        c.line(contact_x, y - 7, PAGE_W - MARGIN_X, y - 7)
        c.setFillColor(MUTED)
        c.drawString(contact_x, y, label)
        if url:
            text_w = pdfmetrics.stringWidth(label, fonts.regular, 8.8)
            c.linkURL(url, (contact_x, y - 2, contact_x + text_w, y + 10), relative=0)
        y -= 22


def build_pdf(data: dict, output_path: str, lang: str) -> None:
    fonts = EN_FONTS if lang == "en" else ZH_FONTS
    c = canvas.Canvas(output_path, pagesize=A4)
    c.setTitle(data["pdf_title"])

    draw_header(c, data, fonts, lang)
    c.setStrokeColor(LIGHT)
    c.setLineWidth(0.8)
    c.line(MARGIN_X + LEFT_W + GAP / 2, CONTENT_TOP + 2, MARGIN_X + LEFT_W + GAP / 2, FOOTER_Y + 8)

    left_y = CONTENT_TOP
    left_y = section(c, data["labels"]["education"], MARGIN_X, left_y, LEFT_W, fonts, lang == "en")
    for item in data["education"]:
        left_y = draw_sidebar_item(c, item, MARGIN_X, left_y, LEFT_W, fonts)

    left_y -= 16
    left_y = section(c, data["labels"]["skills"], MARGIN_X, left_y, LEFT_W, fonts, lang == "en")
    left_y = draw_sidebar_groups(c, data["skills"], MARGIN_X, left_y, LEFT_W, fonts, lang)

    left_y -= 11
    left_y = section(c, data["labels"]["strengths"], MARGIN_X, left_y, LEFT_W, fonts, lang == "en")
    for skill in data["strengths"]:
        left_y = draw_wrapped(c, skill, MARGIN_X, left_y, LEFT_W, fonts.regular, 8.5, 11.2, TEXT, bullet=True)
        left_y -= 2.4

    left_y -= 10
    left_y = section(c, data["labels"]["languages"], MARGIN_X, left_y, LEFT_W, fonts, lang == "en")
    for language in data["languages"]:
        left_y = draw_wrapped(c, language, MARGIN_X, left_y, LEFT_W, fonts.regular, 8.5, 11.0, TEXT, bullet=True)
        left_y -= 2.4

    right_y = CONTENT_TOP
    right_y = section(c, data["labels"]["profile"], RIGHT_X, right_y, RIGHT_W, fonts, lang == "en")
    right_y = draw_wrapped(c, data["profile"], RIGHT_X, right_y, RIGHT_W, fonts.regular, 9.5 if lang == "en" else 9.25, 12.9, TEXT)
    right_y -= 12 if lang == "en" else 15
    right_y = section(c, data["labels"]["experience"], RIGHT_X, right_y, RIGHT_W, fonts, lang == "en")
    for role in data["experience"]:
        right_y = draw_role(c, role, RIGHT_X, right_y, RIGHT_W, fonts, lang)

    if min(left_y, right_y) < FOOTER_Y - 4:
        raise RuntimeError(f"{lang} layout overflow: left_y={left_y:.1f}, right_y={right_y:.1f}")

    c.setStrokeColor(PALE)
    c.setLineWidth(1.2)
    c.line(MARGIN_X, FOOTER_Y, PAGE_W - MARGIN_X, FOOTER_Y)
    c.setFont(fonts.regular, 6.8)
    c.setFillColor(MUTED)
    c.drawRightString(PAGE_W - MARGIN_X, FOOTER_Y - 12, data["footer"])
    c.showPage()
    c.save()


EN_DATA = {
    "pdf_title": "Ningli Zhu - Concise CV",
    "name": "NINGLI ZHU",
    "title": "Senior UX Designer | AI UX",
    "contact": [
        {"label": "Shenzhen, CN; Rotterdam, NL"},
        {"label": "13814541151 / 18914780297"},
        {"label": "zhuningli001@163.com", "url": "mailto:zhuningli001@163.com"},
        {"label": "linkedin.com/in/n-zhu", "url": "http://www.linkedin.com/in/n-zhu/"},
    ],
    "labels": {
        "education": "EDUCATION",
        "skills": "SKILLS",
        "strengths": "STRENGTHS",
        "languages": "LANGUAGES",
        "profile": "PROFILE",
        "experience": "WORK EXPERIENCE",
    },
    "profile": (
        "Senior UX / AI-native designer across AI design platforms, consumer operating systems, websites, apps, "
        "cross-border digital marketing, and European cultural brand projects. I translate complex product, brand, "
        "and technology problems into clear workflows, reusable systems, and polished digital experiences grounded "
        "in design research and human-centered user insights."
    ),
    "education": [
        {
            "title": "MA, Digital Design",
            "meta": "AKV St.Joost, Avans University / 2017 - 2019",
            "url": "https://www.akvstjoostmasters.nl/programmes/situated-design",
        },
        {
            "title": "MA, Information Design",
            "meta": "Design Academy Eindhoven / 2016 - 2017",
            "url": "https://www.designacademy.nl/",
        },
        {
            "title": "BA, Visual Communication Design",
            "meta": "China Academy of Art / 2009 - 2013",
            "url": "https://en.caa.edu.cn/",
        },
    ],
    "skills": [
        {
            "label": "Capabilities",
            "items": [
                "AI UX, AIGC workflows, vibe coding",
                "User research, A/B Testing",
                "UX strategy, information architecture",
                "Data Visualization",
                "Interaction design, prototyping, design QA",
                "Design systems, visual systems, component thinking",
                "Brand, web, digital marketing and campaign design",
            ],
        },
        {
            "label": "Tools",
            "items": [
                "Coding & AI: Codex, ChatGPT",
                "Design: Figma, Adobe CC, Midjourney, Stable Diffusion",
                "Video & media: Kling, AE, Pr, C4D",
                "Other: Notion, Google Analytics",
            ],
        },
    ],
    "strengths": [
        "0-1 project ownership across product, brand and content systems",
        "8 years of overseas study and work experience",
        "Served 30+ international brands, institutions and cultural clients",
    ],
    "languages": ["Chinese / Native", "English / Fluent", "Dutch / B1"],
    "experience": [
        {
            "title": "Senior UX Designer",
            "meta": "Shenzhen Root Innovation, CXD Design Center / Shenzhen / Feb 2026 - Present",
            "bullets": [
                "Shaped UX flows for an internal AI design platform, translating competitor research and brand requirements into modules for industrial design, marketing pages, packaging, product imagery, patterns and PDP generation.",
                "Led independent-site redesign strategy around personalization, lifestyle aesthetics, brand trust and emotional storytelling.",
                "Defined AI search and assistant patterns that connect user labels, scenario content and narrative marketing flows to improve content matching and conversion.",
            ],
        },
        {
            "title": "UED Designer",
            "meta": "Huawei Nanjing Research Institute, UCD Design Center / May 2025 - Jan 2026",
            "url": "https://developer.huawei.com/consumer/en/design/",
            "bullets": [
                "Researched AI agents and frontier products, proposed AI-integrated concepts, and contributed to Haix Design language and interaction guidelines.",
                "Prototyped official-site intelligent search 2.0 and applied AIGC tools to concept exploration, product storytelling and delivery.",
                "Supported HarmonyOS 6.0 / Harmonium ecosystem design, spatial visual components and HCI patent writing.",
            ],
        },
        {
            "title": "Founder / Designer",
            "meta": "ZEN-ZHU Studio / Netherlands / Dec 2019 - Feb 2025",
            "bullets": [
                "Founded an independent studio serving startups, cultural institutions and researchers through creative strategy, identity, digital interface design and video.",
                "Delivered brand, website, exhibition and publication-related design for 30+ international organizations and clients.",
                "Connected cultural value and emotional storytelling with digital transformation and technology innovation.",
            ],
        },
        {
            "title": "UI/UX Designer, Digital Marketing",
            "meta": "NextportChina B.V. / Amsterdam / Aug 2021 - Dec 2023",
            "url": "https://www.nextportchina.com/",
            "bullets": [
                "Designed China-market brand and campaign experiences for European SMEs, including mobile app / mini-program UX, marketing visuals, website updates and event materials.",
                "Worked with clients including Aptamil/Nutrilon, ABB Robotics, PostNL, ICL Group, DSM, Schiphol, China Southern Airlines, Mauritshuis and Alipay.",
            ],
        },
        {
            "title": "Media Designer Intern",
            "meta": "UNI_VERSE Studio / Amsterdam / Jul 2020 - Dec 2020",
            "url": "https://universestudio.xyz/",
            "bullets": [
                "Assisted with 3D animation, campaign video design, VR brand-experience research and interaction concepts for online art exhibitions.",
            ],
        },
        {
            "title": "Visual Media Designer",
            "meta": "Jiangsu Broadcasting Corporation / Nanjing / Jul 2013 - Aug 2016",
            "bullets": [
                "Created TV-program packaging, promotional-video visuals, video effects editing, event key visuals, print materials and outdoor promotion assets.",
            ],
        },
    ],
    "footer": "Download-friendly concise CV - updated July 2026",
}


ZH_DATA = {
    "pdf_title": "朱宁莉 - 简洁版 CV",
    "name": "朱宁莉",
    "title": "高级 UX 设计师 | AI UX",
    "contact": [
        {"label": "深圳，中国；鹿特丹，荷兰"},
        {"label": "13814541151 / 18914780297"},
        {"label": "zhuningli001@163.com", "url": "mailto:zhuningli001@163.com"},
        {"label": "linkedin.com/in/n-zhu", "url": "http://www.linkedin.com/in/n-zhu/"},
    ],
    "labels": {
        "education": "教育背景",
        "skills": "专业技能",
        "strengths": "优势",
        "languages": "语言",
        "profile": "个人简介",
        "experience": "工作经历",
    },
    "profile": (
        "高级 UX / AI-native 设计师，经验覆盖 AI 设计平台、toC 操作系统、网站、APP、跨境数字营销与欧洲文化品牌项目。"
        "擅长把复杂的产品、品牌与技术问题转化为清晰的用户流程、可复用系统和有审美的数字体验，注重设计研究和以人为本的用户洞察。"
    ),
    "education": [
        {
            "title": "研究生，数字设计",
            "meta": "荷兰阿芳斯应用科学大学 AKV St.Joost / 2017 - 2019",
            "url": "https://www.akvstjoostmasters.nl/programmes/situated-design",
        },
        {
            "title": "研究生，信息设计",
            "meta": "荷兰埃因霍温设计学院 / 2016 - 2017",
            "url": "https://www.designacademy.nl/",
        },
        {
            "title": "本科，视觉传达设计（品牌设计）",
            "meta": "中国美术学院 / 2009 - 2013",
            "url": "https://en.caa.edu.cn/",
        },
    ],
    "skills": [
        {
            "label": "技能",
            "items": [
                "AI UX、AIGC 工作流、vibe coding",
                "用户研究、A/B Testing、数据可视化",
                "UX 策略、信息架构",
                "交互设计、原型设计、设计质量审查",
                "设计系统、视觉系统、组件化思维",
                "品牌、网站、数字营销与活动视觉",
            ],
        },
        {
            "label": "工具",
            "items": [
                "编程与 AI：Codex、ChatGPT",
                "设计：Figma、Adobe CC、MJ、SD",
                "视频媒体：可灵、AE、Pr、C4D",
                "其他：Notion、Google Analytics",
            ],
        },
    ],
    "strengths": [
        "0-1 全案经验，覆盖产品、品牌与内容系统",
        "8 年海外学习与工作经验，熟悉跨文化协作",
        "服务 30+ 国际品牌、机构与文化客户",
    ],
    "languages": ["中文 / 母语", "英语 / 流利", "荷兰语 / B1"],
    "experience": [
        {
            "title": "高级 UX 设计师",
            "meta": "深圳路特创新 ROOT，CXD 设计中心 / 深圳 / 2026.02 - 至今",
            "bullets": [
                "协助自研 AI 设计平台的 UX 流程设计，将竞品研究与品牌需求拆解为工业设计、营销页、包装、产品图、图案与 PDP 生成等功能模块。",
                "主导品牌独立站改版策略，围绕千人千面、生活美学、品牌信任与情感化叙事建立整体体验方向。",
                "构建智能搜索与 AI Assistant 体验模型，结合用户标签、情境内容和叙事型营销流程，提升内容匹配与转化效率。",
            ],
        },
        {
            "title": "UED 设计师",
            "meta": "华为（南京研究所），UCD 设计中心 / 2025.05 - 2026.01",
            "url": "https://developer.huawei.com/consumer/cn/design/?catalogVersion=V1",
            "bullets": [
                "调研 AI Agent 与前沿产品，提出 AI 融合创新方案，并参与 Haix Design 设计语言与交互规范完善。",
                "参与官网搜索 2.0 智能搜索项目，输出落地打样原型，并将 AIGC 工具应用于概念探索、方案表达与项目交付。",
                "协助鸿蒙 HarmonyOS 6.0 / Harmonium 生态端到端体验、智慧空间化视觉组件、设计故事和 HCI 专利撰写。",
            ],
        },
        {
            "title": "创始人 / 设计师",
            "meta": "ZEN-ZHU Studio / 荷兰 / 2019.12 - 2025.02",
            "bullets": [
                "创立独立设计工作室，为初创企业、艺术文化机构与研究者提供创意策略、品牌视觉、数字界面与视频设计。",
                "服务 30+ 国际机构与客户，覆盖品牌、网站、展览、出版物与研究课题相关设计。",
                "将情感与文化价值融入数字化转型和技术创新项目，连接策略、审美与可执行交付。",
            ],
        },
        {
            "title": "UI/UX 设计师，数字营销方向",
            "meta": "下一站中国 NextportChina B.V. / 阿姆斯特丹 / 2021.08 - 2023.12",
            "url": "https://www.nextportchina.com/",
            "bullets": [
                "面向欧洲中小企业设计中国市场品牌推广体验，覆盖 App / 小程序 UX、营销视觉、网站更新与展会物料。",
                "合作客户包括 Aptamil/Nutrilon、ABB 机器人、PostNL、ICL Group、DSM、史基浦机场、中国南方航空、海牙皇家美术馆与 Alipay 等。",
            ],
        },
        {
            "title": "媒体设计师，实习",
            "meta": "荷兰 UNI_VERSE Studio / 阿姆斯特丹 / 2020.07 - 2020.12",
            "url": "https://universestudio.xyz/",
            "bullets": [
                "协助团队设计三维动画与广告宣传片，参与项目视觉素材和动态内容制作。",
                "研究 VR 沉浸式品牌体验方案，并为线上艺术展览设计交互概念。",
            ],
        },
        {
            "title": "视觉媒体设计师",
            "meta": "江苏省广播电视总台集团 / 南京 / 2013.07 - 2016.08",
            "bullets": [
                "参与广播电视节目包装、宣传片后期视觉、平面主视觉与视频效果剪辑。",
                "负责线下及户外推广活动的主视觉、宣传物料和礼品设计，并协助演出与社区活动执行。",
            ],
        },
    ],
    "footer": "适合线上下载的简洁版 CV - 2026 年 7 月更新",
}


def main() -> None:
    os.makedirs(OUT_DIR, exist_ok=True)
    build_pdf(EN_DATA, os.path.join(OUT_DIR, "Ningli_Zhu_CV_Concise_EN.pdf"), "en")
    build_pdf(ZH_DATA, os.path.join(OUT_DIR, "Ningli_Zhu_CV_Concise_CN.pdf"), "zh")


if __name__ == "__main__":
    main()
