# dp.cards Deployment And HTTPS

The storefront is a static site. Any modern static host can serve it over HTTPS.

## Fastest HTTPS Path: Cloudflare Pages

1. Create a Cloudflare Pages project for this folder.
2. Set the production branch or upload the `dp-cards-site` folder directly.
3. Add the custom domain `dp.cards` in Pages.
4. In DNS, let Cloudflare create the records, or use:
   - `dp.cards` as a CNAME/flattened record to the Pages target.
   - `www.dp.cards` as a CNAME to the same Pages target.
5. In SSL/TLS, enable:
   - Full or Full (strict)
   - Always Use HTTPS
   - Automatic HTTPS Rewrites
6. After the certificate is active, test:
   - `https://dp.cards`
   - `https://www.dp.cards`

The `_headers` file is included for Cloudflare Pages and Netlify-style static hosts.

## VPS HTTPS Path: Caddy

1. Copy this folder to `/srv/dp-cards-site`.
2. Copy `Caddyfile` to `/etc/caddy/Caddyfile`.
3. Point DNS A/AAAA records for `dp.cards` and `www.dp.cards` to the server.
4. Start or reload Caddy.

Caddy will request and renew Let's Encrypt certificates automatically.

## Contact Info

Current value in `index.html`:

- WhatsApp: `+65 8119 4552`

The contact form currently prepares a WhatsApp message to the phone number above. A backend, CRM, or form service can replace it later.
