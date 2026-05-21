# Valley Painting Pros — Design Research & Principles

> Companion to `CLAUDE.md`. CLAUDE.md is the **system** (colors, fonts, components). This document is the **why** (the eleven principles that govern how we apply the system on the page).

**Status:** v1 draft — derived from `brand-brief-v2.md`, `VPP_Landing_Page_Skeleton.pdf`, the locked color palette, and `about-story.md`. Pending user sign-off.

**Note on cross-category research:** The original `design-research.md` referenced in the brand brief drew on cross-category visual precedents the user studied before the visual identity was finalized. That research is not in this folder. This document re-derives the principles from the assets we have. If the user produces the original research, we merge — the principles below should survive the merge, but the precedent images would enrich it.

---

## How to use this document

Every design call on the hub should be testable against these eleven principles. When two principles conflict on a specific decision, the one with the lower number wins. The eleven are ordered by load-bearing weight, not chronology.

If a designer or developer is about to ship something that violates a principle, they should either:
1. Restate the principle and propose a refinement to it (and update this doc), or
2. Refactor the work.

Tacit violations rot the system — they are how brand drift happens.

---

## 01 — The homeowner's fear is the entry point

Every section opens by naming what the homeowner is afraid of, not by introducing VPP. The hero, the VPP Promise, the FAQ, the testimonials — each begins with the failure pattern the reader has lived through, then resolves it.

**Why** — `about-story.md` is built on this exact move. Ricardo's name doesn't appear until paragraph 3 because the reader has to feel "yes, that's exactly my fear" before they care who's solving it. The same logic governs the page.

**How to apply** — Every section title should be one that a homeowner could read and think "that's me." *"What's behind your painter's name"* beats *"About Valley Painting Pros."* *"Why painters disappear"* beats *"Our 5-Year Warranty."*

**Anti-pattern** — Founder-bio leads, "Welcome to our website" headlines, anything where the brand introduces itself before naming the reader's problem.

---

## 02 — Specifics over adjectives

Every claim on the site is verifiable with a number, a name, a document, or a quote. Adjectives ("premium," "trusted," "experienced," "quality") get cut and replaced with the underlying specific.

**Why** — Freedom Painting publishes "trusted locally since 2018." Arizona Painting Company publishes "25,000+ houses painted." Adjective-heavy claims read identically to every competitor; specifics are how a homeowner separates real from marketing. The brand brief's Section 09 names this as the top conversion lever for residential painting.

**How to apply**
- "$300/day credit" not "fast finish"
- "$1M / $2M general liability through ERGO NEXT" not "fully insured"
- "ROC #363664, Class CR-34 Dual" not "licensed"
- "9 years in painting, 13 in the trades" not "decades of experience"
- "Sherwin-Williams Emerald, two coats over oil-bonding primer" not "premium paint"

**Anti-pattern** — Any sentence that could be lifted onto a competitor's site without modification.

---

## 03 — The Promise is the moat

The 5-piece VPP Promise (Section 05 of the hub) is the single competitive wedge. It receives a Midnight high-contrast moment, the largest type treatment on the page after the hero, and Terracotta numerals. No other section gets that visual weight.

**Why** — Freedom Painting's whole moat is one piece — their $250/day Speed Guarantee. VPP has five pieces, each addressing a separate failure mode (schedule, HOA, communication, warranty, follow-through). The structural advantage only converts if the visual structure announces it.

**How to apply** — Section 05 on Midnight. Five numbered cards (01–05) in Terracotta numerals over Sand-on-Midnight text. The cards are equal width on desktop, stacked on mobile. No photography in this section — the type and the numbers do the work.

**Anti-pattern** — Burying the Promise in a 3-column grid alongside "Our Services" or treating it as a feature list. It's not a feature list. It's the wedge.

---

## 04 — The Terracotta accent is a 10% device, not a 50% one

Terracotta carries every CTA, the wordmark rule, section underlines, and the icon's deep panels — and that's all. On any given surface, Terracotta should occupy roughly 8–12% of the visible pixels. Above that, the brand reads as orange-and-everything-else; below it, the accent stops doing its job.

**Why** — The icon already uses Terracotta as a load-bearing tone. If the page also uses it heavily, the wordmark stops standing out — the brand's primary identifier loses its anchor. Freedom Painting makes this mistake (red used everywhere). VPP doesn't.

