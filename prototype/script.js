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
    role: "CDO / Product Design / Brand System / 0-1 AI Product Framework",
    complexity:
      "Turning an abstract AI social concept into product structure across AI conversation, digital twin cards, social discovery, tasks and messaging.",
    output:
      "Product framework, user flow, brand system, interface direction and design system foundations.",
    surface: "#eaded3",
    imageTone: "warm",
  },
  {
    id: "momcozy-knowledge",
    title: "Momcozy AI Component & Module Knowledge System",
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
    role: "Design Knowledge / Module System / AI Workflow / QA Logic",
    complexity:
      "The project moves beyond a normal component library and defines rules, contracts, decision gates and QA logic that both people and AI can understand.",
    output:
      "Component Knowledge Layer, Module Assembly Layer, PDP Layer, module contracts, preview portal and QA gates.",
    surface: "#d9d4ca",
    imageTone: "system",
  },
  {
    id: "momcozy-web",
    title: "Momcozy Website Redesign & Upgrade",
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
    role: "UX Strategy / AI Search / Homepage System / Web Redesign",
    complexity:
      "The redesign connects fuzzy search, AI assistant interaction, two strategy models, four user tags and modular homepage combinations.",
    output:
      "Sitemap, AI search model, assistant interaction, personalized homepage strategy and desktop/mobile demos.",
    surface: "#d8c2bd",
    imageTone: "web",
  },
  {
    id: "cxd-ai",
    title: "CXD AI Product Marketing Design Platform",
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
    role: "UX Flow / Design System / Scenario Modules / Prompt-to-design Interaction",
    complexity:
      "Multiple scenarios needed to share a clear interaction model: industrial design, marketing sets, PDP pages, patterns and packaging.",
    output:
      "Scenario module overview, canvas editing flow, prompt-to-design workflow and design system foundations.",
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
    role: "Brand Identity / Visual Guidelines / Website UI",
    complexity:
      "The platform needed to balance trust, professionalism, care and inherited RNW brand DNA.",
    output:
      "Logo design, visual language, website interface direction and full brand guideline system.",
    surface: "#d8d1e4",
    imageTone: "brand",
  },
  {
    id: "jing-qiong-er",
    title: "Jing Qiong Er",
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
    role: "Website Design / Content Structure / Visual Direction",
    complexity:
      "The work required a calm structure that could hold rich cultural projects, visual archives and personal narrative across devices.",
    output:
      "Website structure, desktop/mobile page designs, gallery logic and visual direction.",
    surface: "#e6ded2",
    imageTone: "culture",
  },
  {
    id: "cynergy",
    title: "Cynergy",
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
    role: "Website Design / Information Structure / Visual System",
    complexity:
      "The site needed to communicate a refined cross-cultural business identity without becoming visually noisy.",
    output:
      "Homepage design, portfolio structure, visual system and editorial grid direction.",
    surface: "#ddd9cf",
    imageTone: "web",
  },
  {
    id: "eca",
    title: "ECA International Cultural Creative Award",
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
    role: "Visual Identity / Campaign / Exhibition Materials / Motion",
    complexity:
      "The project spanned multiple stages and media, from visual identity and campaign materials to exhibition and ceremony touchpoints.",
    output:
      "Logo, posters, website/media assets, award materials, exhibition visuals and motion direction.",
    surface: "#ded8c8",
    imageTone: "event",
  },
  {
    id: "studio-aiwen",
    title: "Studio AIWEN",
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
    role: "Website Design / Research / Prototype / Webflow",
    complexity:
      "The site needed to organize abstract research, writing and art practice into a clear public-facing structure.",
    output:
      "Research, sitemap, prototype, Webflow implementation and content structure.",
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
    role: "Research / Mapping / Wireframe / Prototype",
    complexity:
      "The project emphasized organizing mixed-media cultural content into a readable database-like web experience.",
    output:
      "Information hierarchy, research mapping, wireframes and prototype structure.",
    surface: "#d1cabd",
    imageTone: "archive",
  },
];

const state = {
  focus: "all",
  time: "all",
  activeProjectId: null,
};

