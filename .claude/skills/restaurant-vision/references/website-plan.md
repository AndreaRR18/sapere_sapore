# Website Build Plan — Sapore è Sapere

The concrete roadmap to take the current scaffold to the finished site. Built on the
established stack (**pure HTML + CSS, no JS runtime, GitHub Pages**) and the
elegant-dark theme in `css/style.css`. Apply the [vision](vision.md),
[identity](identity.md), and [tone-of-voice](tone-of-voice.md) throughout.

## Current state (done)

- 5 pages: `index.html`, `menu.html`, `vini.html`, `chef.html`, `contatti.html`.
- Shared dark theme, responsive CSS-only nav, footer, SEO meta, `.nojekyll`.
- Content sourced from the `restaurant-info` skill.
- Image assets committed in `assets/images/` (see inventory below).

## Image asset inventory

```
assets/images/
├── logo/logo.jpg                         → nav brand mark + footer + favicon source
├── chef_taglione/chef_taglione[_2..5].jpg → Chef page portrait + story images (5)
├── dishes/dish_1..6.jpg                  → Home highlights + Menù section headers (6)
├── wines/wine_1..16.jpg                  → Vini page gallery / texture (16)
├── restaurant/restaurant_1..2.jpg        → Home hero + ambience / About (2)
└── certificates/best_young_chef.jpg,
    italian_accademy.png                  → Chef page credentials (2)
```

**Before using:** optimize every image (see Performance below). Several originals are
500–650 KB; target < 200 KB each for web.

## Page-by-page plan

### Home (`index.html`)
- **Hero:** full-bleed darkened `restaurant/restaurant_1.jpg` behind the title; keep the
  *"Dove il sapore nasce dal sapere"* line. Primary CTA *Vedi il menù*, secondary *Prenota*.
- **La cucina:** the 3-pillar cards (already present) — optionally add small dish thumbs.
- **Piatti in evidenza:** new 3-up gallery from `dishes/` with dish names; links to Menù.
- **La storia (teaser):** short About + `restaurant/restaurant_2.jpg`; CTA *Conosci lo chef*.
- **Degustazione highlight:** the € 50 tasting-menu feature box (present) → CTA to Menù.

### Menù (`menu.html`)
- Keep the full structured list, prices, and HACCP/allergen notes (factual, from `restaurant-info`).
- Add a small evocative intro paragraph (see tone-of-voice sample).
- Optional: one dish image per course section header (`dishes/`) as a slim banner.
- Keep tasting menu + wine-pairing feature boxes prominent at the top.

### Vini (`vini.html`)
- Strengthen the intro (depth of 100+ labels, the pairing experience).
- Add a **wine gallery/strip** from `wines/` (lazy-loaded, optimized thumbnails).
- Keep the 3/5 calici pairing cards; CTA to Menù and Prenota.

### Chef (`chef.html`)
- **Hero/portrait:** `chef_taglione/chef_taglione.jpg`.
- Keep the narrative prose + career timeline (the heart of *sapere*).
- Intersperse `chef_taglione_2..5.jpg` alongside story beats.
- **Riconoscimenti:** small credentials block using `certificates/` images (with honest captions).
- Marika Urbani section → CTA *Scopri i dessert*.

### Contatti (`contatti.html`)
- Keep recapiti + hours table + "Apri in mappa".
- Add an embedded map *or* a static map image link (no heavy third-party JS — prefer a
  plain link or a lightweight static image to protect performance).
- Wire the real **Instagram** link once the handle is known (currently placeholder text).

## Components / polish to add

- **Logo in nav & footer:** replace the "S" monogram with `logo/logo.jpg` (sized, with alt).
- **Favicon:** regenerate from the real logo (keep current SVG as fallback).
- **Reusable gallery pattern:** CSS grid, fixed aspect ratios, `loading="lazy"`,
  `object-fit: cover` — no JS.
- **Image captions / alt text:** descriptive Italian alt on every image (accessibility + SEO).
- **Open Graph / social meta:** `og:title`, `og:description`, `og:image` (use a hero/logo).
- **Structured data:** JSON-LD `Restaurant` schema (name, address, geo, hours, phone,
  servesCuisine, priceRange) for rich search results.
- **404 page** (`404.html`) styled to match.

## Performance plan (the brand promise, technically)

1. Compress/resize all photos (e.g. `cwebp`/`mozjpeg`); offer `.webp` with `<picture>` fallback.
2. Add `loading="lazy"` and explicit `width`/`height` on all non-hero images (avoid layout shift).
3. Inline-critical CSS is optional; keep the single small stylesheet (already light).
4. Preload the hero image; keep total page weight modest on mobile.
5. Keep zero render-blocking scripts. Target Lighthouse 95+ across the board.

## Accessibility & SEO checklist

- Semantic landmarks (`header`, `nav`, `main`, `footer`) — already in place.
- Color contrast AA on dark theme (gold-on-dark verified for large text; check small text).
- Keyboard-navigable menu and visible focus styles.
- `prefers-reduced-motion` respected (already in CSS).
- Unique `<title>` + meta description per page (present) — extend with OG + JSON-LD.
- Descriptive alt text; logical heading order (one `h1` per page).

## Deployment

- GitHub Pages from `main` / `root` (`.nojekyll` present).
- Live at `https://andrearr18.github.io/sapere_sapore/`.
- Optional later: GitHub Actions workflow + custom domain.

## Suggested build phases

- **Phase 1 — Imagery & identity:** optimize assets; add real logo; hero images;
  dish highlights on Home; chef portraits + credentials; wine gallery; alt text everywhere.
- **Phase 2 — Findability & polish:** OG meta, JSON-LD `Restaurant`, map on Contatti,
  Instagram link, 404 page, favicon from logo, final performance pass.
- **Phase 3 — Optional future:** online reservation integration, multilingual (IT/EN),
  seasonal menu updates workflow, simple analytics.

## Working rule

Facts (menu, prices, hours, bios) come from **restaurant-info**. Voice, structure, and
look come from **restaurant-vision**. When the two ever seem to conflict, facts win and
the wording adapts.
