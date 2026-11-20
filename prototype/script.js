const projects = [
  {
    id: "yione",
    title: "YIOne / 亿万 APP",
    year: "2026",
    time: "2026",
    focus: ["ai-systems", "product-ux"],
    context: "Independent / 0-1",
    size: "large",
    status: "Case Preview",
    tags: ["AI Product", "Digital Twin", "Design System"],
    description:
      "An AI digital twin platform for entrepreneurship, social matching and resource discovery.",
    hover:
      "0-1 AI product framework for turning founder intent, memory and network resources into an executable digital twin system.",
    mode: {
      en: "0-1 independent product design",
      zh: "0-1 独立产品设计",
    },
    complexity:
      "Turning an abstract AI social concept into product structure across AI conversation, digital twin cards, social discovery, tasks and messaging.",
    output:
      "Product framework, user flow, brand system, interface direction and design system foundations.",
    evidence: ["0-1 AI product", "Digital twin flows", "Brand + UI system"],
    surface: "#eaded3",
    imageTone: "warm",
  },
  {
    id: "momcozy-knowledge",
    title: "Momcozy AI Component & Module Knowledge System",
    titleZh: "Momcozy AI组建&模块-知识系统",
    year: "2026",
    time: "2026",
    focus: ["ai-systems"],
    context: "Company / Systems",
    size: "large",
    status: "Case Preview",
    tags: ["Design Knowledge", "PDP Modules", "AI-ready Assets"],
    description:
      "An AI-ready PDP asset and module assembly system that turns components into reusable design knowledge.",
    hover:
      "From component library to AI-readable design knowledge: modules, rules, decision gates and QA loops for PDP generation.",
    mode: {
      en: "Company project · lead design",
      zh: "职场项目 · 主设计",
    },
    complexity:
      "The project moves beyond a normal component library and defines rules, contracts, decision gates and QA logic that both people and AI can understand.",
    output:
      "Component Knowledge Layer, Module Assembly Layer, PDP Layer, module contracts, preview portal and QA gates.",
    evidence: ["Module contracts", "AI-ready PDP rules", "QA gates"],
    surface: "#d9d4ca",
    imageTone: "system",
  },
  {
    id: "momcozy-web",
    title: "Momcozy Website Redesign & Upgrade",
    titleZh: "Momcozy独立站升级优化",
    year: "2026",
    time: "2026",
    focus: ["ai-systems", "product-ux", "web-brand"],
    context: "Company / Strategy",
    size: "medium",
    status: "Case Preview",
    tags: ["AI Search", "Personalization", "E-commerce UX"],
    description:
      "A strategic redesign proposal connecting AI search, personalization, modular homepage strategy and brand storytelling.",
    hover:
      "Transforming an e-commerce site from listing logic into intent-driven search, personalized content and brand relationship design.",
    mode: {
      en: "Company project · lead design",
      zh: "职场项目 · 主设计",
    },
    complexity:
      "The redesign connects fuzzy search, AI assistant interaction, two strategy models, four user tags and modular homepage combinations.",
    output:
      "Sitemap, AI search model, assistant interaction, personalized homepage strategy and desktop/mobile demos.",
    evidence: ["AI search model", "Personalized homepage", "Mobile + desktop demos"],
    surface: "#d8c2bd",
    imageTone: "web",
  },
  {
    id: "cxd-ai",
    title: "CXD AI Product Marketing Design Platform",
    titleZh: "CXD中心 AI营销设计平台",
    year: "2026",
    time: "2026",
    focus: ["ai-systems", "product-ux"],
    context: "Company / Internal",
    size: "medium",
    status: "Anonymized",
    tags: ["AI Design Tool", "Prompt-to-design", "Workflow"],
    description:
      "An internal AI-driven design platform for e-commerce and brand marketing scenarios.",
    hover:
      "An AI design platform connecting prompt templates, image generation, brand modules and scenario-based marketing workflows.",
    mode: {
      en: "Company project · lead design",
      zh: "职场项目 · 主设计",
    },
    complexity:
      "Multiple scenarios needed to share a clear interaction model: industrial design, marketing sets, PDP pages, patterns and packaging.",
    output:
      "Scenario module overview, canvas editing flow, prompt-to-design workflow and design system foundations.",
    evidence: ["Prompt workflow", "Canvas editing", "Scenario modules"],
    surface: "#dce0e4",
    imageTone: "product",
  },
  {
    id: "factualist",
    title: "Factualist",
    year: "2025",
    time: "2025",
    focus: ["web-brand", "culture-media"],
    context: "Studio / NGO",
    size: "small",
    status: "Full Case",
    tags: ["Brand System", "Web Platform", "Guidelines"],
    description:
      "A brand identity and web platform for an SRHR content bank and collaborative knowledge space.",
    hover:
      "A visual identity system for trust, care and collaborative content exchange.",
    mode: {
      en: "Studio collaboration · brand and website design",
      zh: "工作室合作 · 品牌与网站设计",
    },
    complexity:
      "The platform needed to balance trust, professionalism, care and inherited RNW brand DNA.",
    output:
      "Logo design, visual language, website interface direction and full brand guideline system.",
    evidence: ["Brand system", "Web platform", "Guidelines"],
    surface: "#d8d1e4",
    imageTone: "brand",
  },
  {
    id: "jing-qiong-er",
    title: "Jing Qiong Er",
    titleZh: "蒋琼耳-艺术家官网",
    year: "2024",
    time: "2024",
    focus: ["web-brand", "culture-media"],
    context: "Independent / Artist",
    size: "small",
    status: "Visual Case",
    tags: ["Artist Website", "Cultural Design", "Editorial"],
    description:
      "A refined artist website for presenting cross-cultural art, design and personal narrative.",
    hover:
      "Capturing an artist's cross-cultural practice through a clean content structure and quiet visual system.",
    mode: {
      en: "0-1 independent design",
      zh: "0-1 独立设计",
    },
    complexity:
      "The work required a calm structure that could hold rich cultural projects, visual archives and personal narrative across devices.",
    output:
      "Website structure, desktop/mobile page designs, gallery logic and visual direction.",
    evidence: ["Gallery logic", "Editorial structure", "Responsive website"],
    surface: "#e6ded2",
    imageTone: "culture",
  },
  {
    id: "cynergy",
    title: "Cynergy",
    titleZh: "Cynergy 官网",
    year: "2024",
    time: "2024",
    focus: ["web-brand", "culture-media"],
    context: "Independent / Web",
    size: "small",
    status: "Visual Case",
    tags: ["Web Design", "Cross-cultural", "Grid System"],
    description:
      "A clean corporate website for a cross-cultural venture and relationship-building company.",
    hover:
      "A restrained website system for a company positioned around culture, events and cross-border relationships.",
    mode: {
      en: "0-1 independent website design",
      zh: "0-1 独立网站设计",
    },
    complexity:
      "The site needed to communicate a refined cross-cultural business identity without becoming visually noisy.",
    output:
      "Homepage design, portfolio structure, visual system and editorial grid direction.",
    evidence: ["Homepage system", "Editorial grid", "Cross-cultural identity"],
    surface: "#ddd9cf",
    imageTone: "web",
  },
  {
    id: "eca",
    title: "ECA International Cultural Creative Award",
    titleZh: "ECA 国际设计大赛",
    year: "2024",
    time: "2024",
    focus: ["web-brand", "culture-media"],
    context: "Company / Cultural Event",
    size: "small",
    status: "Medium Case",
    tags: ["Identity", "Campaign", "Exhibition"],
    description:
      "A multi-touchpoint identity and communication system for an international cultural creative award.",
    hover:
      "A cultural award identity system spanning posters, web, campaign, exhibition and ceremony touchpoints.",
    mode: {
      en: "Company project · visual design lead",
      zh: "职场项目 · 视觉主设计",
    },
    complexity:
      "The project spanned multiple stages and media, from visual identity and campaign materials to exhibition and ceremony touchpoints.",
    output:
      "Logo, posters, website/media assets, award materials, exhibition visuals and motion direction.",
    evidence: ["Campaign identity", "Exhibition assets", "Award materials"],
    surface: "#ded8c8",
    imageTone: "event",
  },
  {
    id: "studio-aiwen",
    title: "Studio AIWEN",
    titleZh: "AIWEN 艺术家网站",
    year: "2021-2023",
    time: "2021-2023",
    focus: ["web-brand", "culture-media"],
    context: "Studio / Research-led",
    size: "small",
    status: "Archive",
    tags: ["Webflow", "Speculative Design", "Writing"],
    description:
      "A website for a design theorist and artist working with speculative design and planetary communication technologies.",
    hover:
      "Research-led website structure for writing, speculative design and time-based art.",
    mode: {
      en: "Studio project · website design and build",
      zh: "工作室项目 · 网站设计与搭建",
    },
    complexity:
      "The site needed to organize abstract research, writing and art practice into a clear public-facing structure.",
    output:
      "Research, sitemap, prototype, Webflow implementation and content structure.",
    evidence: ["Research sitemap", "Webflow build", "Content structure"],
    surface: "#d9d5cc",
    imageTone: "archive",
  },
  {
    id: "future-past",
    title: "Future of the Past",
    year: "Before 2021",
    time: "archive",
    focus: ["culture-media"],
    context: "Archive / Research",
    size: "small",
    status: "Archive",
    tags: ["Information Mapping", "Culture", "Web"],
    description:
      "A documented living database for interviews, curated content and cultural research.",
    hover:
      "An early research and information mapping project for organizing audio, visual and text-based cultural content.",
    mode: {
      en: "Archive project · research and prototype",
      zh: "早期项目 · 研究与原型",
    },
    complexity:
      "The project emphasized organizing mixed-media cultural content into a readable database-like web experience.",
    output:
      "Information hierarchy, research mapping, wireframes and prototype structure.",
    evidence: ["Research mapping", "Information hierarchy", "Prototype"],
    surface: "#d1cabd",
    imageTone: "archive",
  },

  {
    id: "halovida", title: "HALOVIDA", titleZh: "HALOVIDA 品牌与独立站",
    year: "—", time: "undated", focus: ["web-brand"],
    context: "Brand / Website", size: "large", status: "Case Preview",
    tags: ["Brand", "E-commerce", "Visual system"],
    description: "A connected brand and e-commerce design scope spanning identity, product storytelling, website and channel visuals.",
    mode: {en: "Brand and website design · contribution scope under review", zh: "品牌与独立站设计 · 具体采用范围待核对"},
    complexity: "Connecting the brand story, product-line visuals, packaging proposals and website experience across channels.",
    output: "Brand visual direction, website upgrade, channel assets and packaging proposals. Adoption and individual production responsibilities need confirmation.",
    evidence: ["Visual identity", "Website", "Channel assets"],
    surface: "#e5e5e1", imageTone: "brand",
  },
  {
    id: "mauritshuis", title: "Mauritshuis", titleZh: "海牙皇家美术馆小程序",
    year: "—", time: "undated", focus: ["product-ux", "culture-media"],
    context: "Museum / Mobile", size: "small", status: "Case Preview",
    tags: ["Mini Program", "Information Architecture", "Culture"],
    description: "A mobile experience connecting Chinese audiences with artworks, museum information and bilingual guides.",
    mode: {en: "Museum mini program · design contribution", zh: "美术馆小程序 · 设计贡献"},
    complexity: "Organizing visit information, collection highlights and bilingual guides for a lightweight mobile experience.",
    output: "Collection research, sitemap, information structure and mobile designs. Dates and individual ownership remain to be confirmed.",
    evidence: ["Collection research", "Information architecture", "Mobile design"],
    surface: "#e6e6e6", imageTone: "culture",
  },
];