const grid = document.querySelector("[data-work-grid]");
const featuredRail = document.querySelector("[data-featured-rail]");
const notesGrid = document.querySelector("[data-notes-grid]");
const notesPrev = document.querySelector("[data-notes-prev]");
const notesNext = document.querySelector("[data-notes-next]");
const notesIndex = document.querySelector("[data-notes-index]");
const panel = document.querySelector("[data-panel]");
const scrim = document.querySelector("[data-panel-scrim]");
const summary = document.querySelector("[data-filter-summary]");
const header = document.querySelector("[data-header]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const themeLabel = document.querySelector("[data-theme-label]");
const languageToggle = document.querySelector("[data-language-toggle]");
const languageLabel = document.querySelector("[data-language-label]");
const cursorAura = document.querySelector("[data-cursor-aura]");
const roleRotator = document.querySelector("[data-role-rotator]");
const recordTabs = document.querySelectorAll("[data-record-tab]");
const recordPanels = document.querySelectorAll("[data-record-panel]");
const recordJumps = document.querySelectorAll("[data-record-jump]");
const cvDownloadLinks = document.querySelectorAll("[data-cv-download]");

let currentLanguage = "en";
let roleIndex = 0;

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
    id: "wechat-note-1",
    source: "WeChat",
    url: "https://mp.weixin.qq.com/s/pWcrMIdN99QqlkekToEf_Q",
    date: "Pending",
    theme: "WeChat Archive",
    status: "pending",
    priority: 90,
    title: {
      en: "WeChat note to review",
      zh: "待补充的微信公众号文章",
    },
    summary: {
      en: "Browser access is currently blocked for this WeChat article. Add title, thesis and tags after the source text is available.",
      zh: "当前浏览器安全策略无法读取这篇微信公众号文章。拿到标题、正文或摘要后，可补充进 Notes 内容库。",
    },
    tags: ["Pending", "WeChat"],
  },
  {
    id: "wechat-note-2",
    source: "WeChat",
    url: "https://mp.weixin.qq.com/s/D8RjpvRdY-cEkcS3j8-mOw",
    date: "Pending",
    theme: "WeChat Archive",
    status: "pending",
    priority: 91,
    title: {
      en: "WeChat note to review",
      zh: "待补充的微信公众号文章",
    },
    summary: {
      en: "Browser access is currently blocked for this WeChat article. Add title, thesis and tags after the source text is available.",
      zh: "当前浏览器安全策略无法读取这篇微信公众号文章。拿到标题、正文或摘要后，可补充进 Notes 内容库。",
    },
    tags: ["Pending", "WeChat"],
  },
  {
    id: "wechat-note-3",
    source: "WeChat",
    url: "https://mp.weixin.qq.com/s/ZfCjJV_0UawJpjMKzzPVnA",
    date: "Pending",
    theme: "WeChat Archive",
    status: "pending",
    priority: 92,
    title: {
      en: "WeChat note to review",
      zh: "待补充的微信公众号文章",
    },
    summary: {
      en: "Browser access is currently blocked for this WeChat article. Add title, thesis and tags after the source text is available.",
      zh: "当前浏览器安全策略无法读取这篇微信公众号文章。拿到标题、正文或摘要后，可补充进 Notes 内容库。",
    },
    tags: ["Pending", "WeChat"],
  },
];

