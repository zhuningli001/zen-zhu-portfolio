---
name: "Ningli Zhu Portfolio"
description: "Warm editorial index for AI-native UX, design systems, cultural work, and studio practice."
colors:
  warm-paper: "#f4f0ea"
  paper-panel: "#fbf8f2"
  ink: "#171411"
  muted-ink: "#6d665e"
  soft-violet: "#7a67a8"
  moss: "#77715d"
  human-clay: "#8d4b45"
  human-clay-dark: "#c88775"
  attention-orange: "#f54e00"
  attention-orange-dark: "#ff6a22"
  dark-bg: "#171512"
  dark-panel: "#211e1a"
  dark-ink: "#f4efe6"
  dark-muted: "#a79f93"
typography:
  display:
    fontFamily: "Space Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.65rem, 5.7vw, 6.3rem)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Space Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.9rem, 4vw, 4.4rem)"
    fontWeight: 500
    lineHeight: 1.06
    letterSpacing: "-0.04em"
  title:
    fontFamily: "IBM Plex Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.55rem, 2.7vw, 3.4rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  body:
    fontFamily: "IBM Plex Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(0.98rem, 1.25vw, 1.16rem)"
    fontWeight: 400
    lineHeight: 1.66
  label:
    fontFamily: "IBM Plex Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1
rounded:
  sharp: "0"
  small: "6px"
  panel: "8px"
  media: "24px"
  pill: "999px"
  round: "50%"
spacing:
  touch: "44px"
  page-x: "clamp(1.25rem, 4vw, 4.5rem)"
  section-y: "clamp(3rem, 7vw, 7rem)"
  card-gap: "clamp(1.4rem, 3vw, 2.6rem)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper-panel}"
    rounded: "{rounded.pill}"
    padding: "0 1.05rem"
    height: "{spacing.touch}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 1.05rem"
    height: "{spacing.touch}"
  chip-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper-panel}"
    rounded: "{rounded.pill}"
    padding: "0 0.82rem"
    height: "{spacing.touch}"
  card-visual:
    backgroundColor: "{colors.paper-panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.media}"
---

# Design System: Ningli Zhu Portfolio

## Overview

**Creative North Star: "Warm Editorial Atlas"**

The portfolio is a precise editorial index for a designer working between AI-native product systems, design research, cultural practice, and independent studio work. It should feel structured, calm, and intelligent, with enough warmth to hold personal biography and cultural projects.

The interface is not a startup landing page, a decorative personal portfolio, or a Behance-style dump. It is a living visual archive: quiet by default, interactive where interaction clarifies the work, and restrained enough that project evidence can become the visual center.

**Key Characteristics:**

- Editorial grid, subtle system lines, and generous horizontal breathing room.
- Warm neutral surfaces with near-black type and rare orange action highlights.
- Product-system clarity for Work and Notes, with softer personal texture on About.
- One strong interaction idea per area: role rotator, work previews, radar motion, or panel disclosure.

## Colors

The palette is warm-neutral first, with two controlled accent roles: human clay for warmth and attention orange for rare action or signal moments.

### Primary

- **Attention Orange** (`#f54e00`, dark mode `#ff6a22`): Used only for high-signal action, focus rings, cursor aura, urgent notification panels, and occasional Atlas lattice emphasis. It should appear sparingly.
- **Ink** (`#171411`, dark mode `#f4efe6`): Primary text, active controls, selected chips, and structural contrast.

### Secondary

- **Human Clay** (`#8d4b45`, dark mode `#c88775`): Human warmth, cultural emphasis, subtle About highlights, and non-urgent accent moments.
- **Soft Violet** (`#7a67a8`): AI/system moments and quiet secondary visual distinction.
- **Moss** (`#77715d`): Earthy support color for cultural or archival surfaces.

### Neutral

