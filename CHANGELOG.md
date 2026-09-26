# Portfolio Update Log

## 2026-09-26 — Homepage subtraction and narrative restructuring

This iteration reduces homepage competition and strengthens the portfolio's senior product and experience design positioning. The existing bilingual, light/dark theme, and Warm Editorial Atlas direction are preserved.

### 1. Removed the update notice

- Removed the homepage notification bar and its dedicated styles.
- Eliminated the unfinished-site signal from the primary visitor journey.

### 2. Stabilized the hero positioning

- Replaced the rotating identity statement with a fixed senior positioning:
  - EN: `Senior Product & Experience Designer focused on AI-native products, complex systems and design infrastructure.`
  - ZH: `专注 AI 原生产品、复杂系统与设计基础设施的资深产品体验设计师。`
- Moved cross-border, brand, and cultural experience into supporting copy.
- Removed the role-rotation JavaScript and related styles.

### 3. Simplified the capability presentation

- Replaced four large capability cards with a compact four-part strip:
  - AI-native Products
  - Complex Systems
  - Design Infrastructure
  - Brand & Culture
- Added a compact 2 × 2 mobile layout.

### 4. Consolidated Featured Cases and Selected Work

- Removed the duplicated Featured Cases carousel.
- Kept the filterable Selected Work index as the single homepage work entry point.
- Removed the obsolete featured-work renderer and styles.
- Renamed `Focus draft / 方向草稿` to `Focus / 方向`.

### 5. Moved Industry Radar to Notes

- Removed Industry Radar from the homepage.
- Repositioned it after the Notes Index on the Notes page.
- Preserved the existing marquee interaction and bilingual content.
- Updated its background to use the theme-aware panel token in light and dark modes.

### 6. Moved Rolling Atlas to About / Lab

- Removed Rolling Atlas from the homepage.
- Added it to the About page between the off-clock section and CV/contact section.
- Reframed it as a `Lab / Experiment` entry with a concise explanation.

### 7. Shortened the homepage About preview

- Reduced the homepage biography to a focused cross-border design statement.
- Added a direct link to the full About page.
- Kept detailed professional and personal context out of the homepage flow.

### Documentation and verification

- Updated `DESIGN.md` to reflect the revised interaction hierarchy.
- Verified JavaScript syntax.
- Verified local HTML links and referenced assets.
- Verified unique HTML IDs.
- Verified English and Chinese translation-key parity.
- Verified removal of obsolete homepage elements and JavaScript references.
- Rendered Home, Notes, and About in desktop and mobile Chrome viewports.

### Resulting homepage hierarchy

```text
Hero
Capability strip
Selected Work
Selected Notes
Short About preview
Contact
```
