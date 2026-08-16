# VOID X HUB (voidxchtgpt)

Upgraded frontend for [voidxhub.in](https://voidxhub.in) – premium mobile gaming tools & paid scrims.

## Stack
- Multi-page HTML + Tailwind CDN + Orbitron
- Design system in `css/main.css`
- Auth/credits via existing Render backend: `https://voidxhub-backend.onrender.com`
- No secrets in client code

## Pages
| Page | Description |
|------|-------------|
| index.html | Landing |
| tools.html | Tools catalog |
| ff.html | Free Fire tools |
| bgmi.html | BGMI tools |
| scrims.html | Tournaments hub |
| ffscrim.html | Free Fire scrims join |
| redirect.html | Device + pricing selection |
| payment.html | Order summary + support pay flow |
| dashboard.html | Account + credits |
| login / register | Auth |
| privacy / terms / refund / contact / about | Trust pages |

## Images
See `images/README.md`. Copy assets from the old VOIDXHUB repo into `images/`.

## Security notes
- Telegram bot tokens are **not** embedded in frontend.
- Wallet/credits must only change after **server-side** verification.
- Dashboard and payment pages are `noindex`.
- Admin checks must remain server-side (never trust `localStorage` role alone).

## Deploy
Static host (GitHub Pages / Cloudflare Pages / Netlify) + keep existing backend on Render.
Set custom domain `voidxhub.in` and update CNAME if needed.
