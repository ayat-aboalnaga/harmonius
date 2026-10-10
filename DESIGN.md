---
name: Fieldnotes
description: An independent journal about design and the everyday.
colors:
  core-ink: "#663732"
  deep-ink: "#4A2521"
  ink-on-coral: "#2B1715"
  warm-coral: "#CC6D64"
  coral-wash: "#F4D9D5"
  bright-aqua: "#64C3CC"
  aqua-wash: "#D9EFF0"
  soft-mist: "#98C7CC"
  mist-wash: "#E3F0F1"
  deep-teal: "#326166"
  dark-teal: "#21484D"
  rule-teal: "#6F989B"
  paper: "#FFF9F1"
typography:
  display:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(3rem, 5.5vw, 5.4rem)"
    fontWeight: 560
    lineHeight: 0.96
    letterSpacing: "-0.045em"
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
  page-gutter: "clamp(22px, 6.5vw, 96px)"
components:
  primary-action:
    backgroundColor: "{colors.warm-coral}"
    textColor: "{colors.deep-ink}"
    typography: "DM Sans, 650, 12px"
    padding: "12px 17px"
  masthead-link:
    textColor: "{colors.paper}"
    typography: "DM Sans, 650, 11px"
  palette-feature:
    backgroundColor: "{colors.dark-teal}"
    padding: "clamp(70px, 8vw, 104px) 0"
---

# Design System: Fieldnotes

## Overview

**Creative North Star: “A journal in the room.”**

Fieldnotes takes the confident composition of an interiors journal and turns it
into an editorial frame for writing about design and everyday life. The dark
teal masthead and hero hold a quiet room study; warm paper gives the journal
entries space; a dark palette feature and footer close the page. Coral and aqua
carry the small moments of emphasis. Newsreader brings the editorial voice,
while DM Sans keeps navigation, metadata, and descriptions direct.

The supplied template guides the page rhythm, not the product identity or its
copy. Fieldnotes retains its own name, color palette, existing article, and
working journal routes. Guide and studio cards, plus the newsletter area, are
explicit visual previews rather than published content or live features.

## Colors

The five committed brand colors remain visible as palette bars and illustration
accents. Deep Teal (`{colors.dark-teal}`) and Warm Paper (`{colors.paper}`)
establish the large surfaces; Deep Ink (`{colors.deep-ink}`) carries readable
text on paper; a darker same-hue ink (`{colors.ink-on-coral}`) keeps small
labels readable on coral. Coral, aqua, and mist articulate the illustrations,
actions, and fine details. Lighter washes are reserved for secondary surfaces.
Small text on colored surfaces uses paper, mist, or deep ink for contrast.

## Typography

- **Display:** Locally hosted Newsreader variable font, paired with Georgia.
- **Body and labels:** Locally hosted DM Sans variable font, paired with Arial.
- **Hero:** `clamp(3rem, 5.5vw, 5.4rem)`, `.96` line height, `-.045em` tracking.
- **Article reading:** `18px/1.82` at a narrow `68ch` measure; reduce to `17px`
  on small screens.
- **Metadata:** Uppercase DM Sans labels at `10–11px`; tabular numerals for dates.

Both font files are served locally and preloaded by `SiteLayout.astro`.

## Layout

The homepage begins with a full-width dark hero: editorial copy and actions sit
beside a restrained line-art room study. A thin five-color register closes the
hero. The warm-paper journal area uses an open three-column grid: the real
published note links to its article route, while any preview-only guide or
studio panels are visibly identified and have no false action. The palette
feature switches back to deep teal, followed by a quiet paper signup preview
and the shared footer.

At tablet widths, the hero and palette feature stack; the journal grid changes
to two columns. At phone widths, the hero art follows the copy and the journal
grid becomes one column. The shared shell has fluid gutters and a `1440px`
maximum width. Article pages use the same dark editorial frame above a warm
paper reading column capped at `68ch`.

## Components and interaction

- **Masthead:** Dark teal field, square coral `F.` tile, compact links, and a
  coral Subscribe link to the clearly marked signup preview.
- **Hero:** Large Newsreader statement, concise existing product copy, two
  working destinations, and a simple architectural line illustration.
- **Journal entry:** Real published content only; a short coral registration
  rail extends on hover or keyboard focus.
- **Preview panels:** Field-guide and studio surfaces are labeled “Preview
  only” and are not presented as articles or working services.
- **Palette feature:** Five exact brand swatches, names, and values beside
  factual copy about the Fieldnotes palette.
- **Newsletter:** Disabled email and button controls with visible explanatory
  copy; no email is collected.
- **Article:** Metadata and title sit on deep teal; the article remains on
  warm paper, with a fixed reading-progress indicator and return navigation.

## Shapes, depth, and motion

Surfaces and controls are square-cornered. No shadows are used; adjacent flat
color fields, line art, and fine rules establish depth. The registration rail
is the signature motion and is removed for reduced-motion preferences. Focus
indicators, underlines, selection, and scrollbars use the Fieldnotes palette.