**How to apply** — Every time you reach for Terracotta, ask whether it's earning a job (CTA, accent rule, numeral, link). If not, the answer is Midnight, Slate, or Adobe.

**Anti-pattern** — Terracotta backgrounds, Terracotta section dividers, Terracotta body text, Terracotta headlines (except the wordmark itself).

---

## 05 — Photography stays warm, not generic

All photography on the site is desert-toned — warm beige, terracotta, sage green, soft sky pink. We reject any photo whose dominant tone is cool blue, cool gray, or cool green even if the work shown is excellent.

**Why** — The palette is built around a Southwestern desert sense of place. East Valley homeowners recognize their own homes in this color space. A stock photo of a New England Victorian with slate-blue trim breaks the recognition.

**How to apply**
- Hero: dusk-lit AZ desert home with Terracotta-tile roof or terracotta tones in the landscaping
- Interior shots: warm whites, sage accent walls, leather + olive + adobe upholstery — never cool gray rooms
- Cabinet shots: cream cabinets with brass or matte black hardware (warm); navy island is OK as a secondary tone
- Exterior shots: stucco in cream/adobe/terracotta tones, not slate-blue-trim suburbia
- Before/afters: prep shots prioritized — the prep work is the proof, not the finished color

**Anti-pattern** — Cool-toned stock interiors, blue accent walls, photos of houses that don't look like Arizona.

---

## 06 — Type carries the moments photography can't

The hero, the VPP Promise, the final CTA, and the About page sign-off are typographic moments — Montserrat Black at its largest scale, no photography. These are the places where the brand declares itself, and a photo would only distract from the words.

**Why** — A new business doesn't have the proprietary photography library of an established competitor. We win by being typographically louder where photography would be silent. This is also the cheapest way to differentiate: photography costs money to produce; type costs nothing.

**How to apply**
- Hero: Display 1 (4.5–6rem), Montserrat Black, "Painting. Done right." centered or left-aligned, Sand on Midnight or Midnight on Sand
- VPP Promise section title: Display 2 (3–4rem) with a 4×64px Terracotta underline
- Final CTA: Display 1 again, treated as a sign-off — "READY FOR A QUOTE?" or similar
- About sign-off: "Painting. Done right." set as a closing line, Midnight on Sand, with the Terracotta underline

**Anti-pattern** — Filling typographic moments with stock photography because the section "needs an image." If the words are right, they're the image.

---

## 07 — One CTA per scroll height

Above the fold: one primary CTA ("Get a Free Estimate") + the phone number as a secondary tap-to-call. Each subsequent scroll height (~screen height) has at most one CTA — never two competing primary buttons on the same screen.

**Why** — Painting industry CPC is $13.74 (brand brief §09). Every visitor is expensive. Decision fatigue kills conversion; competing CTAs are decision fatigue.

**How to apply**
- Hero: Get a Free Estimate (primary) + phone number (secondary)
- Why Direct: inline mono link "Get a direct quote →" — secondary weight, no button
- What We Do (services grid): "Learn more →" per card — informational, not a conversion CTA
- VPP Promise: no CTA — pure value statement
- Recent Work: no CTA — pure proof
- How It Works: no CTA — pure de-risking
- Trust & Reviews: no CTA — pure proof
- Where We Work: no CTA — pure local SEO
- Questions: no CTA — pure objection-handling
- Final CTA: Get a Free Estimate (primary, again)

**Anti-pattern** — Two competing buttons in the same viewport. Sales pages that turn into button galleries.

---

## 08 — Mobile is the canonical layout

The page is designed on mobile first. Desktop is the wider version, not the primary version. Every breakpoint reads correctly at 375px before we touch desktop.

**Why** — Brand brief §03: "Tech behavior: searches on phone, reads Google reviews, asks Nextdoor, then calls or fills a form." The HOA-pressed homeowner (priority 1 segment) is reading the search result on their phone in the kitchen. Mobile-broken is conversion-broken.

**How to apply**
- All interactive targets ≥ 44×44px
- Phone number is a `tel:` link with a tap-target the size of the surrounding row
- The 5 VPP Promise cards stack vertically on mobile, equal width on desktop
- The 3 service cards stack vertically on mobile, equal width on desktop
- Hero subhead doesn't exceed 80 characters per line on mobile
- The header collapses to logo + hamburger + phone number (no nav links visible) below 768px

