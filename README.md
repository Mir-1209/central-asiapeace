# Central Asia Peace Scholars Program — Website

The official website of the **Central Asia Peace Scholars Program**, a 4-month peace education, conflict
resolution, and human rights program for young people aged 16–24 from Kazakhstan, Kyrgyzstan, and Tajikistan.

Built with [Next.js](https://nextjs.org) (App Router, TypeScript). Every page is pre-rendered as static HTML,
so the site is fast, cheap to host, and has no server-side attack surface.

## Pages

| Route      | Page             |
| ---------- | ---------------- |
| `/`        | Home             |
| `/about`   | About Us         |
| `/program` | Program Overview |
| `/apply`   | Apply            |
| `/contact` | Contact Us       |

## Editing content

**Almost all text lives in [`lib/content.ts`](lib/content.ts).** Edit it and the pages update — no design code needed.

- **Team (About Us):** fill in the `team` list with each person's name (first name + last initial), country, role
  and short bio from the coordinator spreadsheet. Put photos in `public/team/` (e.g. `public/team/kristie.jpg`)
  and set `photo: "/team/kristie.jpg"`. Without a photo, a colored card with initials is shown.
- **Program Overview:** edit the `program` object (at-a-glance facts, the four-month journey, outcomes).
  When session dates are decided, update `program.schedule`.
- **Application link / deadline / email:** edit the `site` object at the top of the file.

## Brand

- Font: **Montserrat** (self-hosted via `@fontsource/montserrat`, no Google requests)
- Brand blue: `#0F7DAD` · Ink `#06202E` · Sun `#F5B83D` · Paper `#F6F2EA`
- Logos live in `public/brand/`. Favicons and the social-share image are in `app/`
  (`icon.png`, `apple-icon.png`, `opengraph-image.png`, `twitter-image.png`).

## Local development

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run typecheck
npm run build      # production build
```

## Deploying to Vercel

1. Import this repository at [vercel.com/new](https://vercel.com/new). Vercel detects Next.js automatically —
   no settings need to be changed.
2. *(Optional)* Once you have a custom domain, add an environment variable
   `NEXT_PUBLIC_SITE_URL=https://your-domain.org` so canonical links, the sitemap and social previews use it.
   Without it, the Vercel production domain is used automatically.

## Security

See [SECURITY.md](SECURITY.md). In short: strict security headers on every response (CSP, HSTS, framing
protection, etc.), no third-party scripts, trackers, or cookies, no forms or user data collected on the site,
safe external links, dependency audits in CI and weekly Dependabot updates.