const workPresentation = {
  "cxd-ai": {
    "zh": [
      "AI 设计平台",
      "从内部 Excel 需求出发，衔接需求理解、套图规划与设计师确认的 AI 协作流程。",
      "内部平台 / 产品体验",
      [
        "AI 协作",
        "营销设计"
      ],
      "二期 UI/UX 完成，未进入技术开发；一期已开发内测。"
    ],
    "en": [
      "AI Design Platform",
      "An AI workflow connecting Excel briefs, image-set planning and designer approval.",
      "Internal platform / Product UX",
      [
        "AI workflow",
        "Marketing design"
      ],
      "Phase 2 UI/UX complete; engineering has not started. Phase 1 is in internal testing."
    ]
  },
  "momcozy-web": {
    "zh": [
      "Momcozy 独立站升级",
      "围绕不同育儿阶段，组织导航、智慧搜索与个性化购物发现路径。",
      "设计提案 / 电商体验",
      [
        "智慧搜索",
        "个性化体验"
      ],
      "调研与设计提案，未完全落地，尚无用户反馈。"
    ],
    "en": [
      "Momcozy Website Experience",
      "Navigation, smart search and personalized discovery for different parenting stages.",
      "Proposal / E-commerce UX",
      [
        "Smart search",
        "Personalization"
      ],
      "Research and design proposal; not fully implemented, with no user feedback collected."
    ]
  },
  "yione": {
    "zh": [
      "YIOne / 亿万 APP",
      "将 AI 分身、对话与资源发现组织为创业协作产品体验。",
      "独立项目 / 0–1 产品",
      [
        "AI 产品",
        "移动体验"
      ],
      "PDF 展示产品框架、用户旅程与设计系统；开发状态待核对。",
      "把 AI 分身概念转化为对话、名片、资源发现与社交互动的产品结构。",
      "产品框架、用户旅程、品牌和移动界面设计系统。"
    ],
    "en": [
      "YIOne",
      "An AI venture collaboration experience connecting digital twins, conversation and resource discovery.",
      "Independent / 0–1 product",
      [
        "AI product",
        "Mobile UX"
      ],
      "Product framework, user journeys and design system are documented; development status needs confirmation."
    ]
  },
  "momcozy-knowledge": {
    "zh": [
      "Momcozy 组件与模块知识系统",
      "将组件、场景和使用规则组织为可供人与 AI 理解的设计知识。",
      "设计基础设施 / 系统",
      [
        "组件与模块",
        "设计知识"
      ],
      "展示知识系统方案与预览；不将规划模块描述为已上线能力。",
      "让组件、模块、使用场景和规则能够作为连续的设计知识被理解。",
      "知识分层、组件预览、模块组织与使用规则方案。"
    ],
    "en": [
      "Momcozy Design Knowledge System",
      "Organizing components, contexts and usage rules into design knowledge for people and AI.",
      "Infrastructure / Systems",
      [
        "Components",
        "Design knowledge"
      ],
      "System proposal and preview; planned capabilities are not presented as shipped features."
    ]
  },
  "eca": {
    "zh": [
      "ECA 国际文创设计大赛",
      "从品牌识别与动画传播，到展览、书籍和物料，构建贯穿活动全程的设计体验。",
      "全链路设计 / 综合文化活动",
      [
        "品牌与动画",
        "展览与出版"
      ],
      "覆盖品牌、传播、展览、书籍与活动物料，具体个人贡献以案例证据展开。",
      "在大赛各阶段、空间和媒介间保持连贯识别，并支撑活动推进。",
      "Logo、海报宣传、动画、展览展示、书籍设计及活动物料。"
    ],
    "en": [
      "ECA Creative Award",
      "An end-to-end event design experience across identity, motion, exhibition, books and physical materials.",
      "End-to-end design / Cultural event",
      [
        "Identity & motion",
        "Exhibition & books"
      ],
      "Identity, communication, exhibition, book and event-material design; individual contributions to be detailed in the case."
    ]
  },
  "jing-qiong-er": {
    "zh": [
      "蒋琼耳艺术家网站",
      "用图库、编辑结构与跨设备体验，组织艺术家的跨文化创作。",
      "独立设计 / 艺术家网站",
      [
        "编辑设计",
        "响应式网站"
      ],
      "PDF 的 2025 项目分组与旧站 2024 标记不一致，具体年份待核对。",
      "组织多类型艺术作品、项目与个人叙事，并兼顾不同设备阅读。",
      "网站信息结构、桌面与移动页面、作品图库设计。"
    ],
    "en": [
      "Jing Qiong Er",
      "An editorial gallery and cross-device website for a cross-cultural artistic practice.",
      "Independent / Artist website",
      [
        "Editorial design",
        "Responsive web"
      ],
      "The PDF groups this under 2025, while the old site says 2024. Exact dates need confirmation."
    ]
  },
  "factualist": {
    "zh": [
      "Factualist",
      "为内容分享与协作平台建立兼顾信任、关怀与专业感的品牌和网站。",
      "品牌 / 内容平台",
      [
        "品牌与网站",
        "内容组织"
      ],
      "PDF 支持品牌升级与 0–1 网站设计；具体日期和上线状态待核对。",
      "在内容共享平台中平衡专业感、信任与关怀，并延续品牌基础。",
      "品牌升级、视觉规范与桌面／移动网站设计。"
    ],
    "en": [
      "Factualist",
      "A brand and website balancing trust, care and professionalism for a collaborative content platform.",
      "Brand / Content platform",
      [
        "Brand & web",
        "Content structure"
      ],
      "Brand upgrade and 0–1 website design are documented; exact dates and launch status need confirmation."
    ]
  },
  "cynergy": {
    "zh": [
      "Cynergy 官网",
      "以克制的编辑网格呈现跨文化活动与客户项目。",
      "独立设计 / 企业网站",
      [
        "编辑网格",
        "项目展示"
      ],
      "PDF 的 2025 分组与旧站 2024 标记冲突，年份待核对。",
      "以简洁秩序呈现跨文化业务、活动案例与项目内容。",
      "网站与项目详情页、编辑网格与视觉方向。"
    ],
    "en": [
      "Cynergy",
      "An editorial grid presenting cross-cultural events and client projects.",
      "Independent / Corporate web",
      [
        "Editorial grid",
        "Portfolio"
      ],
      "The PDF groups this under 2025, while the old site says 2024. Exact dates need confirmation."
    ]
  },
  "studio-aiwen": {
    "zh": [
      "Studio AIWEN",
      "为艺术实践、写作与思辨研究建立清晰的网站内容结构。",
      "网站 / 研究实践",
      [
        "内容结构",
        "Webflow"
      ],
      "PDF 展示研究、原型及 Webflow 搭建流程；精确日期待核对。",
      "把写作、思辨研究与艺术实践组织成清晰的网站入口。",
      "研究、站点地图、原型、Webflow 网站与内容结构。"
    ],
    "en": [
      "Studio AIWEN",
      "A website structure for artistic practice, writing and speculative research.",
      "Website / Research practice",
      [
        "Content structure",
        "Webflow"
      ],
      "Research, prototyping and Webflow work are documented; exact dates need confirmation."
    ]
  },
  "future-past": {
    "zh": [
      "Future of the Past",
      "通过信息映射组织访谈、研究与混合媒体文化内容。",
      "档案 / 研究网站",
      [
        "信息映射",
        "文化研究"
      ],
      "PDF 标注 2017 年协作项目。",
      "将访谈、影像与文本研究连接成可阅读的信息体系。",
      "研究与信息映射、信息层级、线框和网站原型。"
    ],
    "en": [
      "Future of the Past",
      "Information mapping for interviews, research and mixed-media cultural content.",
      "Archive / Research website",
      [
        "Information mapping",
        "Cultural research"
      ],
      "The PDF identifies this as a collaborative project from 2017."
    ]
  },
  "halovida": {
    "zh": [
      "HALOVIDA 品牌与独立站",
      "从品牌叙事与产品视觉延伸到独立站及渠道表达，建立连续的品牌体验。",
      "品牌策略 / 网站设计",
      [
        "品牌与网站",
        "多渠道视觉"
      ],
      "品牌、网站与传播设计；精确时间、采用范围及拍摄职责待核对。",
      "协调品牌定位、产品线视觉、包装与网站之间的表达关系。",
      "视觉升级、独立站设计、渠道素材与包装方案；区分提案和实际采用。"
    ],
    "en": [
      "HALOVIDA",
      "Connecting brand storytelling and product visuals to e-commerce and channel expression.",
      "Brand strategy / Website",
      [
        "Brand & web",
        "Channel visuals"
      ],
      "Brand, website and communication design; dates, adoption and photography responsibilities need confirmation."
    ]
  },
  "mauritshuis": {
    "zh": [
      "海牙皇家美术馆小程序",
      "以轻量移动体验连接中文观众、馆藏作品与双语导览。",
      "文化体验 / 小程序",
      [
        "信息架构",
        "移动设计"
      ],
      "馆藏研究、站点地图与移动界面；精确时间及职责范围待核对。",
      "在轻量移动入口中组织参观信息、馆藏作品、商店与双语导览。",
      "馆藏研究、站点地图、信息结构与移动界面。"
    ],
    "en": [
      "Mauritshuis",
      "A lightweight mobile experience connecting Chinese audiences, artworks and bilingual guides.",
      "Culture / Mini program",
      [
        "Information architecture",
        "Mobile design"
      ],
      "Collection research, sitemap and mobile designs; dates and individual ownership need confirmation."
    ]
  }
};
const workCoverHeights = {"factualist": 854, "yione": 519, "future-past": 750, "momcozy-web": 669, "cynergy": 661, "halovida": 810, "mauritshuis": 1015, "eca": 495, "cxd-ai": 674, "momcozy-knowledge": 409, "jing-qiong-er": 565, "studio-aiwen": 1012};
const curatedOrder = ['cxd-ai','momcozy-web','eca','halovida','yione','momcozy-knowledge','factualist','jing-qiong-er','cynergy','studio-aiwen','future-past','mauritshuis'];
projects.sort((a,b) => curatedOrder.indexOf(a.id)-curatedOrder.indexOf(b.id));
projects.forEach(project => {
  if (project.id === 'eca') { project.focus = ['culture-media']; project.complexity = 'Maintaining a coherent identity across award stages, communication, exhibition, books and physical materials.'; project.output = 'Logo, posters, animation, exhibition design, book design and event materials.'; }
  project.size = ['cxd-ai','momcozy-web','eca','halovida'].includes(project.id) ? 'large' : 'small';
  if (['jing-qiong-er','cynergy'].includes(project.id)) { project.year = '2024–2025'; project.time = '2024-2025'; }
  if (project.id === 'future-past') project.year = '2017';
});
// Card eyebrows describe discipline / project type, separately from delivery status.
const workCategories = {
 'cxd-ai': {zh:'交互设计 / AI 设计平台', en:'Interaction Design / AI Design Platform'},
 'momcozy-web': {zh:'网站设计 / 品牌独立站', en:'Website Design / E-commerce'},
 'eca': {zh:'全链设计 / 文化活动', en:'All-around Design / Cultural Event'},
 'halovida': {zh:'品牌 & 网站 / 品牌独立站', en:'Brand & Website / E-commerce'},
 'yione': {zh:'App 设计 / AI 协作产品', en:'App Design / AI Collaboration'},
 'momcozy-knowledge': {zh:'设计系统 / 设计知识库', en:'Design Systems / Knowledge Base'},
 'factualist': {zh:'品牌 & 网站 / Chatbot 平台', en:'Brand & Website / Chatbot Platform'},
 'jing-qiong-er': {zh:'网站设计 / 艺术家网站', en:'Website Design / Artist Website'},
 'cynergy': {zh:'网站设计 / Agency 官网', en:'Website Design / Agency Website'},
 'studio-aiwen': {zh:'网站设计 / 研究型工作室', en:'Website Design / Research Studio'},
 'future-past': {zh:'设计研究 / 艺术探索', en:'Design Research / Art Exploration'},
 'mauritshuis': {zh:'小程序设计 / 文化机构', en:'Mini Program / Cultural Institution'}
};
function getWorkPresentation(project) {
 const language = currentLanguage === 'zh' ? 'zh' : 'en';
 const presentation = [...workPresentation[project.id][language]];
 if (workCategories[project.id]) presentation[2] = workCategories[project.id][language];
 return presentation;
}

const state = {
  focus: "all",
  time: "all",
  activeProjectId: null,
};

