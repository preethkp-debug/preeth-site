# Preeth KP — Personal Consultant Website

A full static site built as a personal consulting brand for Preeth KP — independent digital growth & AI marketing consultant, founder of TechPlugged.

## Pages

| Page | Path | Purpose |
|---|---|---|
| Home | `index.html` | Hero, services preview, work preview, testimonials, blog feed, lead magnet |
| About | `about.html` | Bio, timeline, principles, toolbox |
| Services | `services.html` | Five service tracks, three engagement models, process, FAQ |
| Work | `work.html` | Five long-form case studies with stats |
| Blog | `blog.html` | In-house essays + live TechPlugged headlines + Instagram strip |
| Featured post | `post-ai-marketing-stack.html` | Sample long-form essay |
| Contact | `contact.html` | Discovery call form with budget pills |

## Theme

Dark cream-on-black with vivid gradient accents (cyan → magenta → coral → mint), heavily inspired by the visual language of `theunknown.tv/en` while using entirely original copy and code. Uses Space Grotesk + Instrument Serif italic + JetBrains Mono.

## Interactive features

- Custom blended-difference cursor with hover state
- Hero word-rotator (revenue → pipeline → demand → compounding growth)
- Animated gradient blobs with mouse parallax
- Scroll-triggered reveal & stagger animations (IntersectionObserver)
- Animated counters
- Continuous-loop word marquee
- Drag-to-scroll testimonial track
- Single-open FAQ accordion with animated +/×
- Live IST clock in nav meta
- Demo lead-capture and contact forms (no backend)

## Hosting

Pure HTML/CSS/JS — drop the `preeth-site/` folder onto:

- Netlify (drag-and-drop deploy)
- Vercel (`vercel deploy --prod`)
- Cloudflare Pages
- GitHub Pages
- Any static host

## What to swap before going live

1. **Photos** — gradient placeholders on `about.html` and `blog.html` Instagram strip should be replaced with real photos in `assets/`.
2. **Case study details** — names, numbers and write-ups in `work.html` are illustrative; swap with your real receipts.
3. **Form backends** — `data-fake` attribute on each form blocks submission. Connect to Formspree, Basin, Netlify Forms, or your CRM.
4. **Booking link** — hero & contact CTA point to a `mailto:` — replace with a Cal.com / Calendly URL.
5. **Newsletter** — wire the lead-magnet form to Beehiiv, ConvertKit, or Loops.
6. **Analytics** — drop in your GA4 / Plausible / PostHog snippet.

## Files

```
preeth-site/
├── index.html
├── about.html
├── services.html
├── work.html
├── blog.html
├── post-ai-marketing-stack.html
├── contact.html
├── README.md
└── assets/
    ├── styles.css
    └── main.js
```

## Personal links wired in

- LinkedIn: <https://linkedin.com/in/preethkp>
- Instagram: <https://instagram.com/preeth.insta>
- TechPlugged: <https://techplugged.com>
- Email: hello@techplugged.com