- **Warm Paper** (`#f4f0ea`): Global light background.
- **Panel Paper** (`#fbf8f2`): Raised or content surfaces.
- **Muted Ink** (`#6d665e`): Secondary text and metadata.
- **Soft Lines** (`rgba(23, 20, 17, 0.08)` to `rgba(23, 20, 17, 0.16)`): Dividers, subtle borders, card edges.
- **Warm Dark** (`#171512` / `#211e1a`): Dark mode background and panel surfaces.

### Named Rules

**The Rare Orange Rule.** `#f54e00` is an action or attention color, not a general brand wash. Use it in the fewest meaningful places.

**The One Accent Family Rule.** Orange-red variants should collapse to the semantic tokens `--color-attention` and `--color-accent-human`; do not add new near-orange values.

## Typography

**Display Font:** Space Grotesk with Helvetica Neue / Arial fallback  
**Body Font:** IBM Plex Sans with Helvetica Neue / Arial fallback  
**Chinese Font:** PingFang SC, Hiragino Sans GB, HarmonyOS Sans, Microsoft YaHei, Noto Sans CJK SC

**Character:** Space Grotesk carries the modern product/design-system voice in headlines. IBM Plex Sans carries reading, navigation, buttons, and operational UI. Chinese keeps the native system stack for natural rhythm and legibility.

### Hierarchy

- **Display** (500, `clamp(2.65rem, 5.7vw, 6.3rem)`, `0.98`): Hero statements and major page identity.
- **Headline** (500, `clamp(1.9rem, 4vw, 4.4rem)`, `1.06`): Section headings, contact headline, large editorial moments.
- **Title** (500, `clamp(1.55rem, 2.7vw, 3.4rem)`, `1.08`): Project titles and card titles. English project titles may use IBM Plex Sans for better scanability.
- **Body** (400, roughly `1rem`, `1.55-1.72`): Paragraphs, About copy, panel descriptions, notes summaries.
- **Label** (600, `0.75rem+`, uppercase only when metadata truly benefits): Eyebrows, statuses, tags, and compact UI labels.

### Named Rules

**The Chinese Native Rhythm Rule.** Do not force Space Grotesk or IBM Plex Sans onto Chinese headings. Chinese mode uses the Chinese system stack and removes negative letter spacing.

**The Tracking Floor Rule.** Negative tracking never goes beyond `-0.04em`; body text should avoid decorative tracking.

## Layout

The layout behaves like an editorial index. Desktop pages use broad grid relationships, not centered marketing columns. Section padding is generous, while component interiors stay tight and scannable.

- Page horizontal padding follows `clamp(1.25rem, 4vw, 4.5rem)`.
- Work grid uses a 6-column desktop structure, collapses to 2 columns under `980px`, and to 1 column under `680px`.
- About uses a two-column hero with a portrait and signals, then collapses into a single-column reading flow.
- Footer social links are 2 columns on mobile, with compact row spacing and no hover underline.
- Project panels are side drawers on desktop and bottom sheets on mobile.

Responsive behavior should adapt the experience, not just scale it. Mobile must reduce visual height where scanning matters, remove hover-dependent motion, and keep 44px touch targets.

## Elevation & Depth

Depth is restrained and structural. Most surfaces are flat with borders or tonal layering; shadows appear on drawers, navigation menus, selected panels, and specific interactive overlays.

### Shadow Vocabulary

- **Panel Shadow** (`0 18px 48px rgba(33, 24, 18, 0.16)`): Mobile navigation and compact elevated panels.
- **Drawer Shadow** (`-24px 0 80px rgba(33, 24, 18, 0.18)`): Project and email drawers.
- **Ambient Shadow** (`0 24px 80px rgba(33, 24, 18, 0.16)`): Large soft elevation when a surface needs clear separation.
- **Dark Panel Shadow** (`0 18px 48px rgba(0, 0, 0, 0.34)`): Dark-mode equivalent.

### Named Rules

**The Flat-By-Default Rule.** Use border and tone first. Use shadow only when a layer is genuinely above the page.

## Shapes

The form language is precise and restrained. Cards and panels use small, controlled corners; pills are reserved for compact controls and tags.

