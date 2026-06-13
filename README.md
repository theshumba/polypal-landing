# PolyPal — Landing Page & Waitlist

A single-file, zero-build landing page + email waitlist for **PolyPal** — practise Spanish on live video with a real partner, while an AI teacher corrects you in colour as you chat.

**Vibe:** Duolingo-playful energy in the Spanish-flag palette (rojo `#C60B1E` + gualda `#FFC400`), anchored by the PolyPal octopus mascot (drawn as inline animated SVG — no image files needed).

## What's here
- `index.html` — the entire page. HTML, CSS and JS inline. Open it in any browser.

## Wire up the waitlist (1 minute)
The form works in **demo mode** out of the box (signups are counted in `localStorage` so you can test). To collect real emails:

1. Go to [formspree.io](https://formspree.io) → create a free form → copy your endpoint (looks like `https://formspree.io/f/abcdwxyz`).
2. Open `index.html`, find this line near the bottom:
   ```js
   var FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
   ```
3. Replace `YOUR_FORM_ID` with your real form ID. Done — submissions now land in your Formspree inbox.

## Deploy to GitHub Pages
```bash
cd ~/Documents/GitHub/polypal-landing
git init && git add -A && git commit -m "PolyPal landing page"
gh repo create polypal-landing --public --source=. --push   # or push to a repo you made
```
Then in the repo: **Settings → Pages → Branch: `main` / root → Save.** Live at `https://<you>.github.io/polypal-landing/` in a minute.

## Features baked in
- Animated octopus mascot (wiggling tentacles, blinking, bobbing)
- Hero with floating `¿ ñ ¡ á` accent motifs
- Live-correction **demo animation** (types a sentence → flags mistakes in colour → snaps to the fix → "¡Perfecto!")
- 3-step "how it works", feature grid, scrolling games marquee
- Count-up stats + urgency band
- Duolingo-style 3D buttons, scroll reveals, confetti on signup
- Fully responsive · respects `prefers-reduced-motion`

## Honest-copy note
The page describes the AI teacher as real inline correction UX (which it is). Per `ABOUT.md`, the underlying "AI" is currently rule-based — the page intentionally avoids over-claiming a full LLM.