const grid = document.querySelector("[data-work-grid]");
const notesGrid = document.querySelector("[data-notes-grid]");
const notesPrev = document.querySelector("[data-notes-prev]");
const notesNext = document.querySelector("[data-notes-next]");
const notesIndex = document.querySelector("[data-notes-index]");
const panel = document.querySelector("[data-panel]");
const scrim = document.querySelector("[data-panel-scrim]");
const summary = document.querySelector("[data-filter-summary]");
const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navMenu = document.querySelector("[data-nav-menu]");
const additionalFocus = {'eca':['integrated','brand-vi','motion','print'],'halovida':['integrated','brand-vi'],'factualist':['brand-vi'],'yione':['app-h5'],'mauritshuis':['app-h5']};
projects.forEach(p=>{p.focus=[...new Set([...p.focus,...(additionalFocus[p.id]||[])])];if(p.id==='future-past')p.time='2017-2020';});
const themeToggle = document.querySelector("[data-theme-toggle]");
const themeLabel = document.querySelector("[data-theme-label]");
const languageToggle = document.querySelector("[data-language-toggle]");
const languageLabel = document.querySelector("[data-language-label]");
const cursorAura = document.querySelector("[data-cursor-aura]");
const recordTabs = document.querySelectorAll("[data-record-tab]");
const recordPanels = document.querySelectorAll("[data-record-panel]");
const recordJumps = document.querySelectorAll("[data-record-jump]");
const cvDownloadLinks = document.querySelectorAll("[data-cv-download]");

let currentLanguage = "en";
let activePanelOpener = null;
let activeNavOpener = null;

const focusableSelector = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "textarea:not([disabled])",
  "select:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

function getFocusableNodes(container) {
  if (!container) return [];

  return Array.from(container.querySelectorAll(focusableSelector)).filter(
    (node) =>
      node.getAttribute("aria-hidden") !== "true" &&
      node.getClientRects().length > 0,
  );
}

function trapFocus(event, container) {
  const focusableNodes = getFocusableNodes(container);
  if (!focusableNodes.length) return;

  const firstNode = focusableNodes[0];
  const lastNode = focusableNodes[focusableNodes.length - 1];

  if (event.shiftKey && document.activeElement === firstNode) {
    event.preventDefault();
    lastNode.focus();
    return;
  }

  if (!event.shiftKey && document.activeElement === lastNode) {
    event.preventDefault();
    firstNode.focus();
  }
}

const cvFiles = {
  en: {
    href: "./assets/Ningli_Zhu_CV_Concise_EN.pdf",
    filename: "Ningli_Zhu_CV_Concise_EN.pdf",
  },
  zh: {
    href: "./assets/Ningli_Zhu_CV_Concise_CN.pdf",
    filename: "Ningli_Zhu_CV_Concise_CN.pdf",
  },
};

const notesData = [
  {
    id: "agents-ui-disappearing",
    source: "LinkedIn Article",
    url: "https://www.linkedin.com/pulse/when-agents-start-working-ui-starts-disappearing-ningli-zhu-oucuc/",
    detailUrl: "./note-agents-ui-disappearing.html",
    date: "Feb 18, 2026",
    theme: "Agentic UX",
    status: "featured",
    priority: 1,
    title: {
      en: "When agents start working, UI starts transforming",
      zh: "当 Agent 开始工作，UI 开始转化",
    },
    summary: {
      en: "A reflection on delegation systems, invisible agent workflows and why future interfaces need to make autonomous work legible.",
      zh: "关于委托式系统、不可见 Agent 工作流，以及未来界面为何需要让自主过程变得可理解的反思。",
    },
    tags: ["Agentic UX", "Trust", "Visibility"],
  },
  {
    id: "agentic-ux-three-perspectives",
    source: "LinkedIn",
    url: "https://www.linkedin.com/posts/n-zhu_aiux-agenticux-share-7482644805479698432-wLva/",
    date: "2026",
    theme: "Agentic UX",
    status: "featured",
    priority: 2,
    title: {
      en: "Agentic UX: three perspectives on future AI product design",
      zh: "Agentic UX：未来 AI 产品设计的三种视角",
    },
    summary: {
      en: "A synthesis of agent design references across Microsoft, InstitutePM and AI UX Playground, distilled into trust, visibility and earned autonomy.",
      zh: "整合 Microsoft、InstitutePM 与 AI UX Playground 的 Agent 设计资料，提炼出信任、可见性与逐步获得的自主性。",
    },
    tags: ["AI UX", "Autonomy", "Human in the Loop"],
  },
  {
    id: "ai-readable-design-infrastructure",
    source: "LinkedIn",
    url: "https://www.linkedin.com/posts/n-zhu_over-the-last-month-ive-been-exploring-ugcPost-7480832996879532032-Njer/",
    date: "2026",
    theme: "Design Knowledge",
    status: "featured",
    priority: 3,
    title: {
      en: "Design assets as AI-readable infrastructure",
      zh: "把设计资产转化为 AI 可读的基础设施",
    },
    summary: {
      en: "A working direction for turning foundations, components and modules into structured design knowledge that humans and AI can maintain together.",
      zh: "把基础样式、组件与模块变成结构化设计知识，让人和 AI 能共同理解、维护和生成体验。",
    },
    tags: ["Design Systems", "AI-ready Assets", "Modules"],
  },
  {
    id: "ai-search-design",
    source: "Medium",
    url: "https://medium.com/@zhuningli001/lets-talk-about-ai-search-68f69109ab4a",
    date: "Oct 8, 2025",
    theme: "AI Search",
    status: "featured",
    priority: 4,
    title: {
      en: "AI search should balance intelligence, evidence and usability",
      zh: "AI 搜索需要在智能感、证据与可用性之间取得平衡",
    },
    summary: {
      en: "A design research note on focused answers, reduced jumps, citations, transparency and restrained visual expression for AI search products.",
      zh: "一篇关于 AI 搜索设计的研究笔记，关注聚焦答案、减少跳转、引用透明度与克制的智能视觉表达。",
    },
    tags: ["AI Search", "Transparency", "Evidence"],
  },
  {
    id: "living-brand-websites",
    source: "LinkedIn",
    url: "https://www.linkedin.com/posts/n-zhu_humancenteredai-uxdesign-uxstrategy-activity-7427384237340831744-_z4h/",
    date: "2026",
    theme: "Adaptive Systems",
    status: "featured",
    priority: 5,
    title: {
      en: "From static pages to living brand systems",
      zh: "从静态页面到可生长的品牌系统",
    },
    summary: {
      en: "A systems view of future brand websites: user signals, state modeling, modular assembly and continuous validation.",
      zh: "从用户信号、状态建模、模块装配和实时验证出发，重新理解未来品牌网站的系统结构。",
    },
    tags: ["Personalization", "Brand UX", "Systems"],
  },
  {
    id: "executable-ui-components",
    source: "LinkedIn",
    url: "https://www.linkedin.com/posts/n-zhu_uxdesign-designsystems-aiux-activity-7435160949805817856-8L-d/",
    date: "2026",
    theme: "Design Engineering",
    status: "featured",
    priority: 6,
    title: {
      en: "From Figma components to executable UI components",
      zh: "从 Figma 组件到可执行 UI 组件",
    },
    summary: {
      en: "A workflow reflection on turning design into H5 demos with Cursor, where components carry state, behavior and interaction logic.",
      zh: "一次用 Cursor 将 Figma 设计转成 H5 互动 demo 的流程反思：组件不再只是视觉模板，也承载状态、行为和交互逻辑。",
    },
    tags: ["Figma", "Cursor", "Design Engineering"],
  },
  {
    id: "teamo-ai-review",
    source: "LinkedIn",
    url: "https://www.linkedin.com/posts/n-zhu_teamo-ai-testimonio-activity-7420379478826188800-pKFf/",
    date: "2026",
    theme: "Product Review",
    status: "supporting",
    priority: 7,
    title: {
      en: "Teamo AI product review: an early Agentic OS signal",
      zh: "Teamo AI 产品评测：一个早期 Agentic OS 信号",
    },
    summary: {
      en: "A product testing note on Teamo AI for scholars and knowledge workers, focusing on product logic, structure and the potential of Agentic OS.",
      zh: "针对 Teamo AI 的产品评测笔记，关注它面向学者与知识工作者的产品逻辑、结构，以及 Agentic OS 的可能性。",
    },
    tags: ["Product Review", "Agentic OS", "Knowledge Work"],
  },
  {
    id: "decision-architecture",
    source: "LinkedIn",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7421861394154917888/",
    date: "2026",
    theme: "AI Decision Architecture",
    status: "supporting",
    priority: 8,
    title: {
      en: "AI UX is decision architecture over time",
      zh: "AI UX 是随时间分配决策权的架构",
    },
    summary: {
      en: "A concise positioning note: AI UX is about how decision power, responsibility and control are distributed over time.",
      zh: "一条短笔记：AI UX 不只是界面，而是决策权、责任与控制感如何随时间被分配。",
    },
    tags: ["Decision Architecture", "Control", "Trust"],
  },
  {
    id: "hax-guidelines",
    source: "LinkedIn",
    url: "https://www.linkedin.com/posts/n-zhu_hax-design-library-microsoft-hax-toolkit-activity-7406539739664699393-wAVB/",
    date: "2026",
    theme: "Human-AI Guidelines",
    status: "supporting",
    priority: 9,
    title: {
      en: "Microsoft HAX guidelines as Human-AI design foundations",
      zh: "把 Microsoft HAX 指南作为 Human-AI 设计基础",
    },
    summary: {
      en: "A compact reference note on 18 Human-AI interaction guidelines, useful as the method foundation behind future AI UX cases.",
      zh: "一条关于 18 条 Human-AI 交互指南的资料型笔记，适合作为后续 AI UX 案例的方法论基础。",
    },
    tags: ["HAX", "Human-AI", "Guidelines"],
  },
  {
    id: "ai-design-tool-landscape",
    source: "LinkedIn",
    url: "https://www.linkedin.com/posts/n-zhu_v0-by-vercel-build-agents-apps-and-websites-share-7449284637916442624-VsEY/",
    date: "2026",
    theme: "Design Tooling",
    status: "supporting",
    priority: 10,
    title: {
      en: "AI is shifting designers from executor to evaluator",
      zh: "AI 正在让设计师从执行者转向评估者",
    },
    summary: {
      en: "A weekly design-tech observation on AI tools, v0, Figma AI and the role shift toward judgment, taste systems and command.",
      zh: "关于 AI 设计工具、v0、Figma AI 和设计师角色变化的周度观察，强调判断力、审美系统与指挥能力。",
    },
    tags: ["Design Tools", "AI Workflow", "Career Shift"],
  },
  {
    id: "brand-design-judgment",
    source: "LinkedIn",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7481274520767725568/",
    date: "2026",
    theme: "Design Judgment",
    status: "supporting",
    priority: 11,
    title: {
      en: "AI does not lack generation capability; it lacks design judgment",
      zh: "AI 不缺生成能力，缺的是设计判断",
    },
    summary: {
      en: "A short thesis note pointing toward brand design knowledge and the judgment layer behind AI-assisted creation.",
      zh: "一条指向品牌设计知识和 AI 协作中判断层的短论点：生成能力之外，真正稀缺的是设计判断。",
    },
    tags: ["Design Judgment", "Brand Knowledge", "AI Creation"],
  },
  {
    id: "agentic-ai-lessons",
    source: "LinkedIn",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7420782458456997889/",
    date: "2026",
    theme: "Agentic UX",
    status: "supporting",
    priority: 12,
    title: {
      en: "Designing Agentic AI UX means designing intent",
      zh: "设计 Agentic AI UX，本质上是在设计意图",
    },
    summary: {
      en: "A working-map note that compares task execution, goal delegation, control, trust and behavioral frameworks.",
      zh: "一张关于 Agentic AI UX 的工作地图，比较任务执行、目标委托、控制感、信任与行为框架。",
    },
    tags: ["Intent", "Delegation", "Agentic UX"],
  },
  {
    id: "wechat-archive-pwcr",
    source: "WeChat",
    url: "https://mp.weixin.qq.com/s/pWcrMIdN99QqlkekToEf_Q",
    date: "Archive",
    theme: "AI UX",
    status: "supporting",
    priority: 15,
    title: {
      en: "UX to AX: when tools become partners",
      zh: "UX→AX 当工具变成伙伴：AI 时代的体验设计革命",
    },
    summary: {
      en: "A WeChat reflection on the shift from UX to AX, where AI tools become partners and experience design moves toward relationship, collaboration and capability.",
      zh: "一篇关于从 UX 到 AX 的思考：当 AI 工具逐渐成为协作伙伴，体验设计的对象也从界面操作转向关系、协作与能力延展。",
    },
    tags: ["AI UX", "AX", "Experience Design"],
  },
  {
    id: "wechat-archive-d8r",
    source: "WeChat",
    url: "https://mp.weixin.qq.com/s/D8RjpvRdY-cEkcS3j8-mOw",
    date: "Archive",
    theme: "Product Review",
    status: "supporting",
    priority: 14,
    title: {
      en: "Testing Teamo AI: quick product notes",
      zh: "前天测试了Teamo AI, 顺便记录下 :)",
    },
    summary: {
      en: "A quick product experience note on Teamo AI, keeping track of product structure, knowledge-work scenarios and early signals for agentic tools.",
      zh: "一篇 Teamo AI 的快速产品体验记录，关注产品结构、知识工作场景，以及 agentic 工具早期形态中的一些信号。",
    },
    tags: ["Teamo AI", "Product Review", "Agentic Tools"],
  },
  {
    id: "wechat-archive-zfc",
    source: "WeChat",
    url: "https://mp.weixin.qq.com/s/ZfCjJV_0UawJpjMKzzPVnA",
    date: "Archive",
    theme: "AI Decision Architecture",
    status: "supporting",
    priority: 13,
    title: {
      en: "AI UX is about when decision rights are handed over",
      zh: "AI UX 的核心不是界面，而是“决策权在什么时候、被交给了谁”。",
    },
    summary: {
      en: "A concise WeChat note framing AI UX as decision architecture: when control moves between people and AI, and how that transfer should stay understandable.",
      zh: "一篇把 AI UX 视为决策权架构的微信笔记：重点不是界面本身，而是控制权在人和 AI 之间如何移动，以及这个过程如何被理解。",
    },
    tags: ["AI UX", "Decision Rights", "Control"],
  },
];

