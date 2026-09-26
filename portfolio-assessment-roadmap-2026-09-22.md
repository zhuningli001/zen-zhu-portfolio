# 个人作品集现状评测与迭代路线图

**项目：** Ningli Zhu / Zen-Zhu Studio Portfolio  
**评测日期：** 2026-09-22  
**当前形态：** 原生 HTML / CSS / JavaScript 静态网站，部署目录为 `prototype/`

---

## 1. 本次评测范围

已阅读并交叉核对：

- `portfolio-strategy-v1.md`
- `homepage-copy-v1.md`
- `homepage-wireframe-v1.md`
- `reference-calibration-v1.md`
- `visual-interaction-direction-v1.md`
- `work-grid-content-v1.md`
- `DESIGN.md`
- `DEPLOYMENT.md`
- `.impeccable/design.json`
- `prototype/index.html`
- `prototype/about.html`
- `prototype/notes.html`
- `prototype/note-agents-ui-disappearing.html`
- `prototype/career-atlas-preview.html`
- `prototype/styles.css`
- `prototype/script.js`
- 当前图片、简历与 Atlas 素材

同时进行了桌面端和移动端浏览器检查、JavaScript 语法检查、本地链接检查、资源体积检查与浏览器错误检查。

外部校准标准主要包括：

- Nielsen Norman Group 对 UX 作品集、招聘与案例表达的研究；
- WCAG 2.2 可访问性标准；
- 当前设计岗位中对 craft、taste、过程判断与实际价值的综合要求。

---

## 2. 执行摘要

### 一句话判断

当前项目已经有一套相当成熟的**战略框架和视觉方向**，但公开网站仍主要是一个“有完整壳层的高保真原型”，还不是一个能够充分证明资历、判断力和结果的成熟作品集。

### 最大优势

你不是缺少方向，而是已经完成了最难的前半段：

- 定位已从“做过很多不同类型设计”收束为 AI-native UX、复杂系统、设计知识、品牌与文化的交叉能力；
- `Warm Editorial Atlas` 是可继续发展的、具有辨识度的视觉母题；
- 首页、About、Notes、双语、深浅主题、筛选、项目预览和响应式框架已经存在；
- 项目储备足以支持一个资深综合设计师叙事。

### 最大问题

网站目前的核心证据不足：

1. 项目卡片几乎全部仍是抽象色块，没有真实作品证据；
2. 没有真正的完整案例页，侧边预览也未达到文档定义的深度；
3. 首页在访客尚未建立信任前，放入了 Notes、Industry Radar、Rolling Atlas 等多个次级叙事，削弱了作品主线；
4. “综合”目前更多表现为分类数量，而不是通过少数案例证明你能在战略、系统、审美和交付之间建立联系；
5. 仓库中缺少策略文档反复提及的 `2026部分项目.pdf` 及主要案例源素材，因此当前无法验证 AI 项目的实际证据质量。

### 推荐的总体转向

不要把网站继续做成“内容越来越多的个人档案馆”。

应将其升级为：

> **一个以 3 个旗舰案例证明高级产品与系统能力、以 3–4 个视觉案例证明文化与审美跨度、以 Notes 和 Atlas 证明持续思考能力的资深设计师作品集。**

优先级必须是：

```text
可信证据 > 清晰定位 > 案例叙事 > 视觉识别 > 互动趣味 > 内容数量
```

---

## 3. 当前成熟度评分

| 维度 | 当前评分 | 判断 |
| --- | ---: | --- |
| 战略定位 | 8/10 | 已经形成清晰、差异化且可发展的方向 |
| 信息架构 | 7/10 | 主页面齐全，但首页次级内容偏多，作品主线不够强 |
| 案例内容深度 | 3/10 | 有文案模型与项目摘要，但没有可验证的完整案例 |
| 证据与结果 | 2.5/10 | 缺真实界面、过程图、指标、约束与结果证据 |
| 视觉系统概念 | 8/10 | Warm Editorial Atlas 的原则、tokens 与边界较完整 |
| 当前视觉完成度 | 5/10 | 排版和气质初步成立，但作品区仍像 placeholder prototype |
| 交互与动效 | 6/10 | 基础交互较丰富，但部分互动先于核心内容完成 |
| About / 个人叙事 | 6.5/10 | 有个人温度与完整经历，但信息偏长、专业主线仍可压缩 |
| 移动端 | 6/10 | 已有断点和菜单，部分页面首屏过长、信息密度与节奏需校正 |
| 可访问性 | 6.5/10 | 有语义、焦点、键盘和 reduced-motion 意识，但需要完整 WCAG 2.2 QA |
| 性能与维护性 | 5/10 | 静态架构简单，但大图、单体 CSS/JS 和内容硬编码会阻碍扩展 |
| 上线成熟度 | 3.5/10 | 可以部署，但不建议以当前内容状态作为正式求职主站 |

