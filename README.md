# VOID X HUB (voidxchtgpt)

Upgraded production-ready version of **VOID X HUB**.

**Target domain:** [voidxhub.in](https://voidxhub.in)

## Stack
- Multi-page HTML + Tailwind CSS (CDN)
- Vanilla JavaScript
- Auth & Credits backend: `voidxhub-backend.onrender.com`
- Branding: Cyber / Neon / Orbitron font

## Goals
- Polish to 9/10+ product quality
- Strong SEO & accessibility
- Secure (no secrets in frontend)
- Fast & fully responsive
- Keep original VOID X HUB identity

## Key Pages
| Page | Description |
|------|-------------|
| `index.html` | Homepage |
| `tools.html` | Tools catalog |
| `dashboard.html` | User dashboard + wallet |
| `login.html` / `register.html` | Authentication |
| Legal pages | Privacy, Terms, Refund |
| `robots.txt` + `sitemap.xml` | SEO |

## Security Notes
- Never expose Telegram bot tokens or payment secrets in client-side code
- All wallet/credit changes must be verified server-side
- Use httponly cookies + proper session handling

Built by **YASHXCHI** • 2026