const translations = {
  en: {
    "nav.home": "Home",
    "nav.work": "Work",
    "nav.notes": "Notes",
    "nav.artboard": "Artboard",
    "work.artboard": "2013–2020 visual work · Artboard ↗",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.menu.open": "Open navigation menu",
    "nav.menu.close": "Close navigation menu",
    "hero.heading":
      "Senior Product & Experience Designer focused on AI-native products, complex systems and design infrastructure.",
    "hero.copy":
      "I’m Ningli. My work has taken me between China and the Netherlands, from media art and brand design to product UX. I’m currently exploring how people work with AI.",
    "hero.more": "More about me",
    "capabilities.ai.title": "AI-native Products",
    "capabilities.systems.title": "Complex Systems",
    "capabilities.tech.title": "Design Infrastructure",
    "capabilities.culture.title": "Brand & Culture",
    "radar.eyebrow": "Industry radar",
    "radar.heading": "What I’m following lately.",
    "radar.people": "People",
    "radar.fields": "Fields",
    "radar.products": "Products",
    "radar.agents": "Multi-agent systems & personal agents",
    "radar.aiiot": "AI × IoT design",
    "radar.ryo": "Cursor · Head of Design",
    "radar.maeda": "Design, AI and useful business learning",
    "radar.jenny": "AI-native product design leadership",
    "radar.zara": "AI product and GTM writing",
    "radar.mc": "Design leadership and AI UX writing",
    "radar.guoyu": "Former Chief Designer at Baidu",
    "radar.lizheng": "AI builder community and product learning",
    "work.heading": "Selected work",
    "filters.focus": "Focus",
    "filters.time": "Time",
    "filters.all": "All",
    "filters.showingAll": "Showing all selected work",
    "filters.empty":
      "No public projects in this filter yet. More cases are being structured.",
    "filters.emptyTitle": "No matching public cases yet",
    "filters.emptyCopy":
      "Try a broader focus or reset the filters to return to the full work index.",
    "filters.reset": "Reset filters",
    "filters.showing": "Showing",
    "filters.project": "project",
    "filters.projects": "projects",
    "notes.eyebrow": "Notes",
    "notes.heading": "Notes from reading, building and thinking.",
    "notes.link": "Read all",
    "atlasEntry.heading": "Lab / Experiment",
    "atlasEntry.title": "Rolling Atlas",
    "atlasEntry.copy":
      "A playful career-map experiment for browsing paths, pivots and side quests.",
    "notes.item1": "Design knowledge is the new design asset",
    "notes.item2": "From component library to AI-readable module system",
    "notes.item3": "Why AI search should start with user intent",
    "notesPage.eyebrow": "AI UX Research Notes",
    "notesPage.titleLead": "A living notebook",
    "notesPage.titleRest":
      "on agent systems, design knowledge and adaptive digital experience.",
    "notesPage.copy":
      "These notes collect my public writing, reading synthesis and product observations. They are not a conventional blog, but a growing map of questions behind my AI UX and design technology practice.",
    "notesPage.roadmapEyebrow": "Stage plan",
    "notesPage.roadmapTitle":
      "Build the Notes section in three controlled stages.",
    "notesPage.stage1Title": "Curated index",
    "notesPage.stage1Copy":
      "Collect public writing into a structured notesData library and show the strongest pieces by theme.",
    "notesPage.stage2Title": "Article pages",
    "notesPage.stage2Copy":
      "Turn selected posts into clean note pages with thesis, key insights, source links and related projects.",
    "notesPage.stage3Title": "Research system",
    "notesPage.stage3Copy":
      "Connect notes with cases, methods and ongoing learning records so the site becomes a public design knowledge system.",
    "notesPage.indexEyebrow": "Notes index",
    "notesPage.indexTitle": "Recent topics I keep thinking about.",
    "notesPage.statusFeatured": "Featured",
    "notesPage.statusSupporting": "Supporting",
    "notesPage.statusPending": "Pending source",
    "notesPage.readSource": "Read source",
    "notesPage.openNote": "Open note",
    "noteDetail.nextEyebrow": "Read next",
    "noteDetail.nextTitle":
      "Agentic UX: three perspectives on future AI product design",
    "noteDetail.nextAction": "Open source",
    "about.eyebrow": "About / Studio",
    "about.heading":
      "A cross-border design practice shaped by product, systems and culture.",
    "about.copy":
      "Based between China and the Netherlands, I work across AI products, design infrastructure and selected brand and cultural experiences.",
    "about.link": "About me →",
    "contact.eyebrow": "Contact",
    "contact.heading":
      "Open to collaborations. Let's talk 💬",
    "contact.email": "Email",
    "contact.cv": "CV ↓",
    "emailDrawer.eyebrow": "Contact",
    "emailDrawer.title": "Let’s connect",
    "emailDrawer.copy":
      "Share a role, collaboration or project idea. This form opens your default email draft when submitted.",
    "emailDrawer.name": "Your name",
    "emailDrawer.reply": "Reply email",
    "emailDrawer.message": "Message",
    "emailDrawer.send": "Open email draft ↗",
    "emailDrawer.direct": "zhuningli001@163.com ↗",
    "panel.close": "Close",
    "panel.mode": "Project mode",
    "panel.scope": "Role / Scope",
    "panel.intro": "Intro",
    "panel.challenge": "Challenge",
    "panel.outcome": "Outcome",
    "panel.evidence": "Evidence",
    "panel.output": "Output keywords",
    "panel.preview": "Preview",
    "theme.dark": "☾",
    "theme.light": "☼",
    "language.next": "中",
    "aboutPage.eyebrow": "About me",
    "aboutPage.heroTitle": "I hope to be a 🧚‍♀️ bright presence.",
    "aboutPage.heroLine1": "",
    "aboutPage.heroLine2": "I hope to be a 🧚‍♀️ bright presence.",
    "aboutPage.heroLine2Lead": "I hope to be a 🧚‍♀️",
    "aboutPage.heroLine2Glow": "bright presence.",
    "aboutPage.heroCopy":
      "I am a senior UX designer, digital creator and design technologist working across AI products, product UX, brand experience and cultural projects.",
    "aboutPage.photoPlaceholder": "Portrait placeholder",
    "aboutPage.experienceCta": "view experience ↓",
    "aboutPage.greetingLabel": "Greeting",
    "aboutPage.greetingCopy":
      "I care about how ideas become usable, beautiful and durable. My work often begins with ambiguity: a fuzzy AI concept, a fragmented content system, a brand that needs a digital voice, or a product journey that needs structure.",
    "aboutPage.greetingCopy1":
      "I’m Ningli, a UX designer and media creator focused on future interactions and human values.",
    "aboutPage.greetingCopy2":
      "My path moves across art, design and product, with a few identity shifts along the way. Looking back, the work has kept circling one question: as technology reshapes expression, relationships and everyday life, how might we preserve and deepen the emotions, trust and connections that matter most to people?",
    "aboutPage.greetingCopy2Lead":
      "My path moves across art, design and product, with a few identity shifts along the way. Looking back, the work has kept circling one question: as technology reshapes expression, relationships and everyday life,",
    "aboutPage.greetingCopy2Strong":
      "how might we preserve and deepen the emotions, trust and connections that matter most to people?",
    "aboutPage.greetingCopy3":
      "When I lived and studied at Design Academy Eindhoven in the Netherlands, I first felt the force of human-centered critical thinking, and the possibility of design as a way to intervene in society. The sincerity and affective power of art, together with the creativity of design, made me want to build products that are genuinely meaningful for people.",
    "aboutPage.greetingCopy3Lead":
      "When I lived and studied at Design Academy Eindhoven in the Netherlands, I first felt the force of human-centered critical thinking, and the possibility of design as a way to intervene in society. The sincerity and affective power of art, together with the creativity of design, made me want to",
    "aboutPage.greetingCopy3Strong":
      "build products that are genuinely meaningful for people.",
    "aboutPage.greetingCopy4":
      "My graduate project Face to Face was an early exploration of this direction. It combined moving image, real-time facial sensing and emotion recognition to examine digital identity, self-presentation and human-machine relationships.",
    "aboutPage.greetingCopy5":
      "That project made something clearer for me: I am not interested in technology for its own sake, but in how technology changes how people feel, and how we might see ourselves again through it.",
    "aboutPage.greetingCopy6":
      "I value sincerity, kindness and inclusion. I also believe in organic growth, long-term collaboration and building things together. In product and interaction work, I tend to return first to the human situation: why people feel confused, when they feel understood, how trust is formed, and whether a system can help people express and act more naturally.",
    "aboutPage.greetingCopy7":
      "Outside work, I often solo travel into unknown places, and return to myself through yoga, Buddhism, the outdoors and reflection. I hope to work with creative teams to explore future-facing interactions, product forms and warmer relationships between people and technology.",
    "aboutPage.signal1": "China ↔ Netherlands",
    "aboutPage.signal2": "Senior UX / AI-native design",
    "aboutPage.signal3": "Studio practice + company work",
    "aboutPage.signal4": "Product, web, brand, culture",
    "aboutPage.recordsCareer": "Career path",
    "aboutPage.recordsEducation": "Education",
    "aboutPage.recordsExperience": "Experience & Volunteer",
    "aboutPage.recordsHint":
      "Recent product and AI design roles are shown first. Education, exhibitions and volunteering stay one tap away.",
    "aboutPage.eduEyebrow": "Education",
    "aboutPage.eduHeading":
      "Academic foundations in information design and art research.",
    "aboutPage.eduHint": "2016 to 2019 · art research and information design",
    "aboutPage.edu1Meta": "Netherlands",
    "aboutPage.edu2Meta": "Netherlands",
    "aboutPage.edu3Meta": "China",
    "aboutPage.pathEyebrow": "Career path",
    "aboutPage.pathHeading":
      "Work roles across UX, design strategist, studio practice and media design.",
    "aboutPage.pathHint": "2011 to now · hover a row",
    "aboutPage.path1Title": "Senior UX & Design Strategist",
    "aboutPage.path1Meta": "Shenzhen, CN",
    "aboutPage.path1Copy":
      "Designed AI-enhanced e-commerce experience systems across UX, brand strategy, personalization, modular content architecture and customer journeys.",
    "aboutPage.path2Title": "Creative Designer ｜ Studio Owner",
    "aboutPage.path2Meta": "Netherlands / China",
    "aboutPage.path2Copy":
      "Built an independent practice for brand, website, video and UI/UX projects, serving individuals, start-ups and organizations.",
    "aboutPage.path3Title": "User Experience Designer (outsourced)",
    "aboutPage.path3Meta": "Nanjing, CN",
    "aboutPage.path3Copy":
      "Worked on AI Intelligent Search 2.0, agentic-product research, HarmonyOS-related design development, Celia Translate insights and AIGC prototype visualization.",
    "aboutPage.path4Title": "UI/UX Designer",
    "aboutPage.path4Meta": "Amsterdam, NL",
    "aboutPage.path4Copy":
      "Designed solution-driven UX products for China-market clients, including mini programs, apps, H5 campaigns, websites, prototypes and user research.",
    "aboutPage.path5Title": "Digital Transformation Trainer",
    "aboutPage.path5Meta": "Amsterdam, NL",
    "aboutPage.path5Copy":
      "Facilitated digital transformation learning through UX-oriented methods, collaborative research and structured design exercises.",
    "aboutPage.path6Title": "Media Designer Intern",
    "aboutPage.path6Meta": "Amsterdam, NL",
    "aboutPage.path6Copy":
      "Researched and practiced digital products with a focus on AR techniques and interactive Instagram filters for media promotion.",
    "aboutPage.path7Title": "Summer Design Internship",
    "aboutPage.path7Meta": "Utrecht, NL",
    "aboutPage.path7Copy":
      "Supported event-archive website design for Future of the Past, an interactive project around technology, memory and time.",
    "aboutPage.path8Title": "Art Editor | Visual Designer",
    "aboutPage.path8Meta": "Nanjing, CN",
    "aboutPage.path8Copy":
      "Created visual material for TV programs, news, digital storytelling, promotions and offline events.",
    "aboutPage.path9Title": "Graphic Design Intern",
    "aboutPage.path9Meta": "Hangzhou, CN",
    "aboutPage.path9Copy":
      "Practiced graphic design, typography and digital media design in a studio environment.",
    "aboutPage.expEyebrow": "Experience",
    "aboutPage.expHeading":
      "Artist-period exhibitions and cultural activities.",
    "aboutPage.exp1Position": "Exhibition",
    "aboutPage.exp1Org": "Media-art presentations",
    "aboutPage.exp1Country": "NL / US",
    "aboutPage.exp1Item1": "(Im)possible Bodies Exhibition, 2020, Den Bosch",
    "aboutPage.exp1Item2":
      "TAC2GO program, Confined.Work, July 2020, Eindhoven",
    "aboutPage.exp1Item3":
      "CinemAsia Festival Program, Amsterdam, March 2020",
    "aboutPage.exp1Item4": "Dutch Design Week, Manifestations, Eindhoven",
    "aboutPage.exp1Item5": "Pratt Institute, New York, 2019, US",
    "aboutPage.exp2Position": "Activities",
    "aboutPage.exp2Org": "Art, design and culture",
    "aboutPage.exp2Country": "NL / DE / JP",
    "aboutPage.exp2Item1": "Oddstream Studio, Nijmegen, 2020 / 2021",
    "aboutPage.exp2Item2": "Eindhoven Maker Faire, September 2020",
    "aboutPage.exp2Item3": "Renault Design Rides, 2019",
    "aboutPage.exp2Item4": "ZUIBISHE Online Design Media, 2019",
    "aboutPage.exp2Item5": "Dérive Berlin residency, 2018",
    "aboutPage.exp2Item6": "Tokyo Art Book Fair, 2017",
    "aboutPage.volEyebrow": "Volunteering",
    "aboutPage.volHeading":
      "Cultural-social community outside formal roles.",
    "aboutPage.vol1Title": "Graphic Illustrator",
    "aboutPage.vol2Title": "Tour Guide | STRP biënnale",
    "aboutPage.vol3Title": "Tour Guide",
    "aboutPage.vol4Title": "Youth Buddhist Volunteer",
    "aboutPage.vol5Title": "Volunteer",
    "aboutPage.vol5Meta": "Global",
    "aboutPage.expStudioTime": "Ongoing",
    "aboutPage.exp4Position": "Independent designer",
    "aboutPage.exp4Country": "Netherlands / China",
    "aboutPage.exp4":
      "Independent studio practice for selected AI product, website, brand and cultural collaborations.",
    "aboutPage.certEyebrow": "Licenses & certifications",
    "aboutPage.certHeading": "Certifications and learning records to be added.",
    "aboutPage.certStatus": "Pending",
    "aboutPage.certTitle": "To be updated",
    "aboutPage.certCopy":
      "LinkedIn certifications are not visible yet in the current source. This section is reserved for future certificates or course records.",
    "aboutPage.offEyebrow": "Off the clock",
    "aboutPage.offHeading":
      "Outside work, I draw energy from culture, nature and mind-body exploration.",
    "aboutPage.off1": "Media-art lover",
    "aboutPage.off2": "Cultural explorer",
    "aboutPage.off3": "Yogi 🧘‍♀️",
    "aboutPage.off4": "Notes and reflections",
    "aboutPage.off5": "Gardener 🌱",
    "aboutPage.off6": "Swimming",
    "aboutPage.life1": "Gallery day",
    "aboutPage.life2": "City texture",
    "aboutPage.life3": "Studio notes",
    "aboutPage.life4": "Yoga practice",
    "aboutPage.life5": "Cultural fieldwork",
    "aboutPage.nextEyebrow": "Next",
    "aboutPage.nextHeading":
      "Want the short version? Download CV or start with selected work.",
  },
  zh: {
    "nav.home": "首页",
    "nav.work": "作品",
    "nav.notes": "笔记",
    "nav.artboard": "艺术墙",
    "work.artboard": "2013–2020 视觉作品 · 艺术墙 ↗",
    "nav.about": "关于",
    "nav.contact": "联系",
    "nav.menu.open": "打开导航菜单",
    "nav.menu.close": "关闭导航菜单",
    "hero.heading":
      "专注 AI 原生产品、复杂系统与设计基础设施的资深产品体验设计师。",
    "hero.copy":
      "我是寜莉。在中国与荷兰之间，我做过媒体艺术、品牌和网站，也逐渐走进产品体验设计。最近，我在研究人与 AI 如何一起工作。",
    "hero.more": "更多关于我",
    "capabilities.ai.title": "AI 原生产品",
    "capabilities.systems.title": "复杂系统",
    "capabilities.tech.title": "设计基础设施",
    "capabilities.culture.title": "品牌与文化",
    "radar.eyebrow": "行业关注",
    "radar.heading": "近期关注",
    "radar.people": "人物",
    "radar.fields": "领域",
    "radar.products": "产品",
    "radar.agents": "多 Agent 系统与个人 Agent",
    "radar.aiiot": "AI × IoT 设计",
    "radar.ryo": "Cursor · Head of Design",
    "radar.maeda": "设计、AI 与商业学习",
    "radar.jenny": "AI 原生产品设计领导力",
    "radar.zara": "AI 产品与 GTM 写作",
    "radar.mc": "设计领导力与 AI UX 写作",
    "radar.guoyu": "前百度首席设计师",
    "radar.lizheng": "AI Builders 社群与产品学习",
    "work.heading": "精选作品",
    "filters.focus": "方向",
    "filters.time": "时间",
    "filters.all": "全部",
    "filters.showingAll": "正在展示全部精选作品",
    "filters.empty": "这个筛选下暂时没有公开项目，更多案例还在整理中。",
    "filters.emptyTitle": "暂时没有匹配的公开案例",
    "filters.emptyCopy": "可以放宽筛选条件，或重置后回到完整作品索引。",
    "filters.reset": "重置筛选",
    "filters.showing": "正在展示",
    "filters.project": "个项目",
    "filters.projects": "个项目",
    "notes.eyebrow": "笔记",
    "notes.heading": "边做边想，一些阅读和笔记。",
    "notes.link": "查看全部",
    "atlasEntry.heading": "实验 / Lab",
    "atlasEntry.title": "Rolling Atlas",
    "atlasEntry.copy": "一个用于浏览职业路径、转折与支线经历的趣味地图实验。",
    "notes.item1": "设计知识正在成为新的设计资产",
    "notes.item2": "从组件库到 AI 可读的模块系统",
    "notes.item3": "为什么 AI 搜索应该从用户意图开始",
    "notesPage.eyebrow": "AI UX 研究笔记",
    "notesPage.titleLead": "持续笔记",
    "notesPage.titleRest": "关于 Agent 系统、设计知识与自适应数字体验。",
    "notesPage.copy":
      "这里整理我的公开写作、阅读综合和产品观察。它不是传统博客，而是一张不断生长的问题地图，连接我的 AI UX 与设计技术实践。",
    "notesPage.roadmapEyebrow": "阶段计划",
    "notesPage.roadmapTitle": "用三个可控阶段搭建 Notes 部分。",
    "notesPage.stage1Title": "精选索引",
    "notesPage.stage1Copy":
      "把公开写作整理进结构化 notesData 内容库，并按主题展示最有代表性的内容。",
    "notesPage.stage2Title": "单篇文章页",
    "notesPage.stage2Copy":
      "把精选帖子整理成简洁文章页，包含 thesis、关键洞察、原文链接和关联项目。",
    "notesPage.stage3Title": "研究系统",
    "notesPage.stage3Copy":
      "把笔记与案例、方法和持续学习记录连接起来，让网站逐步成为公开的设计知识系统。",
    "notesPage.indexEyebrow": "笔记索引",
    "notesPage.indexTitle": "近期关注的话题。",
    "notesPage.statusFeatured": "精选",
    "notesPage.statusSupporting": "支撑内容",
    "notesPage.statusPending": "来源待补",
    "notesPage.readSource": "阅读全文",
    "notesPage.openNote": "打开笔记",
    "noteDetail.nextEyebrow": "阅读下一篇",
    "noteDetail.nextTitle": "Agentic UX：未来 AI 产品设计的三种视角",
    "noteDetail.nextAction": "打开来源",
    "about.eyebrow": "关于 / 工作室",
    "about.heading": "一段由产品、系统与文化共同塑造的跨境设计实践。",
    "about.copy":
      "往返于中国与荷兰之间，聚焦 AI 产品、设计基础设施，以及精选品牌与文化体验。",
    "about.link": "了解更多 →",
    "contact.eyebrow": "联系",
    "contact.heading": "期待与你合作。聊聊吧 💬",
    "contact.email": "邮件",
    "contact.cv": "CV ↓",
    "emailDrawer.eyebrow": "联系",
    "emailDrawer.title": "欢迎联系",
    "emailDrawer.copy":
      "可以简单介绍岗位、合作或项目想法。提交后会打开你的默认邮件草稿。",
    "emailDrawer.name": "你的名字",
    "emailDrawer.reply": "回复邮箱",
    "emailDrawer.message": "想说的话",
    "emailDrawer.send": "打开邮件草稿 ↗",
    "emailDrawer.direct": "zhuningli001@163.com ↗",
    "panel.close": "关闭",
    "panel.mode": "项目身份",
    "panel.scope": "角色 / 范围",
    "panel.intro": "简介",
    "panel.challenge": "挑战",
    "panel.outcome": "产出",
    "panel.evidence": "证据",
    "panel.output": "产出关键词",
    "panel.preview": "预览",
    "theme.dark": "☾",
    "theme.light": "☼",
    "language.next": "EN",
    "aboutPage.eyebrow": "关于我",
    "aboutPage.heroTitle": "我希望做一个 🧚‍♀️ 光亮的人。",
    "aboutPage.heroLine1": "",
    "aboutPage.heroLine2": "我希望做一个 🧚‍♀️ 光亮的人。",
    "aboutPage.heroLine2Lead": "我希望做一个 🧚‍♀️",
    "aboutPage.heroLine2Glow": "光亮的人。",
    "aboutPage.heroCopy":
      "我是 senior UX 设计师、数字创作者和 design technologist，工作横跨 AI 产品、产品 UX、品牌体验与文化项目。",
    "aboutPage.photoPlaceholder": "个人照片占位",
    "aboutPage.experienceCta": "经历 ↓",
    "aboutPage.greetingLabel": "打招呼",
    "aboutPage.greetingCopy":
      "我关心想法如何变得可用、好看且经得起交付。我的工作常常从模糊处开始：一个还不清晰的 AI 概念，一个碎片化的内容系统，一个需要数字声音的品牌，或一段需要重新梳理的产品旅程。",
    "aboutPage.greetingCopy1":
      "我是 Ningli，一名关注未来交互与人文价值的 UX 设计师和数字内容创作者。",
    "aboutPage.greetingCopy2":
      "我的经历横跨艺术、设计和产品，也经历过几次身份和方向的转换。回头看，这些探索其实一直围绕着一个问题：当技术不断改变表达、关系和生活方式时，我们如何保留并增进人最宝贵的情感、信任与连接。",
    "aboutPage.greetingCopy2Lead":
      "我的经历横跨艺术、设计和产品，也经历过几次身份和方向的转换。回头看，这些探索其实一直围绕着一个问题：当技术不断改变表达、关系和生活方式时，",
    "aboutPage.greetingCopy2Strong":
      "我们如何保留并增进人最宝贵的情感、信任与连接。",
    "aboutPage.greetingCopy3":
      "我早期在荷兰埃因霍温 DAE 生活和学习时，第一次深刻感受到强烈的以人为本的思辨，以及设计介入社会的可能性。在荷兰期间，艺术的真诚、感染力和设计的创造性，让我开始向往创造真正对人有意义的产品。",
    "aboutPage.greetingCopy3Lead":
      "我早期在荷兰埃因霍温 DAE 生活和学习时，第一次深刻感受到强烈的以人为本的思辨，以及设计介入社会的可能性。在荷兰期间，艺术的真诚、感染力和设计的创造性，让我开始向往",
    "aboutPage.greetingCopy3Strong": "创造真正对人有意义的产品。",
    "aboutPage.greetingCopy4":
      "我的研究生毕业作品《Face to Face》是一次早期探索。它结合影像、实时面部感应和情绪识别，讨论数字身份、自我呈现和人机关系。",
    "aboutPage.greetingCopy5":
      "这个项目让我更确定：我感兴趣的不是技术本身，而是技术如何影响人的感受，以及我们如何在技术中重新看见自己。",
    "aboutPage.greetingCopy6":
      "我珍视真诚、友善和包容，也相信自发的生长、长期合作与共同建造。在做产品和交互时，我习惯先回到人的处境：他们为什么困惑，什么时候感到被理解，如何建立信任，以及一个系统能否让人更自然地表达和行动。",
    "aboutPage.greetingCopy7":
      "工作之外，我常常 solo travel 去未知的地方，也会通过瑜伽、佛学、户外和 reflection 回到自己。我希望和有创造性的团队一起，探索面向未来的交互方式、产品形态，以及更有温度的人与技术关系。",
    "aboutPage.signal1": "中国 ↔ 荷兰",
    "aboutPage.signal2": "Senior UX / AI 原生设计",
    "aboutPage.signal3": "独立工作室 + 公司项目",
    "aboutPage.signal4": "产品、网站、品牌、文化",
    "aboutPage.recordsCareer": "职业路径",
    "aboutPage.recordsEducation": "教育",
    "aboutPage.recordsExperience": "经历与志愿",
    "aboutPage.recordsHint":
      "默认先展示近期产品与 AI 设计经历；教育、参展和志愿实践可以通过上方标签切换查看。",
    "aboutPage.eduEyebrow": "教育",
    "aboutPage.eduHeading": "信息设计与艺术研究构成了我的学术基础。",
    "aboutPage.eduHint": "2016 到 2019 · 艺术研究与信息设计",
    "aboutPage.edu1Meta": "荷兰",
    "aboutPage.edu2Meta": "荷兰",
    "aboutPage.edu3Meta": "中国",
    "aboutPage.pathEyebrow": "职业路径",
    "aboutPage.pathHeading": "横跨 UX、设计策略、工作室实践与媒体设计的工作角色。",
    "aboutPage.pathHint": "2011 到现在 · hover 一行查看详情",
    "aboutPage.path1Title": "Senior UX & Design Strategist",
    "aboutPage.path1Meta": "深圳，中国",
    "aboutPage.path1Copy":
      "围绕 UX、品牌策略、个性化、模块化内容架构与用户旅程，设计 AI 增强型电商体验系统。",
    "aboutPage.path2Title": "Creative Designer ｜ Studio Owner",
    "aboutPage.path2Meta": "荷兰 / 中国",
    "aboutPage.path2Copy":
      "建立独立工作室实践，为个人、初创团队与组织提供品牌、网站、视频与 UI/UX 设计服务。",
    "aboutPage.path3Title": "User Experience Designer（外聘）",
    "aboutPage.path3Meta": "南京，中国",
    "aboutPage.path3Copy":
      "参与 AI Intelligent Search 2.0、Agentic 产品研究、HarmonyOS 相关设计、Celia Translate 用户洞察与 AIGC 原型可视化。",
    "aboutPage.path4Title": "UI/UX Designer",
    "aboutPage.path4Meta": "阿姆斯特丹，荷兰",
    "aboutPage.path4Copy":
      "面向中国市场客户设计解决方案型 UX 产品，包括小程序、App、H5 活动、网站、原型与用户研究。",
    "aboutPage.path5Title": "Digital Transformation Trainer",
    "aboutPage.path5Meta": "阿姆斯特丹，荷兰",
    "aboutPage.path5Copy":
      "通过 UX 方法、协作研究与结构化设计练习，参与数字化转型相关学习与训练。",
    "aboutPage.path6Title": "Media Designer Intern",
    "aboutPage.path6Meta": "阿姆斯特丹，荷兰",
    "aboutPage.path6Copy":
      "围绕 AR 技术与 Instagram 互动滤镜，进行数字产品研究与媒体推广实践。",
    "aboutPage.path7Title": "Summer Design Internship",
    "aboutPage.path7Meta": "乌得勒支，荷兰",
    "aboutPage.path7Copy":
      "参与 Future of the Past 项目的活动档案网站设计，项目关注技术、记忆与时间。",
    "aboutPage.path8Title": "Art Editor | Visual Designer",
    "aboutPage.path8Meta": "南京，中国",
    "aboutPage.path8Copy":
      "为电视节目、新闻、数字叙事、推广与线下活动创作视觉材料。",
    "aboutPage.path9Title": "Graphic Design Intern",
    "aboutPage.path9Meta": "杭州，中国",
    "aboutPage.path9Copy":
      "在设计工作室环境中实践平面设计、字体与数字媒体设计。",
    "aboutPage.expEyebrow": "经历",
    "aboutPage.expHeading": "艺术家时期的参展与文化活动。",
    "aboutPage.exp1Position": "参展",
    "aboutPage.exp1Org": "媒体艺术呈现",
    "aboutPage.exp1Country": "荷兰 / 美国",
    "aboutPage.exp1Item1": "(Im)possible Bodies Exhibition, 2020, Den Bosch",
    "aboutPage.exp1Item2":
      "TAC2GO program, Confined.Work, July 2020, Eindhoven",
    "aboutPage.exp1Item3":
      "CinemAsia Festival Program, Amsterdam, March 2020",
    "aboutPage.exp1Item4": "Dutch Design Week, Manifestations, Eindhoven",
    "aboutPage.exp1Item5": "Pratt Institute, New York, 2019, US",
    "aboutPage.exp2Position": "活动",
    "aboutPage.exp2Org": "艺术、设计与文化",
    "aboutPage.exp2Country": "荷兰 / 德国 / 日本",
    "aboutPage.exp2Item1": "Oddstream Studio, Nijmegen, 2020 / 2021",
    "aboutPage.exp2Item2": "Eindhoven Maker Faire, September 2020",
    "aboutPage.exp2Item3": "Renault Design Rides, 2019",
    "aboutPage.exp2Item4": "ZUIBISHE Online Design Media, 2019",
    "aboutPage.exp2Item5": "Dérive Berlin residency, 2018",
    "aboutPage.exp2Item6": "Tokyo Art Book Fair, 2017",
    "aboutPage.volEyebrow": "志愿经历",
    "aboutPage.volHeading": "正式工作之外的文化与社会社群实践。",
    "aboutPage.vol1Title": "图像插画志愿者",
    "aboutPage.vol2Title": "STRP biënnale 导览志愿者",
    "aboutPage.vol3Title": "导览志愿者",
    "aboutPage.vol4Title": "青年佛教志愿者",
    "aboutPage.vol5Title": "志愿者",
    "aboutPage.vol5Meta": "全球",
    "aboutPage.certEyebrow": "证书",
    "aboutPage.certHeading": "证书与学习记录待补充。",
    "aboutPage.certStatus": "待补充",
    "aboutPage.certTitle": "待更新",
    "aboutPage.certCopy":
      "当前来源暂时还没有展示 LinkedIn 证书。这里预留给后续证书、课程或学习记录。",
    "aboutPage.expStudioTime": "持续中",
    "aboutPage.exp4Position": "独立设计师",
    "aboutPage.exp4Country": "荷兰 / 中国",
    "aboutPage.exp4":
      "面向精选 AI 产品、网站、品牌与文化项目的独立工作室实践。",
    "aboutPage.offEyebrow": "工作之外",
    "aboutPage.offHeading":
      "工作之余，我从文化、自然与身心探索中汲取能量。",
    "aboutPage.off1": "媒体艺术爱好者",
    "aboutPage.off2": "文化探索者",
    "aboutPage.off3": "瑜伽练习者 🧘‍♀️",
    "aboutPage.off4": "笔记与反思",
    "aboutPage.off5": "园丁 / 爱植物 🌱",
    "aboutPage.off6": "游泳",
    "aboutPage.life1": "看展日",
    "aboutPage.life2": "城市纹理",
    "aboutPage.life3": "工作室笔记",
    "aboutPage.life4": "瑜伽练习",
    "aboutPage.life5": "文化田野",
    "aboutPage.nextEyebrow": "下一步",
    "aboutPage.nextHeading": "想看短版本？可以查看 CV，或从精选作品开始。",
  },
};

