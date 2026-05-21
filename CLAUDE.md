# Valley Painting Pros — Brand System (CLAUDE.md)

> Locked source of truth for every visual and voice decision on the VPP hub. If this document and another (brand brief, skeleton PDF, design research) disagree, **this document wins on visuals**. Strategy/copy/facts still flow from `brand-brief-v2.md`.

**Status:** v1 draft — pending user sign-off before any code is written.

**Companion docs:**
- `brand-brief-v2.md` — strategy, customer segments, offers, KPIs (authoritative on non-visual content)
- `about-story.md` — locked About copy, use verbatim
- `design-research.md` — design principles in full (derived next)

---

## 01 — Brand identity

- **Business name:** Valley Painting Pros (VPP)
- **Region:** East Valley, Arizona
- **Tagline:** **Painting. Done right.**
- **Wordmark structure:** "VALLEY" set in Midnight, "PAINTING PROS" set in Terracotta beneath a Terracotta rule. Optional locality strap reads "EAST VALLEY, ARIZONA" in Midnight, tracked out, beneath the rule.
- **Icon:** geometric two-panel mark with a circle "head" — abstract figure standing inside an open book/easel form, rendered in Terracotta + Adobe + Sand.

---

## 02 — Color system

Six tokens. Every UI color maps to one of these — no off-palette one-offs.

| Token | Hex | Role |
|---|---|---|
| `sand` | `#E7DED2` | Default light background. Panels, page wash, soft cards. |
| `adobe` | `#D9B89A` | Secondary warm. Section breaks, illustration tones, hover wash on Sand panels. |
| `terracotta` | `#C35A3A` | **Primary accent.** Buttons, links, the wordmark rule, all CTAs, the icon's deep-orange panels. |
| `midnight` | `#111827` | Primary text on light. Dark sections / hero. Wordmark "VALLEY" lettering. |
| `slate` | `#4A545F` | Body-text variant for less-emphasized copy, metadata, secondary footer text, dividers. |
| `electric-blue` | `#0066FF` | **Tiny-accent only.** Focus rings, inline link underlines inside body copy, keyboard-focus outlines. Never used as a fill on a hero, button, or section. |

**Usage rules**
- **Primary CTA** is always Terracotta on Sand (or on white when nested), Sand text inside. Hover: 8% darker Terracotta.
- **Dark sections** use Midnight as background, Sand as primary text, Adobe or Terracotta for accents. Slate is reserved for less-emphasized text and never used as a background.
- **Body text** is Midnight on Sand or Sand on Midnight. Slate is for captions, eyebrows, and secondary metadata only.
- **Adobe** is the bridge tone — use sparingly, primarily inside illustrations or as a subtle warm wash between Sand and Terracotta moments.
- **Electric Blue** does not appear in headlines, CTAs, hero, or any section background. Only inside running body copy as the active link color, and as the focus-visible outline for accessibility. If you can't see it without looking for it, it's used correctly.

**Contrast targets (WCAG)**
- Midnight on Sand: **AAA** (16.8:1) — default body pairing
- Sand on Midnight: **AAA** (16.8:1) — dark-section body pairing
- Terracotta on Sand: **AA Large** (3.6:1) — large headlines and buttons only, never body copy
- Sand on Terracotta: **AA Large** (5.1:1) — button text on Terracotta fill is OK
- Slate on Sand: **AA** (7.4:1) — fine for captions/eyebrows
- Electric Blue on Sand: **AA** (8.2:1) — link copy and focus outlines

**Tailwind config sketch**
```ts
colors: {
  sand:        '#E7DED2',
  adobe:       '#D9B89A',
  terracotta:  '#C35A3A',
  midnight:    '#111827',
  slate:       '#4A545F',
  'electric':  '#0066FF',
}
```

---

## 03 — Typography

Two-font system. No third font is permitted; eyebrow/metadata roles use Source Sans 3 in uppercase with wide tracking instead of a separate mono.

| Role | Font | Weight | Tracking | Case |
|---|---|---|---|---|
| Display (H1, H2 hero) | **Montserrat Black** | 900 | -0.01em | Mixed or ALL CAPS depending on weight of the moment |
| Section title (H3) | Montserrat Black | 900 | -0.005em | Mixed |
| Body | **Source Sans 3** | 400 / 600 | normal | Mixed |
| Eyebrow / metadata | Source Sans 3 | 600 | 0.12em | ALL CAPS |
| Button label | Source Sans 3 | 700 | 0.04em | UPPERCASE or Title Case (consistent per site) |