**综合判断：约 5.5/10。** 这是“策略成熟、框架可用、证据不足”的阶段。

---

## 4. 已经做对的部分

### 4.1 定位方向是正确的

现有文档已经不再把你包装成泛化的视觉设计师，而是尝试建立四个能力支柱：

- AI-native UX
- Complex Systems
- Design Technology
- Brand & Culture

这个组合能同时解释你的产品、品牌、跨文化、系统和创意技术经历。它比简单写“综合设计师 / multidisciplinary designer”更有竞争力。

### 4.2 视觉北极星具备辨识度

`Warm Editorial Atlas` 的优点是：

- 可以承载技术项目，不显得冷硬；
- 可以承载文化项目，不显得像企业 SaaS 官网；
- 有编辑、索引、档案和知识系统的暗示；
- 与你的跨学科经历、研究倾向和设计技术方向相符。

当前暖纸色、近黑文字、少量陶土色与橙色信号、细网格、系统化标签，已经形成基本语言。

### 4.3 框架已有较好的产品意识

现有实现包含：

- 桌面与移动导航；
- 双语切换；
- 深浅主题；
- 项目筛选；
- Featured rail；
- 项目侧边预览；
- Notes 列表；
- 键盘关闭与焦点管理；
- `prefers-reduced-motion` 降级；
- Netlify 静态部署配置。

JavaScript 语法检查通过，本地 HTML 链接未发现缺失，浏览器检查未发现控制台 error/warning。

### 4.4 已经具备清晰的项目分层意识

文档能够区分：

- Public
- Anonymized / Cropped
- Private / Interview Only
- Full Case
- Case Preview
- Visual Case
- Archive

这是成熟作品集非常重要的治理能力，应该保留并真正落实到内容与路由中。

---

## 5. 关键问题与优先级

### P0：缺少能够证明能力的完整案例

当前首页有 10 个项目，但没有独立的完整项目页。点击项目只打开一个文本侧栏，且侧栏没有文档中承诺的强视觉、方法图、结果或“打开完整案例”路径。

这会造成明显落差：

```text
首页声称：资深、系统、AI-native、设计技术
访客看到：抽象色块 + 概述文案
访客无法确认：你如何判断、如何协作、做了什么、产生了什么结果
```

**修复目标：** 先完成 3 个旗舰案例，不要先扩充更多项目。

### P0：项目素材没有进入网站

当前作品卡和 Featured 区采用统一色块与 `image-placeholder`。这让首页更像 wireframe，而不是高审美作品集。

仓库中也没有策略文档提及的 `2026部分项目.pdf`，AI 相关项目的截图、流程、框架和结果素材均未进入项目目录。

**修复目标：** 建立案例素材清单、公开等级和文件命名规范，并补齐第一批可展示素材。

### P0：首页价值主张不够稳定

Hero 使用轮换身份：UX Designer、Cultural Explorer、Yogi 等。这个互动有人味，但在首屏承担职业定位时会稀释高级职位信号，且 H1 的核心词不断变化。

建议把首屏改为稳定的职业主张：

> AI-native product designer and design systems thinker turning complex workflows into clear, scalable experiences.

个人身份、文化兴趣和生活侧面移动到 About 或 Hero 的次级短句，不再占据主标题。

### P1：首页存在叙事竞争

目前首页同时包含：

- Hero
- 四项能力
- Featured cases
- Selected work
- Notes
- Industry Radar
- Rolling Atlas
- About / Studio
- Contact