function t(key) {
  return translations[currentLanguage][key] || translations.en[key] || key;
}

function getProjectTitle(project) {
  return currentLanguage === "zh" && project.titleZh
    ? project.titleZh
    : project.title;
}

const panelNodes = {
  status: document.querySelector("[data-panel-status]"),
  title: document.querySelector("[data-panel-title]"),
  summary: document.querySelector("[data-panel-summary]"),
  mode: document.querySelector("[data-panel-mode]"),
  challenge: document.querySelector("[data-panel-challenge]"),
  output: document.querySelector("[data-panel-output]"),
  evidence: document.querySelector("[data-panel-evidence]"),
};

function renderProjects() {
  if (!grid) return;

  const filtered = getFilteredProjects();
  grid.innerHTML = "";

  if (!filtered.length) {
    grid.innerHTML = `
      <div class="project-empty" role="status">
        <p>${t("filters.emptyTitle")}</p>
        <span>${t("filters.emptyCopy")}</span>
        <button type="button" data-reset-filters>${t("filters.reset")}</button>
      </div>
    `;
    grid
      .querySelector("[data-reset-filters]")
      ?.addEventListener("click", resetFilters);
    updateFilterSummary(0);
    return;
  }

  filtered.forEach((project) => {
    const copy = getWorkPresentation(project);
    const projectTitle = copy[0];
    const hasCase = ['cxd-ai', 'momcozy-web'].includes(project.id);
    const entryLabel = ['jing-qiong-er','cynergy'].includes(project.id) ? (currentLanguage === 'zh' ? '访问官网' : 'Visit website') : currentLanguage === 'zh'
      ? (hasCase ? '阅读案例' : '项目速览')
      : (hasCase ? 'Read case' : 'Quick look');
    const card = document.createElement("article");
    card.className = `project-card ${project.size}`;
    card.dataset.projectId = project.id;
    card.setAttribute("aria-label", projectTitle);
    card.style.setProperty("--project-surface", project.surface);

    card.innerHTML = `
      <div class="project-visual ${project.imageTone}">
        ${project.id === "mauritshuis" ? `<img class="work-cover" src="./assets/work/mauritshuis-cover.png" width="1474" height="857" alt="${copy[0]}" loading="lazy" decoding="async">` : ["jing-qiong-er", "cynergy"].includes(project.id) ? `<img class="work-cover" src="./assets/work/${project.id === "cynergy" ? "cynergy-home" : "jiang-home"}.png" alt="${copy[0]}" loading="lazy" decoding="async" style="width:100%;height:auto;object-fit:contain">` : projectShowcases[project.id] ? renderProjectShowcase(project, { controls: false }) : `<img class="work-cover" src="./assets/work/${project.id}-1200.webp?v=artwork3" srcset="./assets/work/${project.id}-640.webp?v=artwork3 640w, ./assets/work/${project.id}-1200.webp?v=artwork3 1200w" sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 45vw" width="1200" height="${workCoverHeights[project.id]}" alt="${copy[0]}" loading="lazy" decoding="async">`}
      </div>
      <div class="project-content">
        <p class="project-meta">${copy[2]}</p>
        <h3 class="project-title"><button class="project-open" type="button" aria-label="${entryLabel}: ${projectTitle}">${projectTitle}</button></h3>
        <p class="project-desc">${copy[1]}</p>
        <div class="project-tags">
          <span>${project.year}</span>
          ${copy[3].map((tag) => `<span>${tag}</span>`).join("")}
        </div>
      </div>
    `;

    card.addEventListener("click", () => openPanel(project.id));


    grid.appendChild(card);
  });


  updateFilterSummary(filtered.length);
}

function getLocalizedText(value) {
  if (typeof value === "string") return value;
  return value[currentLanguage] || value.en || value.zh || "";
}

// Small conceptual sketches accompany the writing; they are not research artifacts.
function noteDeskSketch(index) {
  const marks = [
    '<path d="M25 57q-5-24 20-25t26 24q1 25-25 25T25 57m49 0 39-3m-7-4 7 4-6 5M118 35l50-2 3 45-52 2zM178 55l34-1m-6-4 6 4-5 5M219 36l59 1-1 39-58 1z"/><path class="desk-ink" d="M21 88q30 8 56-3M64 27q15-20 53-18m-8-4 8 4-7 6"/>',
    '<path d="M72 28q-33-2-35 34t35 35q35 1 35-35T72 28m72 0q-34 0-35 34t35 35q35 1 36-35t-36-34m72 0q-34 0-35 34t35 35q35 1 36-35t-36-34"/><path class="desk-ink" d="m126 62 13 12 24-27M73 110q80 8 144-3"/>',
    '<path d="m47 42 69-9 7 58-69 9zm65-13 69 4-3 59-69-4zm67 16 71-7 6 58-71 8zM66 57l27-3m-25 15 34-4m23-12 35 2m-36 11 24 1m50-4 37-4m-35 17 28-3"/><path class="desk-ink" d="M114 14q44-18 78 1m-8-7 8 7-10 3"/>',
    '<path d="M43 28l207 1-2 75-204-2zM59 45h83m-83 16h167m-167 16h134m-134 13h74"/><path class="desk-ink" d="M152 39q41-11 79 0l-1 15q-36 5-80 0zM153 89q38 8 74-3"/>',
    '<path d="M36 72q24-44 57-20t56-9 63 12 64-14M37 87h241"/><path class="desk-ink" d="m126 56 23-13-4 24M222 28q27-10 49 4"/>',
    '<path d="m71 31-31 27 31 26m151-53 31 27-31 26m-57-67-27 86M91 113h132"/><path class="desk-ink" d="M99 40q49-11 105 0m-99 18 76-2m-74 17 91-1"/>'
  ];
  return `<svg class="note-desk-sketch" viewBox="0 0 310 130" aria-hidden="true">${marks[index % marks.length]}</svg>`;
}

function initNotesPaperMotion() {
  if (!notesGrid) return;
  const motion = matchMedia("(prefers-reduced-motion: reduce)");
  const pointer = matchMedia("(hover: hover) and (pointer: fine)");
  let active = null;
  let bounds = null;
  let frame = 0;
  let x = 0, y = 0;
  const reset = () => {
    cancelAnimationFrame(frame);
    frame = 0;
    if (active) {
      active.style.removeProperty("--desk-rx");
      active.style.removeProperty("--desk-ry");
    }
    active = null;
    bounds = null;
  };
  notesGrid.addEventListener("pointermove", (event) => {
    if (motion.matches || !pointer.matches || event.pointerType === "touch") return;
    const card = event.target.closest(".note-card");
    if (!card) { reset(); return; }
    if (active !== card) {
      reset();
      active = card;
      bounds = card.getBoundingClientRect();
    }
    x = Math.max(-1, Math.min(1, (event.clientX - bounds.left) / bounds.width * 2 - 1));
    y = Math.max(-1, Math.min(1, (event.clientY - bounds.top) / bounds.height * 2 - 1));
    if (!frame) frame = requestAnimationFrame(() => {
      if (active) {
        active.style.setProperty("--desk-rx", `${(-y * 3).toFixed(2)}deg`);
        active.style.setProperty("--desk-ry", `${(x * 4).toFixed(2)}deg`);
      }
      frame = 0;
    });
  });
  notesGrid.addEventListener("pointerleave", reset);
  notesGrid.addEventListener("scroll", reset, { passive: true });
  window.addEventListener("resize", reset, { passive: true });
  motion.addEventListener("change", reset);
}

function renderNotes() {
  if (!notesGrid) return;

  const featuredNotes = notesData
    .filter((note) => note.status === "featured")
    .sort((a, b) => a.priority - b.priority)
    .slice(0, 6);

  notesGrid.innerHTML = "";

  featuredNotes.forEach((note, index) => {
    const card = document.createElement("a");
    card.className = "note-card";
    card.href = note.detailUrl || note.url;
    if (!note.detailUrl) {
      card.target = "_blank";
      card.rel = "noopener noreferrer";
    }
    card.setAttribute("aria-label", getLocalizedText(note.title));

    card.innerHTML = `
      <div class="note-card-head">
        <span class="note-card-index">${String(index + 1).padStart(2, "0")}</span>
        <span class="note-card-theme">${note.theme}</span>
      </div>
      <span class="note-desk-tape" aria-hidden="true"></span>
      <div class="note-desk-art" aria-hidden="true">
        ${noteDeskSketch(index)}
        <span class="note-margin-mark">${getLocalizedText([
          { zh: "判断，留给人", en: "Keep human judgment" },
          { zh: "换个视角？", en: "Another perspective?" },
          { zh: "从组件到知识", en: "Components → knowledge" },
          { zh: "答案之外，证据呢？", en: "Where’s the evidence?" },
          { zh: "持续生长", en: "Always evolving" },
          { zh: "边做边学", en: "Learn by building" }
        ][index])}</span>
      </div>
      <div class="note-card-body">
        <h3>${getLocalizedText(note.title)}</h3>
      </div>
      <div class="note-card-tags">
        ${note.tags.map((tag) => `<span>${tag}</span>`).join("")}
      </div>
    `;

    notesGrid.appendChild(card);
  });

  updateNotesRailControls();
}

function updateNotesRailControls() {
  if (!notesGrid || !notesPrev || !notesNext) return;

  const maxScroll = notesGrid.scrollWidth - notesGrid.clientWidth;
  const atStart = notesGrid.scrollLeft <= 2;
  const atEnd = notesGrid.scrollLeft >= maxScroll - 2;

  notesPrev.disabled = atStart;
  notesNext.disabled = atEnd || maxScroll <= 0;
}

function initNotesRailControls() {
  if (!notesGrid || !notesPrev || !notesNext) return;

  const scrollByPage = (direction) => {
    notesGrid.scrollBy({
      left: direction * notesGrid.clientWidth * 0.78,
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  };

  notesPrev.addEventListener("click", () => scrollByPage(-1));
  notesNext.addEventListener("click", () => scrollByPage(1));
  notesGrid.addEventListener("scroll", updateNotesRailControls, {
    passive: true,
  });
  window.addEventListener("resize", updateNotesRailControls);
}

function initRadarMarquee() {
  const radarTrack = document.querySelector(".radar-track");
  const radarList = radarTrack?.querySelector(".radar-list");
  if (!radarTrack || !radarList || radarTrack.dataset.radarCloned === "true") {
    return;
  }

  const clone = radarList.cloneNode(true);
  clone.setAttribute("aria-hidden", "true");
  clone.querySelectorAll("a, button").forEach((node) => {
    node.setAttribute("tabindex", "-1");
  });
  radarTrack.appendChild(clone);
  radarTrack.dataset.radarCloned = "true";
}

function getNoteStatusLabel(status) {
  if (status === "featured") return t("notesPage.statusFeatured");
  if (status === "supporting") return t("notesPage.statusSupporting");
  return t("notesPage.statusPending");
}

function renderNotesIndex() {
  if (!notesIndex) return;

  const sortedNotes = [...notesData].sort((a, b) => a.priority - b.priority);
  notesIndex.innerHTML = "";

  sortedNotes.forEach((note) => {
    const item = document.createElement("a");
    item.className = `notes-index-item ${note.status}`;
    item.href = note.detailUrl || note.url;
    if (!note.detailUrl) {
      item.target = "_blank";
      item.rel = "noopener noreferrer";
    }

    item.innerHTML = `
      <div class="notes-index-meta">
        <span>${note.theme}</span>
        <span>${note.date}</span>
      </div>
      <div class="notes-index-main">
        <div>
          <span class="notes-index-status">${getNoteStatusLabel(note.status)}</span>
          <h3>${getLocalizedText(note.title)}</h3>
          <p>${getLocalizedText(note.summary)}</p>
          <div class="note-card-tags">
            ${note.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
        </div>
        <span class="notes-index-link">
          ${note.detailUrl ? t("notesPage.openNote") : t("notesPage.readSource")}
        </span>
      </div>
    `;

    notesIndex.appendChild(item);
  });
}

function getFilteredProjects() {
  return projects.filter((project) => {
    const matchesFocus =
      state.focus === "all" || project.focus.includes(state.focus);
    const matchesTime = state.time === "all" || project.time === state.time || (project.time === "2024-2025" && ["2024","2025"].includes(state.time));
    return matchesFocus && matchesTime;
  });
}

function updateFilterSummary(count) {
  if (!summary) return;

  const focusLabel = getActiveLabel("focus");
  const timeLabel = getActiveLabel("time");
  const isDefaultFilters = state.focus === "all" && state.time === "all";

  summary.hidden = isDefaultFilters && count > 0;

  if (isDefaultFilters && count > 0) {
    summary.textContent = "";
    return;
  }

  if (count === projects.length) {
    summary.textContent = t("filters.showingAll");
    return;
  }

  if (count === 0) {
    summary.textContent = t("filters.empty");
    return;
  }

  const projectLabel =
    currentLanguage === "zh"
      ? t("filters.projects")
      : count > 1
        ? t("filters.projects")
        : t("filters.project");
  const separator = currentLanguage === "zh" ? " · " : " · ";
  summary.textContent = `${t("filters.showing")} ${count} ${projectLabel}${separator}${focusLabel}${separator}${timeLabel}`;
}

function getActiveLabel(group) {
  const button = document.querySelector(
    `[data-filter-group="${group}"] .filter-chip.active`,
  );
  return button ? button.textContent.trim() : "All";
}

function openPanel(projectId) {
  if (projectId === "cynergy") { window.location.href = "https://www.cynergy-ventures.com/"; return; }
  if (projectId === "jing-qiong-er") { window.location.href = "https://www.jiangqionger.com/"; return; }
  const casePages = { 'momcozy-web': './momcozy-web.html', 'cxd-ai': './ai-design-platform.html' };
  if (casePages[projectId]) { window.location.href = casePages[projectId]; return; }

  if (!panel || !scrim) return;

  const project = projects.find((item) => item.id === projectId);
  if (!project) return;

  activePanelOpener =
    document.activeElement instanceof HTMLElement ? document.activeElement : null;
  state.activeProjectId = projectId;
  document
    .querySelectorAll(".project-card")
    .forEach((card) =>
      card.classList.toggle("active", card.dataset.projectId === projectId),
    );

  const copy = getWorkPresentation(project);
  panelNodes.status.textContent = copy[4];
  const panelImage = document.querySelector('[data-panel-image]');
  if (panelImage) { panelImage.src = `./assets/work/${project.id}-1200.webp?v=artwork3`; panelImage.alt = copy[0]; }
  panelNodes.title.textContent = copy[0];
  panelNodes.summary.textContent = copy[1];
  panelNodes.mode.textContent = `${getLocalizedText(project.mode)} · ${copy[3].join(" / ")}`;
  panelNodes.challenge.textContent = currentLanguage === "zh" ? (copy[5] || copy[1]) : project.complexity;
  panelNodes.output.textContent = currentLanguage === "zh" ? (copy[6] || copy[4]) : project.output;
  panelNodes.evidence.innerHTML = copy[3]
    .map((item) => `<span>${item}</span>`)
    .join("");

  panel.classList.add("open");
  scrim.classList.add("open");
  panel.setAttribute("aria-hidden", "false");
  document.body.classList.add("panel-open");
  window.requestAnimationFrame(() => {
    document.querySelector("[data-panel-close]")?.focus({ preventScroll: true });
  });
}

function closePanel(restoreFocus = true) {
  const panelWasOpen = panel?.classList.contains("open");
  state.activeProjectId = null;
  panel?.classList.remove("open");
  scrim?.classList.remove("open");
  panel?.setAttribute("aria-hidden", "true");
  document.body.classList.remove("panel-open");
  document
    .querySelectorAll(".project-card")
    .forEach((card) => card.classList.remove("active"));
  if (panelWasOpen && restoreFocus && activePanelOpener?.isConnected) {
    activePanelOpener.focus({ preventScroll: true });
  }
  activePanelOpener = null;
}

function setFilter(group, value) {
  state[group] = value;
  document
    .querySelectorAll(`[data-filter-group="${group}"] .filter-chip`)
    .forEach((button) => {
      const isActive = button.dataset.value === value;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  closePanel();
  renderProjects();
}

function resetFilters() {
  state.focus = "all";
  state.time = "all";
  document.querySelectorAll("[data-filter-group] .filter-chip").forEach((button) => {
    const isActive = button.dataset.value === "all";
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  closePanel(false);
  renderProjects();
}

document.querySelectorAll("[data-filter-group]").forEach((group) => {
  group.addEventListener("click", (event) => {
    const button = event.target.closest(".filter-chip");
    if (!button) return;
    setFilter(group.dataset.filterGroup, button.dataset.value);
  });
});

document
  .querySelector("[data-panel-close]")
  ?.addEventListener("click", closePanel);
scrim?.addEventListener("click", closePanel);

document.addEventListener("keydown", (event) => {
  if (event.key === "Tab" && panel?.classList.contains("open")) {
    trapFocus(event, panel);
    return;
  }

  if (
    event.key === "Tab" &&
    header?.classList.contains("nav-open") &&
    window.matchMedia("(max-width: 720px)").matches
  ) {
    trapFocus(event, header);
    return;
  }

  if (event.key === "Escape" && panel?.classList.contains("open")) {
    closePanel();
    return;
  }

  if (event.key === "Escape" && header?.classList.contains("nav-open")) {
    setNavOpen(false, true);
  }
});

function setTheme(theme) {
  document.body.dataset.theme = theme;
  if (themeLabel) {
    themeLabel.innerHTML = theme === "dark" ? '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.4 1.4m11.2 11.2L19 19M5 19l1.4-1.4M17.6 6.4 19 5"/></svg>' : '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M20.6 14.3A8.6 8.6 0 0 1 9.7 3.4a9 9 0 1 0 10.9 10.9Z"/></svg>';
  }
  if (themeToggle) {
    const nextTheme = theme === "dark" ? "light" : "dark";
    const isZh = currentLanguage === "zh";
    themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
    themeToggle.setAttribute(
      "aria-label",
      isZh
        ? `切换到${nextTheme === "dark" ? "深色" : "浅色"}模式`
        : `Switch to ${nextTheme} theme`,
    );
  }
  localStorage.setItem("portfolio-theme", theme);
}

function initTheme() {
  const stored = localStorage.getItem("portfolio-theme");
  setTheme(stored === "dark" ? "dark" : "light");
}

themeToggle?.addEventListener("click", () => {
  setTheme(document.body.dataset.theme === "dark" ? "light" : "dark");
});

function setNavOpen(isOpen, restoreFocus = false) {
  if (!header || !navToggle) return;

  if (isOpen) {
    activeNavOpener =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : navToggle;
  }
  header.classList.toggle("nav-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute(
    "aria-label",
    isOpen ? t("nav.menu.close") : t("nav.menu.open"),
  );
  if (!isOpen && restoreFocus && activeNavOpener?.isConnected) {
    activeNavOpener.focus({ preventScroll: true });
  }
  if (!isOpen) {
    activeNavOpener = null;
  }
}

navToggle?.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  setNavOpen(!isOpen);
});

navMenu?.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    setNavOpen(false);
  }
});

window.addEventListener("resize", () => {
  if (window.matchMedia("(min-width: 721px)").matches) {
    setNavOpen(false);
  }
});

function setLanguage(language) {
  const focusNames = { 'integrated':['综合设计','Integrated Design'], 'app-h5':['APP / H5','APP / H5'], 'brand-vi':['品牌 VI','Brand Identity'], 'motion':['视频动画','Motion & Video'], 'print':['纸媒','Print & Editorial'], 'ai-systems': ['AI 与系统', 'AI & Systems'], 'product-ux': ['产品体验', 'Product UX'], 'web-brand': ['网站设计', 'Website design'], 'culture-media': ['文化与新媒体', 'Culture & New Media'] };
  document.querySelectorAll('[data-filter-group="focus"] [data-value]').forEach(button => {
    const labels = focusNames[button.dataset.value];
    if (labels) button.textContent = labels[language === 'zh' ? 0 : 1];
  });
  const archive = document.querySelector('[data-filter-group="time"] [data-value="archive"]');
  if (archive) archive.textContent = language === 'zh' ? '2012 及以前' : '2012 & earlier';
  currentLanguage = language;
  document.documentElement.lang = language === "zh" ? "zh-Hans" : "en";
  document.body.dataset.language = language;
  document.dispatchEvent(new Event("portfolio:language"));
  if (languageLabel) {
    languageLabel.textContent = t("language.next");
  }
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    if (node.dataset.i18n === "about.heading") {
      node.innerHTML = currentLanguage === "zh"
        ? '<span class="about-soft">一段</span><em class="about-border">跨境设计实践</em><span class="about-soft">，由</span><span class="about-term">产品<span class="about-sticker" aria-hidden="true">💡</span></span>、<span class="about-term">系统<span class="about-sticker" aria-hidden="true">🧩</span></span><span class="about-soft">与</span><span class="about-term">文化<span class="about-sticker" aria-hidden="true">🌏</span></span><span class="about-soft">共同塑造。</span>'
        : '<span class="about-soft">A </span><em class="about-border">cross-border</em> design practice <span class="about-soft">shaped by </span><span class="about-term">product<span class="about-sticker" aria-hidden="true">💡</span></span>, <span class="about-term">systems<span class="about-sticker" aria-hidden="true">🧩</span></span><span class="about-soft"> and </span><span class="about-term">culture<span class="about-sticker" aria-hidden="true">🌏</span></span>.';
    } else {
      node.textContent = t(node.dataset.i18n);
    }
  });
  if (navToggle) {
    navToggle.setAttribute(
      "aria-label",
      header?.classList.contains("nav-open")
        ? t("nav.menu.close")
        : t("nav.menu.open"),
    );
  }
  cvDownloadLinks.forEach((link) => {
    const file = cvFiles[currentLanguage];
    link.setAttribute("href", file.href);
    link.setAttribute("download", file.filename);
  });
  setTheme(document.body.dataset.theme || "light");
  updateFilterSummary(getFilteredProjects().length);
  renderProjects();
  renderNotes();
  renderNotesIndex();
  localStorage.setItem("portfolio-language", language);
}

function initLanguage() {
  const stored = localStorage.getItem("portfolio-language");
  setLanguage(stored === "zh" ? "zh" : "en");
}

languageToggle?.addEventListener("click", () => {
  setLanguage(currentLanguage === "zh" ? "en" : "zh");
});

function initCursorAura() {
  if (!cursorAura) return;
  if (!window.matchMedia("(pointer: fine)").matches) return;

  window.addEventListener("pointermove", (event) => {
    cursorAura.classList.add("visible");
    cursorAura.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate3d(-50%, -50%, 0)`;
  });

  document.addEventListener("pointerover", (event) => {
    const target = event.target.closest(
      "a, button, .project-card, input, .notes-grid .note-card",
    );
    cursorAura.classList.toggle("active", Boolean(target));
  });

  document.addEventListener("pointerleave", () => {
    cursorAura.classList.remove("visible", "active");
  });
}

function initExperienceReveal() {
  const revealItems = document.querySelectorAll("[data-reveal-list] details");
  if (!revealItems.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.open = true;
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "-34% 0px -42% 0px",
      threshold: 0,
    },
  );

  revealItems.forEach((item) => observer.observe(item));
}

