# Homepage Wireframe v1 — Ningli Zhu Portfolio

## 1. Purpose

This wireframe defines the first complete homepage structure for Ningli Zhu's personal / studio website.

The homepage should introduce the positioning, then quickly move into a curated work grid. The grid is the center of the experience and should support filtering by both project category and time.

Primary goal:

> Help visitors browse Ningli's work through a lightweight, visual, structured system.

Secondary goal:

> Make the AI-native / design technologist direction visible without losing the cultural, aesthetic and studio-practice layers.

## 2. Page Structure

Recommended homepage order:

```text
01 Header
02 Hero
03 Capability Board
04 Work Intro
05 Work Filter Bar
06 Selected Work Grid
07 Side Panel Project Preview
08 Notes Preview
09 About / Studio Preview
10 Contact
```

The page should feel like an editorial index: quiet, structured, and visual.

## 3. Header

### Desktop

```text
Ningli Zhu                         Work   Notes   About   Contact
Senior UX / AI-native Design / Design Technologist
```

Behavior:

- Sticky.
- Minimal height.
- Slight border appears after scroll.
- Keep navigation calm and utilitarian.

### Mobile

```text
Ningli Zhu                    Menu
```

Mobile menu:

- Fullscreen or bottom-sheet style.
- Links: Work, Notes, About, Contact.

## 4. Hero

### Layout

Text-led hero with strong typographic hierarchy.

Desktop wireframe:

```text
┌──────────────────────────────────────────────────────────────┐
│ Senior UX / AI-native designer and design technologist        │
│ working across complex systems, design knowledge and          │
│ aesthetic product experiences.                               │
│                                                              │
│ I turn complex problems into structured, shippable, reusable  │
│ systems — connecting UX, design knowledge, emerging           │
│ technology, brand, and culture.                              │
│                                                              │
│ [View work] [Read notes] [Contact]                            │
│                                                              │
│ Based between China and the Netherlands                       │
│ AI UX / Systems / Web / Culture                               │
└──────────────────────────────────────────────────────────────┘
```

### Hero Rules

- No large portrait required in v0.1.
- No decorative AI hero animation.
- Let typography, spacing and project grid carry the identity.
- Optional subtle background texture or fine grid can appear, but should be barely visible.

## 5. Capability Board

### Layout

Four compact cards in one row on desktop:

```text
┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ AI-native UX │ │ Complex      │ │ Design       │ │ Brand &      │
│              │ │ Systems      │ │ Technology   │ │ Culture      │
└──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘
```

### Card Content

1. `AI-native UX`
   - Workflows, intent understanding, agent-like interactions.
2. `Complex Systems`
   - Information architecture, journeys, reusable structures.
3. `Design Technology`
   - Design knowledge, module systems, AI-readable assets.
4. `Brand & Culture`
   - Digital experiences with atmosphere and cultural sensitivity.

### Interaction

- Hover: light border / background shift.
- Click later: filter work grid by related category.
- In v0.1, interaction can be visual only.

## 6. Work Intro

### Section Title

```text
Selected work
```

### Section Copy

```text
Projects across AI-native products, design knowledge systems, websites, brand platforms and cultural experiences.
```

### Section Behavior

This should sit directly above the filter bar and grid. Keep it concise. The work itself should speak.

## 7. Work Filter Bar

The work grid should support two lightweight filter dimensions:

1. Project category.
2. Time period.

This is a good instinct: it gives visitors an easy way to understand both current direction and career evolution.

Important update:

- The category filter should be treated as a provisional `Focus` filter, not a final taxonomy.
- Ningli's projects cross independent practice, company work, product UIUX, web, technology art, new media and cultural contexts, so rigid categories will be inaccurate too early.
- In v0.1, show broad focus filters and use card-level context labels to preserve nuance.

### Desktop Layout