- `0`: sharp utility elements and menu bars.
- `6px`: chips, labels, evidence tags, small controls.
- `8px`: panels, artifact slices, repeated data surfaces.
- `24px`: media frames and large project visuals.
- `999px`: buttons, filters, nav pills, and compact action controls.
- `50%`: avatar or circular-only controls.

Avoid nested cards. A page section should not become a floating card unless the task requires protected focus, repeated items, or a real framed tool.

## Components

### Buttons

- **Shape:** Pill (`999px`) with minimum 44px height.
- **Primary:** Ink background with panel text. Use for main actions such as Email.
- **Secondary:** Transparent or soft paper background with 1px line border. Use for LinkedIn, CV, and supporting actions.
- **Hover / Focus:** Subtle background shift, preserved focus ring using `--color-attention`.
- **Text:** IBM Plex Sans for English, Chinese body stack in Chinese mode.

### Chips

- **Style:** Pill for filters; small 6px radius for evidence tags.
- **State:** Active filters invert to ink background and panel text. Evidence chips stay quiet and informational.
- **Behavior:** Filter chips use `aria-pressed`; empty filter states must offer reset.

### Cards / Containers

- **Project Cards:** Visual-first, transparent outside the media frame. Until real project thumbnails are available, the visual frame stays as a quiet project-colored surface with only minimal identification.
- **Image Placeholders:** Do not show fake app frames, architecture diagrams, or invented artefact layouts. Use real screenshots, process crops, or keep the surface quiet.
- **About Intro:** Long-form personal content should not invert aggressively on hover. Use warm tonal emphasis instead.
- **Notes Cards:** Editorial, readable, and less decorative than product cards.

### Inputs / Fields

- **Style:** Dark drawer fields use transparent background, bottom border, and visible focus.
- **Focus:** `box-shadow: 0 0 0 3px rgba(var(--color-attention-rgb), 0.34)` plus clear border state.
- **Validation:** Required fields remain explicit in HTML; errors should be specific if custom validation is added later.

### Navigation

- **Desktop:** Minimal header with text links and compact utility buttons.
- **Mobile:** Hamburger opens a full-width soft panel with 44px controls. Escape closes the menu and focus returns to the opener.
- **Theme / Language:** Icon or compact text controls should expose accurate `aria-label` and `aria-pressed` state.

### Project Panel

The project panel is the case-study preview surface. It uses `role="dialog"`, traps focus while open, restores focus on close, and exposes Scope, Intro, Challenge, Outcome, and Evidence. Desktop uses a right drawer; mobile uses a bottom sheet.

### Career Atlas

Career Atlas uses the same core palette and font direction, with additional surface tokens for map-like density. Attention orange should still come from `--color-attention`; lattice and active effects derive from the attention token rather than hard-coded orange values.

## Do's and Don'ts

### Do:

- **Do** preserve the warm editorial index feel: structured, quiet, and evidence-led.
- **Do** keep `#f54e00` rare and semantic: focus, action, alert, or high-signal panel only.
- **Do** use IBM Plex Sans for body and operations, Space Grotesk for English headlines, and the Chinese system stack for Chinese.
- **Do** keep touch targets at least 44px and make keyboard focus visible.
- **Do** let project visuals and evidence carry the portfolio story before decorative effects.
- **Do** keep project image areas quiet until real preview assets are ready.
- **Do** collapse mobile layouts for scanning, especially Work cards and project panels.

### Don't:

- **Don't** introduce new near-orange/red values outside `--color-attention` and `--color-accent-human`.
- **Don't** use AI-gradient glow, glassmorphism, or dark cyber styling as the identity.
- **Don't** make nested cards or decorate whole sections as floating cards.
- **Don't** depend on hover for mobile-critical information.
- **Don't** fake product screenshots, architecture, or UI previews inside project cards.
- **Don't** use tiny labels below `0.75rem` or negative tracking beyond `-0.04em`.
- **Don't** replace personal, cultural warmth with a generic SaaS dashboard mood.
