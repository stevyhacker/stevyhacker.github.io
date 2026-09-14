# Cloudflare deployment

Deploy the Vite build and the copied `blog/` archive as Cloudflare Workers
static assets using `wrangler.jsonc`.

- Production branch: `master`.
- Install: `npm ci --include=dev`.
- Build: `npm run build` (the Vite hook also copies the blog archive).
- Deploy: `npx wrangler@4.131.2 deploy`.
- Domains: `bogosavljevic.me`, `www.bogosavljevic.me`, `stevan.bogosavljevic.me`.
- No runtime secrets are required.

Verify the homepage, archived article paths and assets at the Workers URL
before switching DNS. Preserve existing Cloudflare mail and verification records.