```text
┌──────────────────────────────────────────────────────────────┐
│ Focus draft                                                  │
│ [All] [AI UX] [Systems] [Web] [Brand] [Culture] [Archive]    │
│                                                              │
│ Time                                                         │
│ [All years] [2026] [2025] [2024] [2021-2023] [Before 2021]   │
└──────────────────────────────────────────────────────────────┘
```

Alternative compact desktop layout:

```text
Focus draft: [All] [AI & Systems] [Product UX] [Web & Brand] [Culture & New Media]
Time:  [All] [2026] [2025] [2024] [2021-23] [Archive]
```

### Mobile Layout

Use horizontal scroll pills:

```text
Focus
[All] [AI UX] [Systems] [Web] [Brand] [Culture] →

Time
[All] [2026] [2025] [2024] [2021-23] [Archive] →
```

### Filter Logic

Default:

```text
Focus = All
Time = All
```

When one category is selected:

```text
Show projects matching selected focus.
```

When one time period is selected:

```text
Show projects matching selected time.
```

When both are selected:

```text
Show projects matching both focus and time.
```

### Recommended Category Filters

Use broad provisional filters:

- `All`
- `AI & Systems`
- `Product UX`
- `Web & Brand`
- `Culture & New Media`

Optional later:

- `Studio`
- `Archive`
- `Independent`
- `Company`

Do not include too many filters in v0.1. The taxonomy should be useful, not bureaucratic. Use project cards to show context labels such as `Independent`, `Company`, `Studio`, `Archive`, `Cultural Event`, or `Internal Platform`.

### Recommended Time Filters

Use:

- `All`
- `2026`
- `2025`
- `2024`
- `2021-2023`
- `Before 2021`

Reason:

- `2026` highlights current AI-native work.
- `2025` can hold Huawei / transition period if shown.
- `2024` can hold ECA, recent website and brand work.
- `2021-2023` covers Netherlands / NextportChina cross-border practice.
- `Before 2021` becomes archive and art/media foundation.

### Filter State Copy

When filtered:

```text
Showing AI UX projects from 2026
```

When empty:

```text
No public projects in this filter yet. More cases are being structured.
```

## 8. Selected Work Grid

### Desktop Grid

Use mixed-size grid:

```text
┌──────────────────────┐ ┌──────────────────────┐
│ Large card            │ │ Large card            │
│ YIOne                 │ │ Momcozy AI Knowledge  │
└──────────────────────┘ └──────────────────────┘

┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ Medium       │ │ Medium       │ │ Small        │
│ Momcozy Web  │ │ CXD AI       │ │ Factualist   │
└──────────────┘ └──────────────┘ └──────────────┘

┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ Small        │ │ Small        │ │ Small        │
│ Jing Qiong Er│ │ Cynergy      │ │ ECA          │
└──────────────┘ └──────────────┘ └──────────────┘
```

### Card States

#### Default

Visible:

- Preview image.
- Project title.
- Year.
- 2-3 tags.
- Status label.

Example:

```text
YIOne / 亿万 APP
2026
AI Product / Digital Twin / Design System
Case Preview
```

#### Hover

Reveal:

- One-line project meaning.
- Role.
- CTA.

Example:

```text
0-1 AI product framework for turning founder intent, memory and network resources into an executable digital twin system.

CDO / Product Design / Brand System

Preview case →
```

#### Active / Clicked

- Card receives active border or subtle elevation.
- Side panel opens.
- Grid remains visible behind or beside panel.

## 9. Project Card Metadata

Recommended metadata model:

