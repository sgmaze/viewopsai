# viewopsai.com

The public site for ViewOps AI: the governed AI workforce for back-office operations.
Astro + Tailwind, deployed to GitHub Pages on push to main.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build into dist/
```

## Deployment

`.github/workflows/deploy.yml` builds and deploys to GitHub Pages on every push to main.
One-time repo setup: Settings -> Pages -> Source: **GitHub Actions**.

## Custom domain (viewopsai.com)

1. In Settings -> Pages set the custom domain to `viewopsai.com` (the repo also carries
   `public/CNAME`, which the build publishes).
2. At your DNS provider, point the apex at GitHub Pages:
   - `A` records for `viewopsai.com` -> `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`
   - optional but recommended `AAAA` records -> `2606:50c0:8000::153`, `2606:50c0:8001::153`,
     `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - `CNAME` record for `www` -> `sgmaze.github.io`
3. Back in Settings -> Pages, tick **Enforce HTTPS** once the certificate is issued (can take a
   few minutes after DNS propagates).

## Editing content

- Perishable product facts (video length, demo apps, contact email): `src/data/facts.ts` only.
- Page copy and sections: `src/pages/index.astro`.
- Brand rails for any contributor (human or AI): `CLAUDE.md`.
- Media under `public/media/` is exported from the product repo's demo tooling; rebuild there,
  re-copy here.

Open items: stand up the `hello@viewopsai.com` mailbox (or change `contactEmail` in
`src/data/facts.ts` before sharing the site).