**Type scale (rem)**
- Display 1 (hero): `4.5rem` mobile-`6rem` desktop, line-height 0.95
- Display 2 (section title): `3rem`-`4rem`, line-height 1.0
- H3: `1.75rem`-`2.25rem`, line-height 1.15
- H4: `1.25rem`, line-height 1.3
- Body: `1.0625rem` (17px), line-height 1.55
- Small / eyebrow: `0.8125rem` (13px), line-height 1.3

**Font loading**
- Both fonts from Google Fonts via `next/font/google` (no FOUT, self-hosted).
- Montserrat: weight 900 only (display).
- Source Sans 3: weights 400, 600, 700.
- Preload both as primary fonts.

---

## 04 — Logo usage

**Assets** (to be produced during SVG trace, Phase A task #10):
- `vpp-wordmark-horizontal.svg` — icon left, wordmark right
- `vpp-wordmark-stacked.svg` — icon above wordmark
- `vpp-wordmark-tagline.svg` — stacked variant with "EAST VALLEY, ARIZONA" strap
- `vpp-icon.svg` — icon-only
- `vpp-wordmark-knockout.svg` — wordmark in Sand for use on Midnight backgrounds
- `vpp-icon-mono-midnight.svg` — single-color Midnight variant (rare use)
- `vpp-icon-mono-sand.svg` — single-color Sand variant (for dark backgrounds when full-color icon doesn't fit)

**Placement**
- **Header:** horizontal lockup, Midnight wordmark, icon at full color. Height: 40px on mobile, 48px on desktop.
- **Footer (dark / Midnight bg):** knockout variant — wordmark in Sand, icon at full color (the Terracotta/Adobe/Sand combo reads correctly on Midnight).
- **Favicon / social avatar:** icon-only, full color, padded to 16% inside a square.
- **Locality strap:** only on the footer logo and the About hero — not in the header.

**Don'ts**
- Never recolor the icon with arbitrary colors. Use the locked Terracotta/Adobe/Sand combination or one of the mono variants.
- Never place the full-color logo on Adobe or Terracotta backgrounds — contrast fails.
- Never set the wordmark in any typeface other than the SVG path. Don't approximate it in live text.

---

## 05 — Design grammar

The skeleton PDF's "one-orange-word rule" and oversized section numerals are **out**. Replacement grammar:

**Section rhythm**
- Backgrounds rotate Sand → Midnight (high-contrast moment) → Sand → Adobe (warm break) → Sand → Midnight (final CTA) → Midnight (footer).
- Adobe is used at most twice per page as a soft warm break — never adjacent to itself.
- Midnight sections are reserved for high-contrast moments: hero, VPP Promise (the wedge), final CTA, footer.

**Accent application**
- Terracotta carries every CTA and every section-defining underline / rule. Used at roughly 8–12% of any surface — never dominant.
- An optional eyebrow (Source Sans 3 uppercase, wide tracking, Slate on Sand or Adobe on Midnight) sits above each section title.
- Section titles are Montserrat Black, mixed case, with a single Terracotta underline beneath the title (echoes the wordmark rule). The underline is 4px tall and 64px wide — visual signature.

**Cards & containers**
- Service cards: Sand background, Midnight title, Slate description, Terracotta "Learn more →" link. Hover: Adobe wash, no shadow elevation (keep it flat).
- The VPP Promise (Section 05 of the hub) uses 5 stacked cards on Midnight background with Sand text, each numbered 01–05 in Terracotta.

**Rules and dividers**
- Hairline rules are `1px solid` Slate at 30% opacity on Sand sections, 30% opacity Sand on Midnight sections.
- The signature 4px Terracotta underline appears only beneath section titles and the wordmark — not as a divider.

**Imagery**
- Photography stays warm/desert-toned to match the palette. Reject any photo whose dominant tone is cool blue or green.
- Before/after sliders use a Terracotta divider handle.
- Captions sit in Slate, tracked-out uppercase, beneath each photo — never overlaid on the image.

---

## 06 — Voice patterns

Sourced from `about-story.md` and `brand-brief-v2.md` Section 05. Locked.

**Voice principles**
- Name the homeowner's fear first; introduce VPP second.
- Use specifics over adjectives. "$300/day credit" beats "fast." "$1M / $2M general liability through ERGO NEXT" beats "fully insured." "ROC #363664" beats "licensed."
- The owner-operator promise is in Ricardo's own voice on the website: *"With Valley Painting Pros you get access to a direct line that reaches the owner directly. Not an AI receptionist. Not an office that puts you on hold. Not a machine operator."* Treat as a pull quote.
- The three insider lines from the About story ("One coat is fine — don't worry about a second." / "Power-washing's just for show. Wet the walls down and start painting." / "Just finish it up and let us know when we can come collect.") get pull-quote treatment: indented, italicized, Slate text on Sand, Terracotta vertical rule on the left edge.
- The closing line **"Painting. Done right."** is the sign-off — set in Montserrat Black, Midnight, with a Terracotta underline. Appears at the end of the About page and as the final line above the footer.

**Banned phrases on the website**
- "Fully insured" — replace with the specific dollar amounts.
- "Family-owned" — Freedom owns this lane. We say "owner-operator" instead.
- "Patriot-owned," "faith-based," any patriotism/religion framing — out of voice.
- "Trusted locally since [year]" — Freedom's line; we don't echo it.
- "Family of painters" / "team of professionals" — generic, anti-specific.
- Adjectives without proof: "premium," "best," "quality," "experienced" — replace with verifiable specifics.
- "Free quote" — we say "free estimate" (consistent with the call-to-action language across the site).

**Headline construction**
- Default to mixed case for section titles. ALL CAPS only on hero displays and CTAs.
- Lead with a verb when possible. "Get a free estimate" beats "Free estimate."
- The hero headline is the single moment the brand declares what it does. Draft to be tested: *"Painting. Done right."* as the hero headline, with the subhead introducing the East Valley + the credentials. Lock during copy pass.

---

## 07 — Component primitives

All components reference the tokens above. No raw hex codes in component files.

**Button (primary)** — Terracotta fill, Sand text, Source Sans 3 700, uppercase, 0.04em tracking, 16px vertical / 32px horizontal padding, 4px border radius, hover 8% darker, focus-visible 2px Electric Blue outline 2px offset.

**Button (secondary)** — transparent fill, Midnight 2px border, Midnight text, same typography as primary. Hover: Adobe wash.

**Link (inline body)** — Electric Blue text, 1px underline at 0.15em offset, hover removes underline. The only place Electric Blue surfaces on the site.

**Phone number (mono-feel)** — Source Sans 3 600, uppercase, 0.08em tracking. Always clickable (`tel:` link).

**Card** — Sand fill, Midnight title (Montserrat Black 900, 1.75rem), Slate body (Source Sans 3 400), Terracotta CTA link with arrow. 24px padding, no shadow, no border. Hover: Adobe wash, no scale or shadow.

**Form input** — Sand fill, 1px Slate-at-30%-opacity border, Midnight text, Source Sans 3. Focus: Terracotta border + Electric Blue focus-visible outline. Error state: Terracotta border at full opacity, error text in Terracotta below the input.

---

## 08 — Accessibility floor

- All text meets WCAG AA minimum, AAA where the pairing supports it (Midnight↔Sand).
- Every interactive element has a `:focus-visible` outline in Electric Blue with 2px offset.
- Every image has an alt attribute. Decorative images use `alt=""`.
- Every form has labels (visible, not just `aria-label`).
- Tab order matches reading order.
- All animations respect `prefers-reduced-motion`.
- Skip-to-main link on every page.

---

## 09 — Reserved decisions / not in this doc

The following live in the brand brief, not here:
- All strategy, customer segments, offers, KPIs, competitive positioning
- All page-level copy
- The VPP Promise content (5-piece offer stack)
- Service area, license, insurance, contact details
- Photography rules (Section 05 of brand brief): blur house numbers, no homeowner names, Sunstate held

If a decision crosses both — e.g., "what color is the VPP Promise section background?" — this document answers it (Midnight, per the section rhythm in §05).

---

*Update this doc when a visual decision changes. Then notify the user, do not assume tacit approval.*
