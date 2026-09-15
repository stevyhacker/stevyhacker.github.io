# Cloudflare deployment

Deploy the Vite build and the copied `blog/` archive as Cloudflare Workers
static assets using `wrangler.jsonc`.

- Production branch: `master`.
- Install: `npm ci --include=dev`.
- Build: `npm run build` (the Vite hook also copies the blog archive).
- Deploy: `npx wrangler@4.131.2 deploy`.
- Domains: `bogosavljevic.me`, `www.bogosavljevic.me`, `stevan.bogosavljevic.me`.
- No runtime secrets are required.

The custom domains are declared in Wrangler. The Cloudflare zone Redirect Rule
in `cloudflare/redirect-rules.json` preserves the apex-to-www redirect using HTTP
308 with the original path and query string. `stevan.bogosavljevic.me` continues
serving the site directly. Zone rules are managed separately from Wrangler.
Back up and remove only conflicting website A/CNAME records before attaching the
Worker domains, then enable the canonical rule after DNS is proxied.

Verify the homepage, archived article paths and assets at the Workers URL
before switching DNS. Preserve existing Cloudflare mail and verification records.