function initEmailDrawer() {
  const emailDrawer = document.querySelector("[data-email-drawer]");
  if (!emailDrawer) return;

  const emailOpeners = document.querySelectorAll("[data-email-open]");
  const emailClosers = emailDrawer.querySelectorAll("[data-email-close]");
  const emailForm = emailDrawer.querySelector(".email-form");
  const firstField = emailDrawer.querySelector("input, textarea");
  let emailDrawerOpener = null;

  const getFocusableEmailNodes = () =>
    Array.from(
      emailDrawer.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ),
    ).filter((node) => node.offsetParent !== null);

  const openEmailDrawer = (event) => {
    event?.preventDefault();
    emailDrawerOpener = event?.currentTarget || document.activeElement;
    emailDrawer.classList.add("open");
    emailOpeners.forEach((opener) => opener.setAttribute("aria-expanded", "true"));
    emailDrawer.setAttribute("aria-hidden", "false");
    document.body.classList.add("email-drawer-open");
    window.setTimeout(() => firstField?.focus(), 180);
  };

  const closeEmailDrawer = () => {
    emailDrawer.classList.remove("open");
    emailOpeners.forEach((opener) => opener.setAttribute("aria-expanded", "false"));
    emailDrawer.setAttribute("aria-hidden", "true");
    document.body.classList.remove("email-drawer-open");
    emailDrawerOpener?.focus?.();
    emailDrawerOpener = null;
  };

  emailOpeners.forEach((opener) => {
    opener.addEventListener("click", openEmailDrawer);
  });

  emailClosers.forEach((closer) => {
    closer.addEventListener("click", closeEmailDrawer);
  });

  emailForm?.addEventListener("submit", () => {
    const formData = new FormData(emailForm);
    const name = String(formData.get("name") || "").trim();
    const replyEmail = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const subject = encodeURIComponent(
      `Portfolio inquiry${name ? ` from ${name}` : ""}`,
    );
    const body = encodeURIComponent(
      [`Name: ${name}`, `Reply email: ${replyEmail}`, "", message].join("\n"),
    );

    emailForm.action = `mailto:zhuningli001@163.com?subject=${subject}&body=${body}`;
  });

  document.addEventListener("keydown", (event) => {
    if (!emailDrawer.classList.contains("open")) return;

    if (event.key === "Escape") {
      closeEmailDrawer();
      return;
    }

    if (event.key !== "Tab") return;

    const focusableNodes = getFocusableEmailNodes();
    if (!focusableNodes.length) return;

    const firstNode = focusableNodes[0];
    const lastNode = focusableNodes[focusableNodes.length - 1];

    if (event.shiftKey && document.activeElement === firstNode) {
      event.preventDefault();
      lastNode.focus();
    } else if (!event.shiftKey && document.activeElement === lastNode) {
      event.preventDefault();
      firstNode.focus();
    }
  });
}