const translations = {
  en: {
    "nav.work": "Work",
    "nav.notes": "Notes",
    "nav.about": "About",
    "nav.contact": "Contact",
    "featured.eyebrow": "Featured cases",
    "featured.hint": "Swipe horizontally to preview major projects.",
    "hero.static": "Hello, I am a",
    "hero.copy":
      "I design at the intersection of people, technology, and meaning. My work spans UX, brand experience, design systems, and AI-powered products.",
    "hero.more": "More about me",
    "capabilities.ai.title": "AI-native UX",
    "capabilities.ai.desc":
      "Workflows, intent understanding and agent-like interactions.",
    "capabilities.systems.title": "Complex Systems",
    "capabilities.systems.desc":
      "Information architecture, journeys and reusable structures.",
    "capabilities.tech.title": "Design Technology",
    "capabilities.tech.desc":
      "Design knowledge, module logic and AI-readable assets.",
    "capabilities.culture.title": "Brand & Culture",
    "capabilities.culture.desc":
      "Digital experiences with atmosphere and cultural sensitivity.",
    "work.eyebrow": "Selected work",
    "work.heading":
      "A visual index across AI-native products, product UX, websites, brand systems and cultural projects.",
    "work.copy":
      "Focus labels are intentionally provisional. The cards also carry context labels such as independent practice, company work, studio projects and archive work.",
    "filters.focus": "Focus draft",
    "filters.time": "Time",
    "filters.all": "All",
    "filters.showingAll": "Showing all selected work",
    "filters.empty":
      "No public projects in this filter yet. More cases are being structured.",
    "filters.showing": "Showing",
    "filters.project": "project",
    "filters.projects": "projects",
    "notes.eyebrow": "Notes",
    "notes.heading": "Notes from reading, building and thinking.",
    "notes.link": "Notes index later",
    "notes.item1": "Design knowledge is the new design asset",
    "notes.item2": "From component library to AI-readable module system",
    "notes.item3": "Why AI search should start with user intent",
    "notesPage.eyebrow": "AI UX Research Notes",
    "notesPage.title":
      "A living notebook on agent systems, design knowledge and adaptive digital experience.",
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
    "about.heading": "Independent practice between China and the Netherlands.",
    "about.copy":
      "Zen-Zhu Studio is my independent design practice for AI products, websites, brand systems and cultural projects. It began in the Netherlands and continues as a flexible studio practice for projects that need direct communication, strategic judgment and careful execution.",
    "contact.eyebrow": "Contact",
    "contact.heading":
      "Open to senior design roles, AI product teams and selected collaborations.",
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
    "panel.role": "Role",
    "panel.complexity": "Complexity",
    "panel.output": "System / output",
    "panel.cta": "Full case later",
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
      "I’m Ningli, an UX Designer / Media creator focused on future interactions and human values.",
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
    "nav.work": "作品",
    "nav.notes": "笔记",
    "nav.about": "关于",
    "nav.contact": "联系",
    "featured.eyebrow": "重点项目",
    "featured.hint": "横向滑动，快速预览主要作品。",
    "hero.static": "你好，我是",
    "hero.copy":
      "我在人的需求、技术可能性与意义感的交汇处进行设计。我的工作横跨 UX、品牌体验、设计系统与 AI 驱动产品。",
    "hero.more": "更多关于我",
    "capabilities.ai.title": "AI 原生 UX",
    "capabilities.ai.desc": "围绕工作流、意图理解与类 Agent 交互的体验设计。",
    "capabilities.systems.title": "复杂系统",
    "capabilities.systems.desc": "信息架构、用户旅程与可复用结构的梳理和搭建。",
    "capabilities.tech.title": "设计技术",
    "capabilities.tech.desc": "设计知识、模块逻辑与可被 AI 读取的资产系统。",
    "capabilities.culture.title": "品牌与文化",
    "capabilities.culture.desc": "兼具氛围感、文化敏感度与数字体验的表达。",
    "work.eyebrow": "精选作品",
    "work.heading":
      "一个横跨 AI 原生产品、产品 UX、网站、品牌系统与文化项目的视觉索引。",
    "work.copy":
      "当前分类仍是草稿。项目卡片也保留独立实践、公司项目、工作室项目和归档项目等上下文。",
    "filters.focus": "方向草稿",
    "filters.time": "时间",
    "filters.all": "全部",
    "filters.showingAll": "正在展示全部精选作品",
    "filters.empty": "这个筛选下暂时没有公开项目，更多案例还在整理中。",
    "filters.showing": "正在展示",
    "filters.project": "个项目",
    "filters.projects": "个项目",
    "notes.eyebrow": "笔记",
    "notes.heading": "边做边想，一些阅读和笔记。",
    "notes.link": "之后查看笔记索引",
    "notes.item1": "设计知识正在成为新的设计资产",
    "notes.item2": "从组件库到 AI 可读的模块系统",
    "notes.item3": "为什么 AI 搜索应该从用户意图开始",
    "notesPage.eyebrow": "AI UX 研究笔记",
    "notesPage.title": "关于 Agent 系统、设计知识与自适应数字体验的持续笔记。",
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
    "about.heading": "往返于中国与荷兰之间的独立设计实践。",
    "about.copy":
      "Zen-Zhu Studio 是我的独立设计实践，关注 AI 产品、网站、品牌系统与文化项目。它始于荷兰，也延续为一种灵活的工作室实践，服务于需要直接沟通、策略判断与细致交付的项目。",
    "contact.eyebrow": "联系",
    "contact.heading": "期待 senior 设计岗位、AI 产品团队与精选合作机会。",
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
    "panel.role": "角色",
    "panel.complexity": "复杂度",
    "panel.output": "系统 / 产出",
    "panel.cta": "完整案例稍后开放",
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
      "我是 Ningli，一名关注未来交互与人文价值的 UX Designer / Media creator。",
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

const roleLabels = {
  en: [
    "UX Designer",
    "Product Builder",
    "Design Researcher",
    "Digital Creator",
    "Media-art Lover",
    "Cultural Explorer",
    "Yogi 🧘‍♀️",
  ],
  zh: [
    "UX 设计师",
    "产品构建者",
    "设计研究者",
    "数字创作者",
    "媒体艺术爱好者",
    "文化探索者",
    "瑜伽练习者 🧘‍♀️",
  ],
};

function t(key) {
  return translations[currentLanguage][key] || translations.en[key] || key;
}

const panelNodes = {
  visual: document.querySelector("[data-panel-visual]"),
  status: document.querySelector("[data-panel-status]"),
  title: document.querySelector("[data-panel-title]"),
  summary: document.querySelector("[data-panel-summary]"),
  role: document.querySelector("[data-panel-role]"),
  complexity: document.querySelector("[data-panel-complexity]"),
  output: document.querySelector("[data-panel-output]"),
};

function renderProjects() {
  if (!grid) return;

  const filtered = getFilteredProjects();
  grid.innerHTML = "";

  filtered.forEach((project) => {
    const card = document.createElement("article");
    card.className = `project-card ${project.size}`;
    card.dataset.projectId = project.id;
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Preview ${project.title}`);
    card.style.setProperty("--project-surface", project.surface);

    card.innerHTML = `
      <div class="project-visual ${project.imageTone}" aria-hidden="true">
        <div class="image-placeholder">
          <span>${project.title}</span>
        </div>
      </div>
      <div class="project-content">
        <p class="project-meta">${project.context}</p>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.description}</p>
        <div class="project-tags">
          <span>${project.year}</span>
          ${project.tags.slice(0, 2).map((tag) => `<span>${tag}</span>`).join("")}
        </div>
      </div>
    `;

    card.addEventListener("click", () => openPanel(project.id));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openPanel(project.id);
      }
    });

    grid.appendChild(card);
  });

  updateFilterSummary(filtered.length);
}

function renderFeaturedWork() {
  if (!featuredRail) return;

  const featuredProjects = projects.slice(0, 4);
  featuredRail.innerHTML = "";

  featuredProjects.forEach((project, index) => {
    const item = document.createElement("article");
    item.className = "featured-card";
    item.style.setProperty("--project-surface", project.surface);
    item.tabIndex = 0;
    item.setAttribute("role", "button");
    item.setAttribute("aria-label", `${t("panel.preview")} ${project.title}`);

    item.innerHTML = `
      <div class="featured-image ${project.imageTone}" aria-hidden="true">
        <div class="image-placeholder">
          <span>${project.title}</span>
        </div>
      </div>
      <div class="featured-info" aria-hidden="true">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      </div>
    `;

    item.addEventListener("click", () => openPanel(project.id));
    item.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openPanel(project.id);
      }
    });

    featuredRail.appendChild(item);
  });
}

function getLocalizedText(value) {
  if (typeof value === "string") return value;
  return value[currentLanguage] || value.en || value.zh || "";
}

function renderNotes() {
  if (!notesGrid) return;

  const featuredNotes = notesData
    .filter((note) => note.status === "featured")
    .sort((a, b) => a.priority - b.priority)
    .slice(0, 6);

  notesGrid.innerHTML = "";

  featuredNotes.forEach((note, index) => {
    const card = document.createElement("article");
    card.className = "note-card";

    card.innerHTML = `
      <div class="note-card-head">
        <span class="note-card-index">${String(index + 1).padStart(2, "0")}</span>
        <span class="note-card-theme">${note.theme}</span>
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
      behavior: "smooth",
    });
  };

  notesPrev.addEventListener("click", () => scrollByPage(-1));
  notesNext.addEventListener("click", () => scrollByPage(1));
  notesGrid.addEventListener("scroll", updateNotesRailControls, {
    passive: true,
  });
  window.addEventListener("resize", updateNotesRailControls);
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
    const matchesTime = state.time === "all" || project.time === state.time;
    return matchesFocus && matchesTime;
  });
}

