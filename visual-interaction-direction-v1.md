# Visual & Interaction Direction v1 — Ningli Zhu Portfolio

## 1. Design Goal

The website should feel like a precise, editorial, AI-native portfolio system rather than a decorative personal portfolio.

It should communicate:

- Senior design judgment.
- Complex system thinking.
- Aesthetic clarity.
- Design technology curiosity.
- Cultural and artistic sensitivity.
- Independent studio-level ownership.

The experience should be quiet but intelligent. It should not look like a template portfolio, a startup landing page, or a Behance-style visual dump.

## 2. Core Visual Direction

### Recommended Direction

```text
Editorial system + soft technology + cultural warmth
```

This means:

- Structured like an index, archive, or visual database.
- Designed with strong typography and grid logic.
- Calm, light, and precise.
- Soft enough to carry cultural and artistic projects.
- Technical enough to support AI-native and design systems work.

### Visual Keywords

- Editorial
- Systematic
- Quiet technology
- Warm minimalism
- Visual database
- Precise typography
- Modular grid
- Soft interaction
- Cultural intelligence
- Future-facing but human

### Avoid

- Generic AI gradient glow.
- Dribbble-style decoration.
- Too much 3D glassmorphism.
- Heavy dark-mode cyber aesthetics.
- Overly playful portfolio animation.
- Agency-style marketing slogans.
- Purely academic research website mood.

## 3. Brand Atmosphere

The site should sit between these worlds:

```text
AI product team
Design research studio
Independent cultural practice
High-end editorial archive
```

It should not choose only one. The tension between technology and culture is part of the identity.

Suggested emotional tone:

- Clear, not cold.
- Refined, not precious.
- Intelligent, not over-explained.
- Experimental, not chaotic.
- Personal, not informal.

## 4. Color Direction

### Base Palette

Use a restrained neutral base:

- Warm off-white.
- Soft grey.
- Near-black.
- Muted charcoal.

Reason:

- Lets project visuals carry color.
- Feels editorial and mature.
- Works across AI/product and cultural projects.

### Accent Palette

Use 1-2 subtle accents only:

- Soft lavender / blue-violet for AI and system moments.
- Warm clay / muted red-brown for cultural and human moments.

Potential usage:

- Tiny labels.
- Active states.
- Section markers.
- Hover highlights.
- Thin dividers.

Avoid using gradients as the main identity. Gradients can appear as restrained details, not as the whole style.

## 5. Typography Direction

The typography should carry most of the identity.

Recommended typography feel:

- Clean sans serif for interface clarity.
- Slight editorial contrast through scale and spacing.
- Optional mono font for metadata, tags, project numbers, or system labels.

Suggested hierarchy:

- Large, calm hero headline.
- Medium editorial section titles.
- Small metadata labels.
- Compact project descriptions.

Tone:

- No giant motivational headline.
- No overly tiny inaccessible text.
- No decorative display font unless very controlled.

## 6. Layout System

### Overall Layout

Use a responsive editorial grid:

- Desktop: 12-column grid.
- Tablet: 6-column grid.
- Mobile: single-column or 2-column project grid depending on image clarity.

Content width:

- Do not center everything into a narrow column.
- Let the site breathe horizontally.
- Use large empty space intentionally.

### Page Rhythm

Recommended homepage rhythm:

1. Quiet hero.
2. Compact capability board.
3. Large work grid.
4. Notes preview.
5. About / studio preview.
6. Contact.

The work grid should be the visual center of the homepage.

## 7. Homepage Layout

### Header

Minimal header:

```text
Ningli Zhu
Work / Notes / About / Contact
```

Optional secondary label:

```text
Senior UX / AI-native Design / Design Technologist
```

Header behavior:

- Sticky but subtle.
- Transparent or off-white background.
- Thin bottom border only after scroll.

### Hero

Hero should be text-led, not image-led.

Recommended structure:

```text
Senior UX / AI-native designer and design technologist working across complex systems, design knowledge and aesthetic product experiences.

I turn complex problems into structured, shippable, reusable systems — connecting UX, design knowledge, emerging technology, brand, and culture.
```

Optional metadata row:

```text
Based between China and the Netherlands
AI UX / Design Systems / Brand & Web / Culture
Open to senior roles and selected collaborations
```

### Capability Board

Four compact cards:

1. AI-native UX
2. Complex Systems
3. Design Technology
4. Brand & Culture

Interaction:

- Cards can lightly highlight on hover.
- No heavy animation.
- Each card can link to filtered work later.

## 8. Work Grid

The work grid should feel like a curated visual index.

### Grid Behavior

Default:

- Image-dominant cards.
- Clean spacing.
- Titles and metadata visible but restrained.

Hover:

- Slight image scale or opacity shift.
- Overlay or side metadata appears.
- Tags become visible.
- Cursor suggests click.

Click:

- Opens a lightweight project preview first.
- User can then choose `View full case`.

