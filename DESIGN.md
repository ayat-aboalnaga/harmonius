---
name: Fieldnotes
description: An independent journal about design and the everyday.
colors:
  core-ink: "#663732"
  warm-coral: "#CC6D64"
  bright-aqua: "#64C3CC"
  soft-mist: "#98C7CC"
  deep-teal: "#326166"
  paper: "#f8f3eb"
typography:
  display:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(3rem, 5.8vw, 5.5rem)"
    fontWeight: 560
    lineHeight: 0.93
    letterSpacing: "-0.055em"
  article-heading:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(3rem, 7.4vw, 5.8rem)"
    fontWeight: 550
    lineHeight: 0.98
    letterSpacing: "-0.05em"
  reading:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.82
  label:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "11px"
    fontWeight: 650
    letterSpacing: "0.06em"
    lineHeight: 1
spacing:
  page-gutter: "clamp(22px, 5.2vw, 76px)"
  compact-home-gutter: "18px"
components:
  primary-action:
    backgroundColor: "{colors.core-ink}"
    textColor: "{colors.paper}"
    typography: "DM Sans, 600, 13px"
    padding: "14px 17px"
  primary-action-hover:
    backgroundColor: "{colors.deep-teal}"
    textColor: "{colors.paper}"
  masthead-link:
    textColor: "{colors.paper}"
    typography: "DM Sans, 600, 12px"
  featured-entry:
    backgroundColor: "{colors.soft-mist}"
    padding: "clamp(30px, 4.3vw, 58px) 0"
---

# Design System: Fieldnotes

## Overview

**Creative North Star: "The Color Proof Book"**

Fieldnotes pairs oversized Newsreader headlines and flat, confident color plates with the small labels, numbered entries, and registration details of a working proof sheet. The homepage gives that frame the strongest color; the essay itself returns to warm paper, a narrow reading measure, and quiet typography.

The saved direction contract records “Color Proof Book,” candidate 7 of seven, with seed key `f3bbfd94`. That contract is the only direction provenance verified here; no archived roll receipt was available, so none is claimed. The shipped implementation is evidenced by [`SiteLayout.astro`](src/layouts/SiteLayout.astro), [`index.astro`](src/pages/index.astro), [`[slug].astro`](src/pages/journal/%5Bslug%5D.astro), and the local captures: [desktop](.impeccable/review/desktop.png), [mobile at 390×844](.impeccable/review/mobile.png), and [article mobile at 390×844](.impeccable/review/article-mobile.png). The homepage register stacks beneath the hero copy and fits its plate; the article frame and reading column also fit the mobile capture.

**Key Characteristics:**
- Large editorial serif against DM Sans utility text.
- Saturated, square-edged plates give way to a paper reading surface.
- Color-register rows, numbered notes, and short registration marks make the editorial system feel indexed.
- Inline SVG arrows carry navigation; typography and color blocks carry the identity.

## Colors

The five supplied colors form the proof palette; the implementation also uses a warm-paper neutral for the page ground and light text.

### Primary
- **Core Ink** (`{colors.core-ink}`): Brand wordmark, primary text, headline, and the primary action surface.

### Secondary
- **Warm Coral** (`{colors.warm-coral}`): A registration accent: the intro plate’s top mark, article register, and the post-link rail.
- **Deep Teal** (`{colors.deep-teal}`): Deep counterpoint for the closing plate, links, focus contrast, and the reading-progress indicator.

### Tertiary
- **Bright Aqua** (`{colors.bright-aqua}`): Homepage proof plate, wordmark tile, and one of the five register swatches.
- **Soft Mist** (`{colors.soft-mist}`): Featured journal row, article title frame, register swatch, and divider color.

### Neutral
- **Warm Paper** (`{colors.paper}`): Site background and light text on the ink and teal header/footer plates.
- The article body remains on paper; rules use the mist token, while swatch separators use ink at 30% opacity.

**The Plate-to-Paper Rule.** Let strong color frame discovery and article metadata; return essay prose to the quiet paper ground.

## Typography

- **Display Font:** Newsreader (local variable font, with Georgia, serif fallback)
- **Body Font:** DM Sans (local variable font, with Arial, sans-serif fallback)
- **Label/Mono Font:** DM Sans; the color values are code-styled but retain the body family.

**Character:** Newsreader supplies the compact, high-contrast editorial voice; DM Sans keeps descriptions, navigation, and register labels clear. Both variable font files are served locally and preloaded by the site layout.

### Hierarchy
- **Display** (weight 560; desktop `clamp(3rem, 5.8vw, 5.5rem)`; line-height `.93`): Two-line homepage headline, with tighter mobile sizing.
- **Article headline** (weight 550; desktop `clamp(3rem, 7.4vw, 5.8rem)`; line-height `.98`): Article title in the colored frame; mobile overrides to `clamp(2.8rem, 11vw, 4.1rem)`.
- **Editorial entry title** (weight 540; desktop `clamp(2.15rem, 5vw, 4.1rem)`; line-height `1`): Oversized journal-list title; mobile `clamp(2rem, 9vw, 2.7rem)`.
- **Reading body** (weight 400; `18px/1.82` desktop, `17px` at `640px` and below): Essay prose in a `68ch` column. Global body text is `16px`.
- **Labels** (weight 650; `11px`; `.05em`–`.08em` tracking; uppercase): Category/date metadata and proof-register headings. Keep this small register typography attached to actual metadata.

