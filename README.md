# Valley Painting Pros — Hub

Marketing site for Valley Painting Pros, residential painters serving the East Valley of Arizona (Queen Creek, Chandler, Gilbert, Mesa, Tempe, Scottsdale).

Live preview: TBD (Vercel) · Production domain: `valleypaintingpros.com`

## Project source-of-truth docs

- [`CLAUDE.md`](./CLAUDE.md) — locked brand system (colors, typography, design grammar, voice)
- [`docs/brand-brief-v2.md`](./docs/brand-brief-v2.md) — strategy, customer segments, offers, KPIs
- [`docs/design-research.md`](./docs/design-research.md) — 11 design principles
- [`docs/about-story.md`](./docs/about-story.md) — locked About copy
- [`docs/VPP_Landing_Page_Skeleton.pdf`](./docs/VPP_Landing_Page_Skeleton.pdf) — 12-section page architecture

If the brand brief and `CLAUDE.md` disagree on a visual, **`CLAUDE.md` wins on visuals**, the brief wins on strategy.

## Tech

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 (CSS-first config in `src/app/globals.css`)
- Turbopack for dev + build
- Fonts: Montserrat Black (display) + Source Sans 3 (body) via `next/font/google`
- Deployed on Vercel

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Edit copy in `src/lib/siteConfig.ts` — that's the single source of truth for phone, email, hours, license, services, service area, and the 5-piece VPP Promise. Every component pulls from there.

## Deploy

Pushes to `main` auto-deploy via Vercel.

## Brand assets

- `public/logos/` — SVG logos (icon, mono, stacked lockup, horizontal lockup)
- `public/photos/` — production photography
- `docs/brand-archive/` — original brand iterations (raster + raw vectorizer SVG uploads)

## License

Proprietary. AZ ROC #363664.