function setRecordTab(tabName) {
  recordTabs.forEach((tab) => {
    const isActive = tab.dataset.recordTab === tabName;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });

  recordPanels.forEach((panel) => {
    const isActive = panel.dataset.recordPanel === tabName;
    panel.classList.toggle("active", isActive);
    panel.hidden = !isActive;
  });
}

recordTabs.forEach((tab) => {
  tab.addEventListener("click", () => setRecordTab(tab.dataset.recordTab));
});

recordJumps.forEach((jump) => {
  jump.addEventListener("click", () => setRecordTab(jump.dataset.recordJump));
});

// Desktop: reveal near the top edge. Touch: reveal when scrolling upward.
if (header) {
  const hoverPointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  let nearTop = false;
  let previousY = window.scrollY;
  const updateHeader = () => {
    const y = window.scrollY;
    header.classList.toggle("scrolled", y > 12);
    const hide = y > 120 && !nearTop &&
      (hoverPointer.matches || y >= previousY);
    header.classList.toggle("header-hidden", hide);
    previousY = y;
  };
  window.addEventListener("scroll", updateHeader, { passive: true });
  window.addEventListener("pointermove", (event) => {
    if (!hoverPointer.matches) return;
    const next = event.clientY <= 48 ||
      (!header.classList.contains("header-hidden") && event.clientY <= header.getBoundingClientRect().bottom + 32);
    if (nearTop !== next) { nearTop = next; updateHeader(); }
  }, { passive: true });
  document.addEventListener("pointerleave", () => {
    nearTop = false;
    if (hoverPointer.matches) updateHeader();
  });
  updateHeader();
}

initTheme();
initLanguage();
initRadarMarquee();
initCursorAura();
initExperienceReveal();
initEmailDrawer();
renderProjects();
renderNotes();
renderNotesIndex();
initNotesRailControls();
initNotesPaperMotion();
