const careerAtlasData = {
  meta: {
    title: "Rolling Atlas",
    eyebrow: "Interactive preview",
    intro:
      "A dice-based clickable map of recurring interests, public-safe bookmarks, and the way attention shifts into design practice over time.",
    sourceNote:
      "Rebuilt from the Living Cognitive Atlas public bookmark sample: 180 public-safe links, with the full atlas meta layer used only as background signal.",
  },
  islands: [
    {
      id: "media-culture",
      label: "Media Culture",
      shortLabel: "Media",
      phase: "2017-2024",
      summary:
        "Visual culture, documentary thinking, creative autonomy, art references, and the archive as taste memory.",
      color: "#c96d5b",
      topicPosition: { x: 18, y: 57 },
      phasePosition: { x: 13, y: 42 },
    },
    {
      id: "information-mapping",
      label: "Information Mapping",
      shortLabel: "Mapping",
      phase: "2017-2021",
      summary:
        "Graph tools, information mapping, data storytelling, critical archives, and systems as a way to read culture.",
      color: "#737a59",
      topicPosition: { x: 34, y: 28 },
      phasePosition: { x: 31, y: 42 },
    },
    {
      id: "ai-native-ux",
      label: "AI-native UX",
      shortLabel: "AI UX",
      phase: "2018-2025",
      summary:
        "Human-AI coexistence, emotional computing, machine-learning tools, AI creation, and interaction trust.",
      color: "#8a74b4",
      topicPosition: { x: 68, y: 26 },
      phasePosition: { x: 64, y: 49 },
    },
    {
      id: "lots",
      label: "LoTs",
      shortLabel: "LoTs",
      phase: "2017-2020",
      summary:
        "Living and local-first tools: code, creative systems, prototypes, docs, APIs, and reusable technical experiments.",
      color: "#4f7891",
      topicPosition: { x: 49, y: 72 },
      phasePosition: { x: 50, y: 58 },
    },
    {
      id: "design-knowledge",
      label: "Design Knowledge",
      shortLabel: "Knowledge",
      phase: "2017-2024",
      summary:
        "Design systems, typography, interface resources, studio references, and design judgment as reusable knowledge.",
      color: "#b47a3f",
      topicPosition: { x: 82, y: 70 },
      phasePosition: { x: 83, y: 56 },
    },
  ],
  nodes: [
    {
      id: "voicer-life-art",
      islandId: "media-culture",
      title: "Life and art as daily reference",
      phase: "2017",
      sourceType: "Public bookmark · Visual Reference Platforms",
      topics: ["Visual culture", "Life archive", "Ambient intelligence"],
      roleSignal:
        "Early collection behavior is not only visual inspiration; it is a habit of reading culture through small, repeatable references.",
      note:
        "VOICER anchors a warm, life-and-art attention style: observational, curatorial, and close to lived detail.",
      links: [
        {
          label: "VOICER | We Voice Life & Art Inspiration",
          url: "http://www.voicer.me/",
        },
      ],
      topicPosition: { x: 11, y: 46 },
      phasePosition: { x: 9, y: 36 },
    },
    {
      id: "aiga-design-archives",
      islandId: "media-culture",
      title: "Design archives as taste memory",
      phase: "2017",
      sourceType: "Public bookmark · Product, UX & AI",
      topics: ["Design archive", "Warm documentary", "Reference memory"],
      roleSignal:
        "The archive turns visual taste into something retrievable: examples, standards, lineage, and judgment.",
      note:
        "This is one of the earliest public-safe signals for a long-running archive habit behind later design knowledge work.",
      links: [
        {
          label: "AIGA Design Archives",
          url: "http://designarchives.aiga.org/#/home",
        },
      ],
      topicPosition: { x: 21, y: 48 },
      phasePosition: { x: 14, y: 53 },
    },
    {
      id: "creative-independent",
      islandId: "media-culture",
      title: "Creative autonomy as a worldview",
      phase: "2018",
      sourceType: "Public bookmark · Reading & Humanities",
      topics: ["Creative autonomy", "Editorial", "Practice voice"],
      roleSignal:
        "A repeated interest in independent creators suggests a preference for practice-led knowledge, not only polished outputs.",
      note:
        "This theme softens the portfolio's technical direction with a visible human and creative layer.",
      links: [
        {
          label: "The Creative Independent",
          url: "https://thecreativeindependent.com/",
        },
      ],
      topicPosition: { x: 14, y: 67 },
      phasePosition: { x: 20, y: 42 },
    },
    {
      id: "hybrid-documentary",
      islandId: "media-culture",
      title: "Hybrid documentary thinking",
      phase: "2018",
      sourceType: "Public bookmark · Reading & Humanities",
      topics: ["Documentary", "Hybrid reality", "Cultural research"],
      roleSignal:
        "The attention pattern values evidence, constructed reality, and narrative framing: useful later for AI trust and explanation.",
      note:
        "This is a bridge between media culture and product thinking: how truth is assembled, framed, and made legible.",
      links: [
        {
          label: "Hybrid Reality | International Documentary Association",
          url: "https://www.documentary.org/magazine/hybrid-reality-when-documentary-and-fiction-breed-create-better-truth%20",
        },
      ],
      topicPosition: { x: 25, y: 72 },
      phasePosition: { x: 22, y: 61 },
    },
    {
      id: "studio-airport",
      islandId: "media-culture",
      title: "Independent studio references return",
      phase: "2024",
      sourceType: "Public bookmark · Portfolios & Artists",
      topics: ["Studio reference", "Creative autonomy", "Portfolio memory"],
      roleSignal:
        "Later references still return to independent studios, showing that visual taste remains active even as the work becomes more systemic.",
      note:
        "This keeps the atlas from reading as purely technical: studio taste is still part of the public signal.",
      links: [
        {
          label: "Studio Airport",
          url: "https://www.studioairport.nl/",
        },
      ],
      topicPosition: { x: 28, y: 58 },
      phasePosition: { x: 24, y: 34 },
    },
    {
      id: "gephi-graph-tool",
      islandId: "information-mapping",
      title: "Graph tools for thinking spatially",
      phase: "2017",
      sourceType: "Public bookmark · Creative Coding & Graphics",
      topics: ["Graph thinking", "Mapping tool", "Soft tech"],
      roleSignal:
        "Gephi marks a shift from collecting visual references to arranging relationships, clusters, and structure.",
      note:
        "It is an important anchor because the current atlas itself inherits this spatial, relational way of thinking.",
      links: [
        {
          label: "Gephi",
          url: "http://gephi.org/",
        },
      ],
      topicPosition: { x: 28, y: 19 },
      phasePosition: { x: 28, y: 31 },
    },
    {
      id: "parsons-information-mapping",
      islandId: "information-mapping",
      title: "Information mapping as a language",
      phase: "2017",
      sourceType: "Public bookmark · Reading & Humanities",
      topics: ["Information mapping", "Editorial systems", "Reference"],
      roleSignal:
        "The saved link points to mapping as a design and research language, not only a data visualization technique.",
      note:
        "This is the conceptual center for turning messy personal traces into legible categories and facets.",
      links: [
        {
          label: "Parsons Journal for Information Mapping",
          url: "http://pjim.newschool.edu/issues/index.php",
        },
      ],
      topicPosition: { x: 40, y: 19 },
      phasePosition: { x: 33, y: 35 },
    },
    {
      id: "visual-storytelling-data",
      islandId: "information-mapping",
      title: "Visual storytelling under data overload",
      phase: "2017",
      sourceType: "Public bookmark · Product, UX & AI",
      topics: ["Data overload", "Visual storytelling", "Legibility"],
      roleSignal:
        "The archive already asks how complexity becomes readable, which later becomes central to product UX and AI evidence design.",
      note:
        "This node explains why the atlas should show not only links, but how links form attention patterns.",
      links: [
        {
          label: "The Atlantic: Visual Storytelling",
          url: "https://www.theatlantic.com/entertainment/archive/2011/10/visual-storytelling-new-language-for-the-age-of-data-overload/247318/",
        },
      ],
      topicPosition: { x: 29, y: 36 },
      phasePosition: { x: 36, y: 48 },
    },
    {
      id: "critical-making",
      islandId: "information-mapping",
      title: "Critical making and soft infrastructure",
      phase: "2018",
      sourceType: "Public bookmark · Utilities & Misc",
      topics: ["Critical making", "Calm technology", "Archive"],
      roleSignal:
        "The focus moves from information as content toward information as situated practice and infrastructure.",
      note:
        "This is a useful transition from media research into system-aware design thinking.",
      links: [
        {
          label: "Critical Making",
          url: "http://www.criticalmaking.nl/",
        },
      ],
      topicPosition: { x: 22, y: 32 },
      phasePosition: { x: 39, y: 40 },
    },
    {
      id: "future-art-ecosystems",
      islandId: "information-mapping",
      title: "Future ecosystems over single artifacts",
      phase: "2021",
      sourceType: "Public bookmark · Utilities & Misc",
      topics: ["Future systems", "Creative economy", "Systemic thinking"],
      roleSignal:
        "The attention pattern starts to favor ecosystems, roles, and long-term infrastructures over isolated works.",
      note:
        "This prepares the later move toward design systems, knowledge systems, and AI-readable structures.",
      links: [
        {
          label: "Future Art Ecosystems",
          url: "https://futureartecosystems.org/",
        },
      ],
      topicPosition: { x: 42, y: 40 },
      phasePosition: { x: 44, y: 61 },
    },
    {
      id: "emopy",
      islandId: "ai-native-ux",
      title: "Emotion AI as early technical curiosity",
      phase: "2018",
      sourceType: "Public bookmark · Build Tools & Development",
      topics: ["Emotional computing", "Machine learning", "Human-AI"],
      roleSignal:
        "The AI interest begins as embodied and emotional interaction, not as generic automation.",
      note:
        "This gives the current AI-native UX direction a longer root in affective computing and human signals.",
      links: [
        {
          label: "thoughtworksarts / EmoPy",
          url: "https://github.com/thoughtworksarts/EmoPy",
        },
      ],
      topicPosition: { x: 59, y: 18 },
      phasePosition: { x: 58, y: 41 },
    },
    {
      id: "emotion-camera-jsfiddle",
      islandId: "ai-native-ux",
      title: "Camera emotion demo as interaction probe",
      phase: "2019",
      sourceType: "Public bookmark · Product, UX & AI",
      topics: ["Prototype", "Emotion recognition", "Interface probe"],
      roleSignal:
        "Saved demos show an interest in what AI feels like in use: visible input, immediate feedback, and human interpretation.",
      note:
        "This is close to today's agentic UX question: how much system behavior should be visible to users?",
      links: [
        {
          label: "Emotion from Camera Sample App",
          url: "https://jsfiddle.net/affectiva/opyh5e8d/?utm_source=website&utm_medium=embed&utm_campaign=opyh5e8d",
        },
      ],
      topicPosition: { x: 76, y: 18 },
      phasePosition: { x: 63, y: 46 },
    },
    {
      id: "single-photo-3d-face",
      islandId: "ai-native-ux",
      title: "AI tools as embodied product signals",
      phase: "2018",
      sourceType: "Public bookmark · Product, UX & AI",
      topics: ["AI tool", "3D face model", "Human-AI coexistence"],
      roleSignal:
        "The bookmark captures a pattern of watching AI tools through human representation, identity, and product affordance.",
      note:
        "It is less about the specific tool and more about a recurring question: what does AI make possible for ordinary users?",
      links: [
        {
          label: "The Verge: 3D model from a single photo",
          url: "https://www.theverge.com/2017/9/18/16327906/3d-model-face-photograph-ai-machine-learning",
        },
      ],
      topicPosition: { x: 66, y: 39 },
      phasePosition: { x: 66, y: 44 },
    },
    {
      id: "machine-learning-artists",
      islandId: "ai-native-ux",
      title: "Machine learning for creative practice",
      phase: "2019",
      sourceType: "Public bookmark · Portfolios & Artists",
      topics: ["ML literacy", "Creative tools", "AI learning"],
      roleSignal:
        "AI appears as a creative medium to learn, not only a product feature to consume.",
      note:
        "This bridges AI-native UX with media culture and tool-based experimentation.",
      links: [
        {
          label: "Machine Learning for Artists",
          url: "https://ml4a.github.io/ml4a/",
        },
      ],
      topicPosition: { x: 80, y: 33 },
      phasePosition: { x: 71, y: 47 },
    },
    {
      id: "dreamstudio",
      islandId: "ai-native-ux",
      title: "AI creation enters the portfolio field",
      phase: "2023",
      sourceType: "Public bookmark · Portfolios & Artists",
      topics: ["Generative AI", "Creative autonomy", "Poetic tools"],
      roleSignal:
        "By 2023, AI is no longer a distant technical reference; it becomes part of the creative tool landscape.",
      note:
        "This helps explain the later shift toward AI-native product design and AI-assisted design knowledge.",
      links: [
        {
          label: "DreamStudio",
          url: "https://dreamstudio.com/about/",
        },
      ],
      topicPosition: { x: 70, y: 48 },
      phasePosition: { x: 75, y: 52 },
    },
    {
      id: "quartz-composer",
      islandId: "lots",
      title: "Visual programming as a tool habit",
      phase: "2018",
      sourceType: "Public bookmark · Design Resources",
      topics: ["Visual programming", "Docs", "Prototype logic"],
      roleSignal:
        "The archive shows an appetite for tools that combine visual thinking with executable behavior.",
      note:
        "LoTs is the practical layer: tools are saved because they can become experiments, methods, or components.",
      links: [
        {
          label: "Quartz Composer Basic Concepts",
          url: "https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/QuartzComposerUserGuide/qc_concepts/qc_concepts.html#//apple_ref/doc/uid/TP40005381-CH212-SW9",
        },
      ],
      topicPosition: { x: 43, y: 61 },
      phasePosition: { x: 47, y: 49 },
    },
    {
      id: "pagenetwork-pagebot",
      islandId: "lots",
      title: "Scripted layout as reusable logic",
      phase: "2018",
      sourceType: "Public bookmark · Design Resources",
      topics: ["PageBot", "Scripted layout", "Collective intelligence"],
      roleSignal:
        "A design resource becomes interesting when it carries rules and can generate layout behavior.",
      note:
        "This is an early technical echo of today's AI-readable design assets: structure, rules, and generation.",
      links: [
        {
          label: "TypeNetwork / PageBot",
          url: "https://github.com/TypeNetwork/PageBot",
        },
      ],
      topicPosition: { x: 57, y: 61 },
      phasePosition: { x: 52, y: 52 },
    },
    {
      id: "affectiva-javascript-docs",
      islandId: "lots",
      title: "API docs as product material",
      phase: "2019",
      sourceType: "Public bookmark · Build Tools & Development",
      topics: ["JavaScript", "API docs", "Emotional computing"],
      roleSignal:
        "The bookmark points to a maker's reading mode: docs are saved as building blocks, not just references.",
      note:
        "This tool-facing curiosity supports your later hybrid role between UX, prototyping, and AI product thinking.",
      links: [
        {
          label: "Affectiva JavaScript docs",
          url: "https://knowledge.affectiva.com/docs/getting-started-with-the-emotion-sdk-for-javascript",
        },
      ],
      topicPosition: { x: 41, y: 82 },
      phasePosition: { x: 55, y: 56 },
    },
    {
      id: "daily-drawbot",
      islandId: "lots",
      title: "Daily code sketching as archive",
      phase: "2017",
      sourceType: "Public bookmark · Product, UX & AI",
      topics: ["DrawBot", "Creative coding", "Archive"],
      roleSignal:
        "The collection includes tool-driven visual practice: daily making, procedural output, and experimental form.",
      note:
        "This gives LoTs a more personal shape: not tool collecting for efficiency, but tool collecting for expressive systems.",
      links: [
        {
          label: "Daily DrawBot Archive",
          url: "http://dailydrawbot.tumblr.com/archive",
        },
      ],
      topicPosition: { x: 52, y: 86 },
      phasePosition: { x: 44, y: 54 },
    },
    {
      id: "reunion-network-docs",
      islandId: "lots",
      title: "Local documents as collective systems",
      phase: "2020",
      sourceType: "Public bookmark · Build Tools & Development",
      topics: ["Docs", "P2P care", "Collective intelligence"],
      roleSignal:
        "Tooling is not only software; documents, shared protocols, and local systems also become design materials.",
      note:
        "This broadens LoTs toward living systems: things that can be maintained, revised, and used with others.",
      links: [
        {
          label: "ReUnion Network Document",
          url: "https://docs.reunionnetwork.org/",
        },
      ],
      topicPosition: { x: 59, y: 78 },
      phasePosition: { x: 58, y: 62 },
    },
    {
      id: "ux-collective-design-systems",
      islandId: "design-knowledge",
      title: "Design systems as learnable infrastructure",
      phase: "2021",
      sourceType: "Public bookmark · Design Resources",
      topics: ["Design systems", "Systemic thinking", "Reusable knowledge"],
      roleSignal:
        "The focus sharpens from references into reusable design logic, components, and shared standards.",
      note:
        "This is the most direct public bookmark bridge into your current design knowledge positioning.",
      links: [
        {
          label: "10 great design systems | UX Collective",
          url: "https://uxdesign.cc/10-great-design-systems-and-how-to-learn-and-steal-from-them-4b9c6f168fa6",
        },
      ],
      topicPosition: { x: 75, y: 59 },
      phasePosition: { x: 79, y: 52 },
    },
    {
      id: "kern-type",
      islandId: "design-knowledge",
      title: "Typography as interactive judgment",
      phase: "2017",
      sourceType: "Public bookmark · Design Resources",
      topics: ["Typography", "Interaction", "Visual judgment"],
      roleSignal:
        "Type references are not only aesthetic; they train spacing, precision, and interface sensitivity.",
      note:
        "This early craft layer remains relevant because design knowledge still depends on judgment and calibration.",
      links: [
        {
          label: "Kern Type",
          url: "http://type.method.ac/?again",
        },
      ],
      topicPosition: { x: 88, y: 59 },
      phasePosition: { x: 74, y: 48 },
    },
    {
      id: "typechina-reading",
      islandId: "design-knowledge",
      title: "Readable type as design knowledge",
      phase: "2017",
      sourceType: "Public bookmark · Design Resources",
      topics: ["Chinese typography", "Readability", "Design craft"],
      roleSignal:
        "The bookmark shows attention to practical typographic decision-making, not just style references.",
      note:
        "This is a grounded signal for the portfolio's current concern with quality gates and design judgment.",
      links: [
        {
          label: "TypeChina",
          url: "http://www.typechina.com/detail.jsp?nid=1282",
        },
      ],
      topicPosition: { x: 74, y: 82 },
      phasePosition: { x: 80, y: 47 },
    },
    {
      id: "behance-portfolio-network",
      islandId: "design-knowledge",
      title: "Portfolio networks as reference systems",
      phase: "2017",
      sourceType: "Public bookmark · Portfolios & Artists",
      topics: ["Portfolio network", "Community", "Creative autonomy"],
      roleSignal:
        "Studio and portfolio references form a personal benchmark system: what good work looks like, how it is presented, and how taste evolves.",
      note:
        "This sits between media culture and design knowledge, but belongs here because it trains evaluation.",
      links: [
        {
          label: "Online Portfolios on Behance",
          url: "http://www.behance.net/",
        },
      ],
      topicPosition: { x: 90, y: 75 },
      phasePosition: { x: 86, y: 47 },
    },
    {
      id: "kan-tai-keung",
      islandId: "design-knowledge",
      title: "Design legacy as judgment layer",
      phase: "2017",
      sourceType: "Public bookmark · Design Resources",
      topics: ["Design legacy", "Brand identity", "Archive"],
      roleSignal:
        "The archive includes design lineage and cultural legacy, suggesting that judgment is learned historically, not generated instantly.",
      note:
        "This supports a more mature reading of design knowledge: standards, precedent, and critique.",
      links: [
        {
          label: "Hong Kong Design Legacy and Beyond",
          url: "http://www.kandesign70.com/",
        },
      ],
      topicPosition: { x: 80, y: 89 },
      phasePosition: { x: 91, y: 52 },
    },
  ],
};