## Layout

The shared outer shell is centered and capped at `1440px`, with a fluid horizontal gutter (`clamp(22px, 5.2vw, 76px)`). On the homepage at `480px` and below, the shell gutter becomes `18px`. The desktop intro plate is an asymmetric two-column grid (`1.35fr / .75fr`) with the headline and copy first, and the color register opposite. At `760px` and below, it becomes a single column in that order; the register remains full-width within the plate. The supplied 390×844 capture verifies that the stacked register fits.

The latest-writing list follows the hero with a full-bleed mist highlight for the first numbered entry. Its number, editorial copy, and registration-arrow signature occupy separate columns; tighter mobile widths reduce those columns and stack category/date metadata. The closing teal note changes from a horizontal pair to a vertical stack on narrow screens.

Article pages reuse the centered shell. The metadata and headline sit in an inset mist frame above a paper reading column capped at `68ch`; at `640px` and below, the frame and title tighten while the prose remains a single readable column. The local article-mobile capture shows the frame and measure fitting within 390×844. The site footer also changes from a horizontal row to a vertical stack at `640px`.

**The Narrow Measure Rule.** Keep long-form copy near the implemented `68ch` measure; the plate may be broad, but the essay is not.

## Elevation & Depth

The inspected surfaces use no box shadows. Depth comes from adjacent flat color fields, the mist featured row, full-width color plates, hairline rules, and changes in type scale. The coral registration strip is a graphic mark, not a shadow or elevation cue.

## Shapes

The visual language is square-cornered: no border-radius token or rounded card treatment appears in these surfaces. One-pixel rules align the register and journal headings; small rectangular swatches and the short coral rail repeat the proof-mark geometry. The favicon is a custom SVG silhouette; it is core ink normally and switches to bright aqua under a dark system color preference.

## Components

### Primary action
- **Shape:** Square-cornered text link presented as a button.
- **Default:** Core-ink field, warm-paper text, DM Sans at `13px`/`600`, with `14px 17px` padding and an inline arrow.
- **Hover / Focus:** Hover shifts the field to deep teal (`180ms ease-out`); keyboard focus uses the shared visible outline.

### Masthead and navigation
- **Style:** Core-ink band with warm-paper text; the wordmark combines a square aqua `F.` tile and Newsreader lettering. Journal and Contact are compact DM Sans links; Contact includes an inline SVG northeast arrow.
- **Mobile:** Tile becomes `30px` square, wordmark `16px`, navigation gap `17px`, and nav text `11px`.
- **State:** Link hover turns aqua. Focus uses a `2px` aqua outline with `4px` offset.

### Featured journal entry
- **Style:** Full-row link on a mist field with a tabular two-digit index, uppercase category/date, large Newsreader title, description, and “Read the note” link.
- **Registration state:** A coral `3px` rail expands from `scaleX(.32)` to `scaleX(1)` on hover or keyboard focus. It settles over `220ms` with `cubic-bezier(.16, 1, .3, 1)`; reduced-motion preferences remove the transition.

### Color register
- **Style:** Five rows on the bright-aqua intro plate; each pairs a rectangular swatch, descriptive label, and exact hex value. Thin ink separators align the rows.
- **Article counterpart:** A five-color, `12px`-high rail closes the article metadata frame.

### Article reading frame
- **Style:** The mist frame contains the “All notes” return link, category, large title, description, date, and five-part register. The paper reading column begins beneath it, with a teal Newsreader drop cap on the first paragraph.
- **Reading state:** A fixed deep-teal `4px` progress strip scales horizontally with document scroll. The article footer pairs tags with a return-to-journal link, stacking at narrow widths.

### Footer
- **Style:** Deep-teal band with warm-paper wordmark, short journal descriptor, and tabular copyright year; minimum height is `108px` on wider screens. At `640px` and below it becomes a left-aligned vertical stack.

## Do's and Don'ts

### Do:
- **Do** use the exact palette and keep the page-ground paper neutral in addition to its five proof colors.
- **Do** reserve bright plates for the homepage intro and highlighted editorial frames; keep article prose on paper.
- **Do** preserve the 1440px outer cap, fluid shell gutters, and narrow article measure when extending these surfaces.
- **Do** use small uppercase labels for real categories, dates, counts, and register headings—not as an unrelated decorative layer.
- **Do** retain the registration rail’s hover/focus behavior and honor reduced-motion preferences.

### Don't:
- **Don't** introduce rounded cards or shadows; neither belongs to the shipped surface language.
- **Don't** replace inline SVG navigation arrows with an unrelated icon style.
- **Don't** promote the current homepage composition or its seed provenance into an undocumented claim about an archived design roll.