其中 Featured cases 与 Selected work 重复；Industry Radar 更像个人书签；Rolling Atlas 是有趣实验，但在案例不足时会让访客记住互动而不是专业能力。

**修复目标：** 首版首页只保留六段：

```text
Hero
Selected flagship work
Supporting work / range
Selected thinking
Short profile proof
Contact
```

Industry Radar 移入 Notes；Rolling Atlas 移入 Lab / About，或在案例完成后再回到首页。

### P1：定位仍需要从“能力列表”升级为“专业主张”

“四个能力支柱”适合内部组织，不应成为访客需要自己拼装的答案。

推荐主定位：

> **Senior Product & Experience Designer focused on AI-native products, complex systems and design infrastructure — with a background in brand, culture and cross-border digital experiences.**

中文工作版：

> **专注 AI 原生产品、复杂系统与设计基础设施的资深产品体验设计师，并具备品牌、文化与跨境数字体验背景。**

这样既保留“综合”，又避免“什么都会但没有主轴”。

### P1：案例摘要偏抽象，缺少结果语言

当前高频词包括：framework、system、knowledge、AI-ready、strategy、workflow。这些词方向正确，但如果没有以下信息，会显得像概念包装：

- 原始问题与业务背景；
- 你的具体职责和决策权；
- 时间、团队和限制；
- 关键判断及被放弃的方案；
- 可见的前后变化；
- 指标、反馈、采用情况或组织影响；
- 哪些内容因保密被抽象化。

**修复目标：** 每个旗舰案例至少提供 5 类证据：问题、过程、决策、成品、结果。

### P1：公开、匿名和私密状态还没有转化为体验规则

当前所有项目基本使用相似卡片和相似侧栏。建议区分：

- **Full case：** 直接进入独立案例页；
- **Case preview：** 有 3–5 张安全素材和完整摘要；
- **Anonymized：** 明确说明信息被抽象化，使用方法图与脱敏局部；
- **Private case：** 不出现在公开主网格，只在简历或面试说明中出现；
- **Visual case：** 强视觉、短文案、强调 craft 与交付范围。

### P2：About 内容有温度，但需要更像资深设计师叙事

当前 About 首屏的 “I hope to be a bright presence” 有辨识度，但职业叙事和个人愿望并列时，专业证据出现较晚。

建议形成三层：

1. **Professional thesis：** 我解决什么类型的问题；
2. **Career arc：** 视觉传播 → 信息设计 → 产品 UX → AI 与设计知识；
3. **Human texture：** 艺术、文化、瑜伽、旅行、社区观察。

个人温度保留，但不替代职业论点。

### P2：双语内容并未完全对应

界面文案可切换，但项目 description、challenge、output、evidence 等大量内容仍以英文硬编码。中文模式会出现中英文混杂。

**修复目标：** 将项目内容改为结构化的 `en / zh` 数据对象，并把英文版视作国际招聘主版本，中文版视作完整本地化，而不是局部翻译。

### P2：资源体积过大

当前两张图片尤其突出：

- `ningli-portrait.png`：约 20.79 MB
- `gallery-day.jpg`：约 22.76 MB

这会显著影响移动端加载、LCP 和用户第一印象。

**修复目标：** 生成 AVIF/WebP 多尺寸版本，设置 `width`、`height`、`srcset`、`sizes`、`loading="lazy"`，首屏图控制在合理体积内。

### P2：内容和样式的维护成本正在上升

当前：

- `styles.css` 约 106 KB；
- `script.js` 约 78 KB；
- 项目、翻译、Notes 和互动逻辑集中在单一脚本；
- 作品卡内容与页面结构耦合。

对于当前静态站还可以运行，但继续增加案例会很难维护。

**修复目标：** 不必立刻迁移框架，但需要先拆分数据、页面模块与样式所有权。

### P3：原项目版本历史未随文件迁移

当前目录不是可用的 Git 仓库，没有可读取的提交历史。继续开发前建议重新建立版本控制或恢复原 `.git` 历史。

---

## 6. 推荐的网站定位与展示策略

### 6.1 核心身份

推荐采用“主轴 + 纵深”的结构：