function updateFilterSummary(count) {
  if (!summary) return;

  const focusLabel = getActiveLabel("focus");
  const timeLabel = getActiveLabel("time");

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
  if (!panel || !scrim) return;

  const project = projects.find((item) => item.id === projectId);
  if (!project) return;

  state.activeProjectId = projectId;
  document
    .querySelectorAll(".project-card")
    .forEach((card) =>
      card.classList.toggle("active", card.dataset.projectId === projectId),
    );

  panelNodes.visual.style.setProperty("--project-surface", project.surface);
  panelNodes.status.textContent = `${project.status} · ${project.year}`;
  panelNodes.title.textContent = project.title;
  panelNodes.summary.textContent = project.description;
  panelNodes.role.textContent = project.role;
  panelNodes.complexity.textContent = project.complexity;
  panelNodes.output.textContent = project.output;

  panel.classList.add("open");
  scrim.classList.add("open");
  panel.setAttribute("aria-hidden", "false");
}

function closePanel() {
  state.activeProjectId = null;
  panel?.classList.remove("open");
  scrim?.classList.remove("open");
  panel?.setAttribute("aria-hidden", "true");
  document
    .querySelectorAll(".project-card")
    .forEach((card) => card.classList.remove("active"));
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
  if (event.key === "Escape") {
    closePanel();
  }
});