**Anti-pattern** — "Desktop done, now let's squish it for mobile." Mobile decisions made by reflow only, not by intent.

---

## 09 — Speed is brand

Lighthouse performance ≥ 95, LCP < 2.5s, INP < 200ms, CLS < 0.1. A site that loads slowly contradicts the brand's owner-operator-direct-response promise before the reader reads any copy.

**Why** — `brand-brief-v2.md` §06 names "modern execution" as one of five unclaimed positioning lanes. Site speed is the easiest, most measurable component of that lane. Competitors are slow; we don't need to be.

**How to apply**
- Next.js App Router with static generation for every page
- Vercel Edge Network for delivery
- All images served as WebP via `next/image`, with `priority` on above-the-fold images and lazy-load below
- Self-hosted fonts via `next/font/google` — no FOIT, no FOUT
- No client-side JavaScript on the hub unless it earns its weight (the FAQ accordion is server-rendered with `<details>`; the before/after slider is the only client-JS exception)
- Tailwind purges to ~5KB CSS in production

**Anti-pattern** — Stock builder platforms (Wix, Squarespace, GoDaddy) where the framework choice forecloses speed. Heavy hero animations that delay LCP.

---

## 10 — Local SEO is structural, not bolted-on

The hub plus 6 city service-area pages plus 3 service subpages = 10 pages on launch, each with its own LocalBusiness/Service schema, its own meta title, its own H1 with the city or service in it, and its own internal links. Local SEO is built into the file structure, not added at the end.

**Why** — Brand brief §11: "Map-pack top 3 in ≥3 of 6 cities by month 12." That target requires real per-city pages with real per-city content, not URL-parameter fakery.

**How to apply**
- `/services/cabinet-refinishing`, `/services/interior-painting`, `/services/exterior-painting`
- `/service-areas/queen-creek`, `/service-areas/chandler`, `/service-areas/gilbert`, `/service-areas/mesa`, `/service-areas/tempe`, `/service-areas/scottsdale`
- Each city page: 600–800 words minimum, neighborhood callouts (Power Ranch, Cooley Station, etc.), local-specific FAQ, local-specific schema (`Service` with `areaServed` set to the city)
- Internal links: every city page links to all 3 services; every service page links to all 6 cities
- A single sitemap.xml lists all 10 pages plus the about page = 11 total at launch

**Anti-pattern** — One page with a city dropdown. Ghost-town city pages with 80 words and a stock photo (this is the thin-content trap; Google penalizes it).

---

## 11 — The site is editable in Claude Code on a phone

Every page lives in a `.tsx` file with copy as plain prose, not as encoded JSON or CMS-managed strings. The owner-operator should be able to open the repo on a phone, read the copy, change a phone number or a city callout, and ship it.

**Why** — Brand brief §10: there is no marketing department. There is Ricardo. The site needs to be editable by the owner, not by an agency. CMS overhead pays off when 100 pages need management; at 11 pages, the friction costs more than the benefit.

**How to apply**
- All copy lives in Server Components as JSX strings
- City pages are individual files, not generated from a data array (until there are >20 of them)
- Phone number, ROC #, insurance details, business hours: a single `siteConfig.ts` file exports them; every component imports from there
- No Sanity/Contentful/Strapi/Webflow until volume justifies it
- README in the repo explains how to change the most common things in plain English

**Anti-pattern** — A Sanity setup with 11 page-document schemas. A CMS migration project that never finishes.

---

## Appendix — Principle precedence

When two principles conflict in a specific decision, the lower-numbered one wins.

Example: Principle 06 (type carries moments photography can't) might suggest filling the hero with type, but Principle 03 (the Promise is the moat) does not apply to the hero — the hero is a separate moment. No conflict.

Example: Principle 09 (speed is brand) suggests cutting a hero video; Principle 06 says type can carry the moment without the video. Both agree — drop the video, ship type.

Example: Principle 04 (Terracotta is a 10% device) conflicts with a design proposal to use a Terracotta panel for the VPP Promise background. Principle 03 (the Promise is the moat) does not require Terracotta — it requires Midnight + Terracotta numerals. Principle 04 wins. The Promise stays Midnight.

---

*Update this doc when a principle changes. Tacit drift is how brand systems die.*
