# PolyPal — Landing Page & Waitlist

A single-file, zero-build landing page + email waitlist for **PolyPal** — practise Spanish on live video with a real partner, while an AI teacher corrects you in colour as you chat.

**Vibe:** Duolingo-playful energy in the Spanish-flag palette (rojo `#C60B1E` + gualda `#FFC400`), anchored by the PolyPal octopus mascot (drawn as inline animated SVG — no image files needed).

## What's here
- `index.html` — the entire page. HTML, CSS and JS inline. Open it in any browser.

## Wire up the waitlist → Google Sheet (~3 minutes)
The form works in **demo mode** out of the box (signups are only counted in the visitor's own `localStorage` — **no emails are saved**). To collect real emails into a Sheet your co-founders can see:

1. **Make a Sheet.** Create a new Google Sheet. In row 1, add headers: `Timestamp | Email | Source | Referrer`.
2. **Add the script.** In that Sheet: **Extensions → Apps Script**. Delete the sample code, paste the contents of [`apps-script/Code.gs`](apps-script/Code.gs), and **Save**.
3. **Deploy it.** **Deploy → New deployment → Web app.** Set **Execute as: Me**, **Who has access: Anyone**. Click **Deploy**, authorise, and **copy the Web app URL** (ends in `/exec`).
4. **Paste the URL.** Open `index.html`, find this line near the bottom and paste your URL:
   ```js
   var SHEET_ENDPOINT = "PASTE_YOUR_APPS_SCRIPT_EXEC_URL_HERE";
   ```
   Done — every signup now appends a row to your Sheet (duplicate emails are skipped).

### Give your co-founders access
In the Sheet, click **Share** (top-right) → add their Google emails as **Viewer** (read-only) or **Editor**. They'll see the live waitlist update in real time — no logins to your accounts, nothing to forward.

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