function setTheme(theme) {
  document.body.dataset.theme = theme;
  if (themeLabel) {
    themeLabel.textContent =
      theme === "dark" ? t("theme.light") : t("theme.dark");
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

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language === "zh" ? "zh-Hans" : "en";
  document.body.dataset.language = language;
  if (languageLabel) {
    languageLabel.textContent = t("language.next");
  }
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  roleIndex = Math.min(roleIndex, roleLabels[currentLanguage].length - 1);
  if (roleRotator) {
    roleRotator.textContent = roleLabels[currentLanguage][roleIndex];
  }
  cvDownloadLinks.forEach((link) => {
    const file = cvFiles[currentLanguage];
    link.setAttribute("href", file.href);
    link.setAttribute("download", file.filename);
  });
  setTheme(document.body.dataset.theme || "light");
  updateFilterSummary(getFilteredProjects().length);
  renderFeaturedWork();
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
      "a, button, .project-card, .featured-card, input, .capability-card, .notes-grid article",
    );
    cursorAura.classList.toggle("active", Boolean(target));
  });

  document.addEventListener("pointerleave", () => {
    cursorAura.classList.remove("visible", "active");
  });
}

function initRoleRotator() {
  if (!roleRotator) return;

  window.setInterval(() => {
    const roles = roleLabels[currentLanguage];
    roleIndex = (roleIndex + 1) % roles.length;
    roleRotator.classList.add("is-changing");

    window.setTimeout(() => {
      roleRotator.textContent = roles[roleIndex];
      roleRotator.classList.remove("is-changing");
    }, 260);
  }, 2500);
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

  const openEmailDrawer = (event) => {
    event?.preventDefault();
    emailDrawer.classList.add("open");
    emailDrawer.setAttribute("aria-hidden", "false");
    document.body.classList.add("email-drawer-open");
    window.setTimeout(() => firstField?.focus(), 180);
  };

  const closeEmailDrawer = () => {
    emailDrawer.classList.remove("open");
    emailDrawer.setAttribute("aria-hidden", "true");
    document.body.classList.remove("email-drawer-open");
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
    if (event.key === "Escape" && emailDrawer.classList.contains("open")) {
      closeEmailDrawer();
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

window.addEventListener("scroll", () => {
  header?.classList.toggle("scrolled", window.scrollY > 12);
});

initTheme();
initLanguage();
initCursorAura();
initRoleRotator();
initExperienceReveal();
initEmailDrawer();
renderFeaturedWork();
renderProjects();
renderNotes();
renderNotesIndex();
initNotesRailControls();
