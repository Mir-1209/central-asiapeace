# Security

## Reporting a vulnerability

Please email **info.capeacescholars@gmail.com** with details. Please do not open a public issue for security
problems. See also `/.well-known/security.txt` on the live site.

## What the site does to stay secure

- **Static only.** Every page is pre-rendered at build time. There are no API routes, databases, logins,
  forms, or server-side user input. Applications are collected through an external form, linked from the site.
- **No third parties.** No analytics, trackers, cookies, embeds, or external scripts. Fonts and images are
  self-hosted.
- **HTTP security headers** (configured in `next.config.ts`, applied to every route):
  - `Content-Security-Policy` — only same-origin resources; `object-src 'none'`, `frame-ancestors 'none'`,
    `base-uri 'self'`, `form-action 'self'`, `upgrade-insecure-requests`
  - `Strict-Transport-Security` — 2 years, includeSubDomains, preload
  - `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy` — camera, microphone, geolocation, payment, etc. disabled
  - `Cross-Origin-Opener-Policy` and `Cross-Origin-Resource-Policy: same-origin`
  - `X-Powered-By` header removed
- **Safe external links.** Links that open a new tab use `rel="noopener noreferrer"`.
- **Secrets.** None are needed. `.env*` files are git-ignored.
- **Dependencies.** CI runs lint, type-check, build and `npm audit`; Dependabot opens weekly update PRs.

Note: `script-src` allows `'unsafe-inline'` because Next.js inlines small hydration scripts, and using a
per-request nonce would force every page to be rendered dynamically. Because the site renders no user-supplied
content and loads nothing from other origins, the practical XSS risk is minimal.
