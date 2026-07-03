# CLAUDE.md

The public marketing site for ViewOps AI (viewopsai.com). Astro + Tailwind, deployed to GitHub
Pages by `.github/workflows/deploy.yml` on push to main. The product lives in the separate
`sgmaze/viewops` repo; this repo is content and presentation only.

## Brand rails (always)
- Lead with "AI agent". "Digital worker" at most once per page as a gloss, never repeated.
- No em-dashes in any copy. Use periods or commas.
- Honest claims only: no fabricated logos, testimonials, or metrics. Compliance language is
  "control sets built, attestation program underway" until the attestations exist.
- Every screenshot and video shows synthetic business data only. No real customer data, ever.
- The core lines: "The governed AI workforce for back-office operations" and "Supervised until
  proven. Autonomous once trusted."

## Perishable facts
Product facts that go stale (video length, demo apps, counts, offer terms) live ONLY in
`src/data/facts.ts`. Pages import from there; a facts refresh is a one-file change.

## Media
Videos and stills under `public/media/` are exported from the product repo's demo tooling
(`demo/build_product_video.py` builds the videos; stills are frames from the master). To refresh:
rebuild there, re-copy here. They are committed (small enough for Pages); if the master ever grows
past ~50 MB, move it to external hosting and keep only the teaser here.

## Build and run
- `npm install`, `npm run dev` (local), `npm run build` (must pass before push).
- Deploys from main. Keep changes on a branch + PR when they are substantial; tiny copy fixes may
  go straight to main.