**主轴：**

- Senior Product / UX Designer
- AI-native Products
- Complex Systems
- Design Infrastructure

**纵深：**

- Brand systems
- Cultural and cross-border experiences
- Visual communication
- Independent studio practice

这比“综合设计师”更有识别度，也能覆盖你的真实经历。

### 6.2 访客应在不同时间尺度获得的信息

#### 10 秒内

- 你是谁；
- 你擅长哪类高价值问题；
- 你是否具备资深感与视觉判断。

#### 60 秒内

- 看见 3 个最强项目；
- 理解你的职责、项目类型与结果；
- 知道哪些案例可公开、哪些被匿名化。

#### 5–10 分钟内

- 读完一个完整案例；
- 看见你的过程、决策、协作和影响；
- 确认你不仅能做界面，也能处理系统、内容、品牌与交付。

### 6.3 首页不需要证明“所有经历”

首页目标不是完整，而是建立信任和引导深读。

推荐首页项目数量：

- 3 个旗舰案例；
- 3–4 个 supporting / visual cases；
- 1 个简洁 archive 入口。

不要默认展示 10 张同等重要的项目卡。

---

## 7. 信息架构 v2

```text
Home
├── Positioning
├── 3 Flagship Cases
├── Selected Range / Supporting Work
├── Selected Thinking
├── Profile Proof
└── Contact

Work
├── Featured
├── Product & AI
├── Systems & Infrastructure
├── Brand / Web / Culture
└── Archive

Case Detail
├── Executive Summary
├── Context / Role / Team / Timeline
├── Challenge and Constraints
├── Key Decisions
├── Process and System
├── Final Experience
├── Outcome / Evidence
└── Reflection / Next Case

Notes
├── Featured Essays
├── Short Notes
└── Topics

About
├── Professional Thesis
├── Career Arc
├── Selected Experience
├── Studio Practice
├── Personal Layer
└── CV / Contact

Lab（后续）
├── Rolling Atlas
└── Creative Technology Experiments
```

### 首页建议删除或移位

| 当前模块 | 建议 |
| --- | --- |
| 网站正在更新中橙色通知条 | 正式版移除；如需状态提示，改成页脚小字 |
| Role rotator | 改为稳定职业主张；个人身份移到 About |
| Capability Board | 可压缩成 Hero 下的一行 proof tags，避免重复 |
| Featured cases + Selected work | 合并为一个分层作品区 |
| Industry Radar | 移入 Notes 或独立 Resources |
| Rolling Atlas | 移入 Lab / About，案例成熟后再决定是否回首页 |
| About preview | 保留，但缩短为 2–3 行职业背景 |

---

## 8. 案例优先级建议

### 8.1 第一梯队：旗舰案例候选

| 项目 | 战略价值 | 当前风险 | 推荐处理 |
| --- | --- | --- | --- |
| YIOne / 亿万 APP | 最能证明 0–1 AI 产品、产品框架和品牌系统 | 素材未入库；需确认公开边界 | Flagship，完整案例或高质量 preview |
| Momcozy AI Component & Module Knowledge System | 最能证明 design infrastructure 与 AI-readable knowledge | 内部信息与结果需脱敏 | Flagship，方法与系统图主导 |
| Momcozy Website Redesign & Upgrade | 能连接商业、搜索、个性化、品牌和电商 UX | 需补真实决策与结果 | Flagship 或次旗舰 |
| Factualist | 公开性高，可证明品牌、平台与社会议题表达 | AI 主线较弱 | 建议优先做成第一个完整案例模板 |

### 8.2 第二梯队：视觉与文化跨度

- Jing Qiong Er
- Cynergy
- ECA International Cultural Creative Award
- Studio AIWEN

这些案例不必写成同样长的 UX case study。建议采用 visual case：强图、短叙事、角色与交付范围清楚。

### 8.3 暂缓公开

- CXD / ROOT 内部 AI 平台：在权限不清楚前只做匿名摘要；
- Huawei / HarmonyOS / AIOS：以面试私密材料为主；
- Tesla exercise：继续排除在公开网站之外；
- 未经批准的内部指标、客户后台、URL、账户与路线图。