This creates a lower-friction browsing experience than forcing every click into a long page.

### Suggested Desktop Grid

Use mixed card sizes:

- 2 large hero cards.
- 2 medium cards.
- 4 smaller supporting cards.

Example order:

```text
[Large] YIOne
[Large] Momcozy AI Knowledge System
[Medium] Momcozy Website Redesign
[Medium] CXD AI Design Platform
[Small] Factualist
[Small] Jing Qiong Er
[Small] Cynergy
[Small] ECA
```

This prevents the grid from feeling monotonous while still staying systematic.

### Card Template

Each card should include:

```text
Project title
Short one-line description
Role
Year
Tags
Status
```

Example:

```text
Momcozy AI Component & Module Knowledge System
AI-ready PDP asset and module assembly system.
Design Knowledge / Module System / AI Workflow
2026
AI-native Design System / PDP Modules / Design Infrastructure
Case Preview
```

### Card Status Labels

Use clear status labels:

- `Case Study`
- `Case Preview`
- `Anonymized`
- `Visual Case`
- `Archive`

These labels solve a real problem: not every project can or should be shown at the same depth.

## 9. Project Preview Interaction

Recommended first version:

### Option A — Side Panel Preview

Clicking a card opens a right-side panel.

Panel contains:

- Project title.
- One strong image.
- Context.
- Role.
- What made it complex.
- System / method summary.
- CTA: `Open full case`.

Pros:

- Feels modern and lightweight.
- Keeps user inside the grid.
- Good for quick browsing.
- Works well when not all cases are fully written.

Cons:

- Needs careful mobile adaptation.

### Option B — Modal Preview

Clicking opens a centered modal.

Pros:

- Easier to implement.
- Good for image previews.

Cons:

- Can feel less premium if not handled carefully.
- Less suitable for long text.

### Option C — Direct Case Page

Clicking opens a full page immediately.

Pros:

- Best for SEO and deep case studies.
- Clear structure.

Cons:

- Higher friction.
- Requires every case to be more complete.

### Recommendation

Use:

```text
Grid card → Side panel preview → Full case page
```

This is the best fit for a portfolio that mixes complete cases, partial AI projects, anonymized work, and visual archives.

## 10. Filtering and Browsing

First version filters:

- All
- AI UX
- Systems
- Web
- Brand
- Culture

Optional later filters:

- Public
- Anonymized
- Studio
- Archive

Do not overbuild filtering in v0.1. A simple tag row is enough.

## 11. Motion Direction

Motion should be functional and quiet.

Use motion for:

- Hover emphasis.
- Side panel entrance.
- Tag filter transitions.
- Smooth scroll.
- Revealing metadata.

Avoid motion for:

- Decorative bouncing.
- Excessive page transitions.
- Heavy parallax.
- Continuous animated backgrounds.
- Generic AI particle effects.

Motion language:

- Fast but soft.
- Slight delay.
- Low distance.
- High precision.

Reference feeling:

```text
Raycast / Linear / Vercel dashboard transitions,
but warmer and more editorial.
```

## 12. Notes Page Direction

The `Notes` page should not feel like a blog feed at first.

Recommended structure:

```text
Notes
Short observations on AI-native design, design systems, creative technology and cultural interfaces.
```

Group notes by theme:

- AI-native Design
- Design Knowledge
- Tools & Workflow
- Culture & Technology
- Project Reflections

First posts can be short. They do not need to be polished essays.

## 13. About Page Direction

The About page should tell the career evolution clearly:

```text
Visual communication
→ information design in the Netherlands
→ UX and digital products
→ cross-border web and marketing systems
→ AI-native UX and design technology
```

Important:

- Do not make it a long biography.
- Make it a structured professional narrative.
- Include Zen-Zhu Studio and 容可设计工作室 as practice contexts.
- Keep the personal warmth, but do not lose seniority.

## 14. Interaction Map

```text
Home
  ↓
Work Grid
  ↓ click
Project Side Preview
  ↓
Full Case / External Link / Private Summary

Home
  ↓
Notes Preview
  ↓
Notes Index
  ↓
Short Note

Home
  ↓
About Preview
  ↓
About
  ↓
Contact
```

## 15. Open Questions for Style References

Useful references to collect next:

1. Sites with strong editorial grids.
2. Portfolio sites with excellent project hover states.
3. AI product / design tool sites that feel clean but not generic.
4. Art / cultural studio sites with warmth and restraint.
5. Any typography examples you strongly like.

When collecting references, annotate each one with:

```text
What I like:
What I do not want to copy:
Which part is useful: layout / typography / interaction / mood / project grid
```

## 16. Immediate Design Decision

Recommended next concrete design decision:

```text
Use a text-led editorial homepage with a mixed-size project grid and side-panel project previews.
```

This gives the site:

- A clear professional identity.
- A strong visual browsing experience.
- Room for unfinished or anonymized cases.
- A structure that can grow into a richer design knowledge system.

