# VPP Hub — Outstanding TODOs

Placeholder content that needs to be backfilled. Keep this file current — anything that ships as a placeholder gets a line here so nothing is forgotten.

## Photography

- [ ] **Hero photo** — real photo of Ricardo + work van + a finished East Valley home. Currently using `scottsdale-exterior.png` as the home backdrop. Target aspect: ~16:9 or 21:9, min 1920×1080.
- [ ] **Five Promises photos** — one real photo per promise. Suggested:
  - 01 ($300/day): screenshot of a contract clause OR a wall-calendar with the finish date circled
  - 02 (HOA): stamped HOA architectural-review approval letter
  - 03 (Daily photos): screenshot of a real photo-update SMS thread
  - 04 (Lifetime kit): photo of a sealed touch-up kit with wall labels
  - 05 (12-month check): photo of Ricardo on a return walkthrough
- [ ] **Founder photo** for /about page — Ricardo (and optionally Gereimy) on a job site in a VPP polo
- [ ] **Original work-van era photo** — for the About page (history beat)
- [ ] **Cabinet + Interior + Exterior service-page hero shots** — one signature photo per service
- [ ] **Per-city photos** — 2–3 jobs in each of the 6 cities (Queen Creek priority, most depth)

## Video

- [ ] **Owner video** (60–90s) — Ricardo intro + the franchise-painter corner-cutting story + CTA. Self-hosted MP4 with poster image OR unbranded Vimeo. Place between Problem section and Five Promises on homepage. Avoid YouTube branding.
- [ ] **Video testimonials** — 3 total, one per service (cabinet, interior, exterior). Embed on home + matching service page.

## PDFs / Documents

- [ ] **Sample contract PDF** — redacted real VPP contract with the Five Promise clauses highlighted. Hosted at `/sample-contract.pdf`. Linked from Five Promises section ("Download a sample contract → see the clauses for yourself").
- [ ] **HOA Color & Estimate Guide PDF** (8–12 pages) — lead magnet. Hosted at `/east-valley-hoa-guide.pdf`. Gated behind name + email capture. Contents per brief 3.4.

## Integrations

- [ ] **PaintScout integration** — multi-step form should pipe directly into PaintScout Sales. Until that integration exists, fall back to Resend or Postmark email-to-Ricardo. Surface as a TODO inside the form's submit handler.
- [ ] **Email service** — provision `info@valleypaintingpros.com` Google Workspace inbox + Resend/Postmark API key for transactional email.
- [ ] **Meta Pixel + Google Ads tag** — for retargeting (Phase 3 4.5). Fire on: home view, service-page view, form-step-1 complete, form-step-2 complete, full submit.
- [ ] **Analytics** — GA4 wired with proper events for form-step funnel.

## Content (placeholder copy that needs Ricardo's voice)

- [ ] **City pages** (Queen Creek + 5 others) — 150–300 words of genuinely local content per page (named neighborhoods, master-planned communities, climate considerations, common home styles). Names of HOAs we've worked in.
- [ ] **HOA Champion page** — list of HOAs/communities VPP has worked in. Start with placeholders (Encanterra, Power Ranch, Trilogy, Eastmark, Las Sendas, Morrison Ranch). Replace as real ones accumulate.
- [ ] **City-specific testimonials** — 2–3 per city. Placeholder until they exist.
- [ ] **Service-page paint-tier breakdowns** — actual product lines per tier from PaintScout (good/better/best, named).
- [ ] **Service-page pricing ranges** — confirmed actual numbers ("Most kitchens: $4,800–$9,500" etc.) with the "what determines your price" explainer.

## Reviews

- [ ] **Google reviews widget** — pull live (not screenshotted). Currently `7 five-star reviews on Google` is hardcoded. When reviews cross 10, add `AggregateRating` schema and update the hero count.

## Phase 1 — Five Promises specific clause language

Each clause subtext below is a draft. Confirm against Ricardo's actual contract or refine with him before shipping.

- 01: `Section 4.2: If Contractor fails to achieve substantial completion by the contracted finish date for any reason other than (a) weather, (b) HOA approval delays, or (c) Owner-initiated change orders, Contractor shall credit Owner $300 per business day until completion.`
- 02: `Section 6.1: Contractor shall prepare and submit the Architectural Review Committee package on Owner's behalf at no additional charge, including one free resubmission if the initial proposal is denied.`
- 03: `Section 8.3: Contractor shall send Owner four (4) progress photographs per working day via SMS: morning setup, mid-morning prep complete, afternoon paint in progress, end-of-day stop point.`
- 04: `Section 11.4: Upon substantial completion, Contractor shall deliver a Touch-Up Kit containing one (1) sealed quart of each color used, a brush, and a written log identifying which color was applied to which surface. Re-orders are free for the duration of Owner's residence at the Property.`
- 05: `Section 12.1: Twelve (12) months after substantial completion, Contractor shall perform a thirty (30) minute on-site Wellness Walkthrough at no charge. Workmanship issues identified at the Wellness Walkthrough shall be touched up at no charge.`