### 8.4 最实际的制作顺序

建议双轨推进：

**轨道 A：快速建立完整案例模板**

1. Factualist
2. Jing Qiong Er 或 ECA

**轨道 B：建立未来定位的旗舰证据**

1. YIOne
2. Momcozy AI Knowledge System
3. Momcozy Website Redesign

这样不会因为内部项目素材和脱敏决策未完成而阻塞整个网站。

---

## 9. 旗舰案例模板 v2

每个旗舰案例建议控制为 7–10 个章节，每章只回答一个问题。

### 01. Hero Summary

- 项目是什么；
- 你解决了什么；
- 你的角色；
- 时间 / 团队 / 平台；
- 一张最强视觉或系统图。

### 02. Why It Mattered

- 用户问题；
- 业务问题；
- 为什么旧方式不够；
- 项目成功意味着什么。

### 03. Constraints

- 时间；
- 团队；
- 技术；
- 数据；
- 组织；
- 保密边界。

### 04. My Ownership

明确区分：

- 我主导；
- 我与谁共同完成；
- 我影响但不直接负责；
- 团队其他成员贡献。

### 05. Key Decisions

只选择 2–4 个最能体现高级判断的决策：

- 做了什么选择；
- 为什么；
- 放弃了什么；
- 依据是什么；
- 如何验证。

### 06. System / Process

根据项目类型展示：

- 信息架构；
- 用户流程；
- 服务蓝图；
- 组件与模块关系；
- AI 输入、决策、生成、校验、人工控制路径；
- 品牌到界面的规则映射。

### 07. Final Experience

- 桌面 / 移动；
- 核心场景；
- 边界状态；
- 关键交互；
- 真实视觉细节。

### 08. Outcome / Evidence

优先级：

1. 真实业务或用户指标；
2. 采用范围、交付数量、效率变化；
3. 用户或团队反馈；
4. 决策被采用、系统被复用；
5. 若无法公开数字，使用范围化、定性或脱敏描述。

不能只写 deliverables。

### 09. Reflection

- 哪个判断最重要；
- 哪个方案失败；
- 如果再做一次会改变什么；
- 这项工作如何影响你之后的方法。

### 10. Next Case

给出明确的相邻项目路径，不把用户丢回首页。

---

## 10. 视觉风格升级方向

### 10.1 保留的核心

继续使用：

- Warm Editorial Atlas；
- 暖纸色与近黑文字；
- 克制的陶土 / 橙色信号；
- 细网格、索引、注释和系统线；
- 编辑排版 + 产品逻辑；
- 真实项目成为视觉中心。

### 10.2 需要升级的核心

#### 从“同一种色块”变为“三种封面语法”

根据项目性质建立三类 art direction：

1. **Product Evidence Cover**  
   UI 局部 + 流程线 + 一句关键结论。

2. **System Diagram Cover**  
   架构图、模块关系、规则或知识结构。

3. **Cultural Visual Cover**  
   摄影、印刷物、视觉识别、空间或活动物料。

所有封面共享网格、标注、色彩和标题系统，但不强迫所有项目长得一样。

#### 从“装饰性标签”变为“编辑注释”

标签只保留访客真正需要的信息：

- Role
- Year
- Type
- Disclosure status

技术词和能力词放在案例正文，不要让卡片被 tags 淹没。

#### 从“整站都有互动”变为“一处一个重点动作”

- 首页：作品封面 reveal / preview；
- 案例：章节导航与证据切换；
- Notes：主题筛选；
- About：职业路径展开；
- Lab：允许更实验性的交互。

### 10.3 排版建议

当前 Space Grotesk + IBM Plex Sans 可继续用于 MVP，不建议在案例素材缺失时先更换字体。

优先修正：

- Hero 文案稳定性；
- 中文字重与换行；
- 长案例的正文宽度；
- 图注、角色、时间、结果数据的层级；
- 大标题与实际作品图之间的比例；
- 移动端首屏高度和段落长度。

### 10.4 橙色使用

保留 Rare Orange Rule。橙色只用于：

- 焦点；
- 关键行动；
- 少量系统节点；
- 特别需要注意的状态。