| Project | Time | Category | Status |
| --- | --- | --- | --- |
| YIOne / 亿万 APP | 2026 | AI UX, Systems | Case Preview |
| Momcozy AI Component & Module Knowledge System | 2026 | AI UX, Systems | Case Preview |
| Momcozy Website Redesign & Upgrade | 2026 | AI UX, Web, Brand | Case Preview |
| CXD AI Product Marketing Design Platform | 2026 | AI UX, Systems | Anonymized |
| Factualist | 2025 | Brand, Web, Culture | Full Case |
| Jing Qiong Er | 2024 | Web, Culture | Visual Case |
| Cynergy | 2024 | Web, Brand, Culture | Visual Case |
| ECA International Cultural Creative Award | 2024 | Brand, Culture | Medium Case |
| Studio AIWEN | 2021-2023 | Web, Culture | Archive |
| Future of the Past | Before 2021 | Culture, Archive | Archive |

This metadata should eventually become the content source for filtering.

## 10. Side Panel Project Preview

### Desktop Behavior

Clicking a card opens a right-side panel:

```text
┌──────────────────────────────┬──────────────────────────┐
│ Work grid                    │ Side panel preview       │
│                              │                          │
│ [cards remain visible]       │ [Project title]          │
│                              │ [Hero image]             │
│                              │ [Summary]                │
│                              │ [Role]                   │
│                              │ [Complexity]             │
│                              │ [System / outputs]       │
│                              │ [CTA]                    │
└──────────────────────────────┴──────────────────────────┘
```

Panel width:

- Desktop: 36-42vw.
- Large desktop: max 560px.

Panel content:

```text
Status label
Project title
Year / category tags
Hero image
One-sentence summary
Role
What made it complex
System / method
Selected outputs
CTA
Close
```

### Mobile Behavior

Use bottom sheet instead of side panel:

```text
Card tap → bottom sheet preview → full case / close
```

Bottom sheet height:

- Starts at 70vh.
- Can expand to full screen.

## 11. Notes Preview

### Layout

After the work grid:

```text
Notes
Short observations on AI-native design, design systems, creative technology and cultural interfaces.

[Design knowledge is the new design asset]
[From component library to AI-readable module system]
[Why AI search should start with user intent]
```

### Interaction

- Notes appear as compact text cards.
- No heavy imagery.
- Hover can reveal a short summary.

Purpose:

- Shows that the site has an active thinking layer.
- Gives visitors a reason to return.
- Supports the design technologist positioning without making the navigation too academic.

## 12. About / Studio Preview

### Layout

```text
Independent practice between China and the Netherlands

Zen-Zhu Studio is my independent design practice for AI products, websites, brand systems and cultural projects. It began in the Netherlands and continues as a flexible studio practice for projects that need direct communication, strategic judgment and careful execution.

[More about me]
```

### Rule

Keep this section short. The homepage should not become a biography.

## 13. Contact

### Layout

```text
Open to senior design roles, AI product teams and selected collaborations.

[Email]
[LinkedIn]
[View CV]
```

### Contact Paths

Separate intention:

- Hiring.
- Project collaboration.
- Research / peer exchange.

## 14. Mobile Homepage Order

Recommended mobile order:

```text
Header
Hero
CTA row
Capability board as horizontal cards
Work intro
Focus filter pills
Time filter pills
Work grid, 1-column or 2-column
Bottom sheet project preview
Notes
About preview
Contact
```

Mobile rule:

- Prioritize readability.
- Avoid dense metadata.
- Show fewer tags by default.
- Use tap to reveal more.

## 15. Wireframe Summary

The homepage should feel like:

```text
A calm, editorial product/design index with intelligent filtering and lightweight project previews.
```

Key decisions:

- Use `Notes`, not `Research`.
- Use a visual work grid as the homepage center.
- Add category and time filters above the grid.
- Use side panel previews for desktop.
- Use bottom sheet previews for mobile.
- Keep `Studio` inside About / Home instead of top navigation.

## 16. Next Step

Recommended next action:

```text
Create Visual Layout Mockup v1.
```

This can be done in two possible ways:

1. Static HTML prototype in the repo.
2. Figma-style visual spec / design board.

Recommendation:

Start with a static HTML prototype. It will let us test layout, hover states, filters and side panel interaction quickly before polishing visuals.