不再用整条高饱和通知栏长期占据首屏。

---

## 11. 动效与交互策略

### 保留

- Drawer / side preview；
- 温和的 hover reveal；
- 筛选过渡；
- 深浅主题；
- reduced-motion 支持。

### 调整

- Role rotator 改为次级、可暂停或移除；
- 连续 marquee 不承担重要信息；
- 移动端不依赖 hover；
- Side panel 必须有可见关闭、焦点锁定、Esc、返回焦点和真实 CTA；
- 页面进入动效只用于组织阅读，不做全站表演。

### 后续可以形成的签名交互

推荐把“Atlas”从随机装饰概念转成与项目有关的系统：

```text
项目 → 决策 → 能力 → 领域 → 证据
```

它可以是案例间的关联导航，而不只是独立小游戏。这样互动会直接证明你的系统思维。

---

## 12. 技术结构建议

### 阶段 1：继续沿用静态技术栈

当前没有必要为了“现代感”立即迁移 React / Next.js。先用现有静态架构完成内容与案例，降低不必要的重建成本。

建议拆分为：

```text
prototype/
├── data/
│   ├── projects.js
│   ├── notes.js
│   └── i18n.js
├── scripts/
│   ├── site.js
│   ├── work-grid.js
│   ├── project-panel.js
│   └── theme-language.js
├── styles/
│   ├── tokens.css
│   ├── base.css
│   ├── components.css
│   ├── pages/
│   └── utilities.css
├── work/
│   ├── factualist.html
│   ├── yione.html
│   └── ...
└── assets/projects/
```

### 阶段 2：满足以下条件再考虑框架迁移

只有出现这些需求时再考虑 Astro、Eleventy 或 React：

- 案例数量明显增长；
- 中英文页面需要自动生成；
- 内容由 Markdown / CMS 管理；
- 组件重复明显；
- 需要更系统的 SEO、图片处理和静态路由。

若迁移，优先考虑适合作品集和静态内容的 Astro，而不是默认使用大型 React 应用。

### 性能基线

- 首屏关键图片优先加载；
- 非首屏图片 lazy load；
- 输出 AVIF / WebP；
- 单张普通展示图尽量控制在 100–400 KB 区间；
- 明确图片尺寸，避免布局跳动；
- 外部字体失败时保持稳健 fallback；
- 检查第三方社交链接与隐私；
- 正式上线前跑 Lighthouse 与真实移动网络测试。

---

## 13. 内容素材清单

每个旗舰案例请建立一个文件夹，至少包含：

```text
01-brief.md
02-public-boundary.md
03-role-team-timeline.md
04-problem-and-goals.md
05-process-assets/
06-final-assets/
07-outcomes.md
08-feedback-and-quotes.md
09-cover-options/
10-case-copy-draft.md
```

每个项目需要回答：

1. 项目是否可以公开？
2. 哪些公司名、界面、数字必须隐藏？
3. 你的正式角色是什么？
4. 你独立负责与合作完成的边界是什么？
5. 最难的 2–3 个决策是什么？
6. 有什么可见结果？
7. 有什么能证明结果的截图、数据、反馈或采用情况？
8. 如果没有数字，最可信的替代证据是什么？
9. 哪一张图能代表这个项目？
10. 该案例希望招聘方记住什么？

---

## 14. 分阶段路线图

### Phase 0 — 恢复与盘点（1–2 个工作日）

目标：确保旧项目可以稳定继续开发。

任务：

- 恢复或重新初始化 Git；
- 找回 `2026部分项目.pdf` 和原案例文件；
- 建立项目素材目录；
- 标注 Public / Anonymized / Private；
- 确认英文版和中文版的主次关系；
- 压缩现有超大图片；
- 记录当前线上域名与 Netlify 状态。

完成标准：所有素材有归属、公开边界和下一步动作。

### Phase 1 — 作品集内容 MVP（5–8 个工作日）

目标：让网站首先具备“可说服人”的案例能力。

任务：

- 完成 Factualist 全案例；
- 完成 YIOne 或 Momcozy AI Knowledge System 的脱敏案例框架；
- 建立统一案例模板；
- 为首页准备 3 个真实封面；
- 将项目数据拆出 `script.js`；
- 给 side panel 增加图像、角色、结果和明确 CTA。

完成标准：至少 2 个项目可完整阅读，其中 1 个能代表未来 AI / systems 方向。

### Phase 2 — 首页叙事重构（3–5 个工作日）

目标：10 秒内建立资深、系统、未来导向的专业印象。

任务：

- 固定 Hero 职业主张；
- 合并 Featured 与 Selected Work；
- 将首页主项目收敛为 3 + 3；
- 移出 Industry Radar 和 Rolling Atlas；
- 压缩 Capability Board；
- 重写 About preview 与 Contact；
- 去除“更新中”“Focus draft”等原型语言。

完成标准：首屏、作品区和联系入口构成一条清晰转化路径。

### Phase 3 — 视觉系统与案例 Art Direction（5–10 个工作日）

目标：让视觉品质与案例内容匹配。

任务：

- 定义三类项目封面模板；
- 建立案例图片比例与图注系统；
- 调整字体比例、正文宽度和移动端节奏；
- 完善浅色 / 深色图像处理；
- 统一图表、流程图、标注和数据卡；
- 为文化项目建立更具触感的视觉节奏。

完成标准：不看文案也能区分产品、系统、文化三类项目，同时仍属于同一作品集。

### Phase 4 — About、Notes 与 Lab（3–6 个工作日）

目标：用次级页面增加可信度与人格，而不干扰作品主线。

任务：

- About 改为 professional thesis + career arc + human layer；
- Notes 只置顶 3–5 篇最能支持定位的文章；
- Industry Radar 并入 Notes；
- Rolling Atlas 重新定义为 Lab 或能力关联地图；
- 完整双语化关键内容。

完成标准：次级内容能够解释你如何思考，而不是制造信息噪音。

### Phase 5 — 上线 QA（2–4 个工作日）

目标：达到可投递、可分享、可维护状态。

任务：

- WCAG 2.2 AA 对比度、键盘、焦点、目标尺寸检查；
- 320 / 390 / 768 / 1024 / 1440 宽度检查；
- Safari、Chrome、移动浏览器检查；
- Lighthouse 性能、SEO、Accessibility 检查；
- Open Graph、favicon、canonical、sitemap、robots；
- 404 页面；
- 所有外链、PDF、下载和邮件路径验证；
- Netlify preview 后再连接正式域名。

完成标准：没有 placeholder、draft 文案、断链、超大图、关键可访问性错误或无去向的 CTA。

---

## 15. 建议的近期工作顺序

下一轮不要先做大规模视觉重设计。推荐按这个顺序执行：

1. **建立案例素材与公开边界清单；**
2. **选定第一个完整案例；**
3. **搭建案例详情页模板；**
4. **把真实项目图放入首页；**
5. **再重构首页叙事与视觉；**
6. **最后完善 Notes、Atlas 和更实验性的动效。**

原因：当前最大短板不是页面不够漂亮，而是“高水平主张没有被高质量证据支撑”。先完成证据，视觉优化才不会停留在外壳。

---

## 16. 第一阶段完成定义

当以下条件全部满足时，可以认为作品集从“原型”进入“专业可投递版本”：

- 首页没有 draft、placeholder 或长期更新提示；
- 首屏有稳定、清晰的职业定位；
- 至少 3 张真实项目封面；
- 至少 2 个可完整阅读的案例；
- 每个旗舰案例包含角色、约束、决策、过程、最终体验和结果；
- 匿名项目明确展示边界；
- About 能在 90 秒内读懂职业演进；
- 英文主版本无中英文混杂；
- 关键图片已优化；
- 移动端与键盘路径完成验证；
- 联系方式、简历和外链都可用。

---

## 17. 最终战略原则

这个网站不应证明“我做过很多东西”，而应证明：

> **我能够理解复杂问题，建立系统，做出有依据的设计判断，并把它们转化为具有审美、可交付、可扩展的真实体验。**

你的文化、品牌、视觉和跨境经历不是需要被隐藏的“旁支”，而应该成为 AI 与系统能力的独特纵深。但它们必须围绕一个清晰主轴组织，而不是在首页平行竞争。
