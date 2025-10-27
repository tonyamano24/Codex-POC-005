# Monochrome Muse — Nuxt 3 Photography Portfolio

A minimalist black-and-white photography portfolio built with Nuxt 3 and Tailwind CSS. Inspired by TonYamanoStudio.com, the layout features a sticky navigation bar, immersive hero, curated category galleries, an accessible lightbox, and a thoughtfully presented studio overview.

## Getting Started

```bash
pnpm install # or npm install / yarn install
pnpm dev     # start the Nuxt development server on http://localhost:3000
```

## Project Structure

```
.
├── app.vue
├── assets
│   └── css
│       └── tailwind.css
├── components
│   ├── AboutSection.vue
│   ├── GallerySection.vue
│   ├── HeroSection.vue
│   ├── Lightbox.vue
│   ├── SiteFooter.vue
│   └── SiteNavbar.vue
├── data
│   └── galleries.ts
├── nuxt.config.ts
├── package.json
├── pages
│   └── index.vue
├── public
│   └── images
│       ├── commercial-fragrance.jpg
│       ├── commercial-light.jpg
│       ├── commercial-texture.jpg
│       ├── editorial-geometry.jpg
│       ├── editorial-midnight.jpg
│       ├── editorial-shadow.jpg
│       ├── fineart-echo.jpg
│       ├── fineart-stone.jpg
│       ├── fineart-veil.jpg
│       ├── women-poise.jpg
│       ├── women-strength.jpg
│       └── women-threshold.jpg
├── tailwind.config.ts
└── README.md
```

> The image files referenced above are placeholders — replace them with your own monochrome photography assets. Alt text and descriptive copy are intentionally crafted for accessibility and SEO.

## Features

- Sticky, transparent navigation that anchors to portfolio categories
- Hero section with typographic emphasis and smooth-scrolling calls to action
- Four curated portfolio categories (Women, Editorial, Fine Art, Commercial) plus studio About section
- Responsive gallery grid with hover reveals and accessible lightbox experience
- Tailwind CSS for rapid styling with custom monochrome palette and typography
- Basic SEO metadata (title, description, keywords) configured via `nuxt.config.ts`
- Focus on semantic markup, accessible controls, and high-contrast presentation

## Deployment

Build the optimized production bundle and start the server:

```bash
pnpm build
pnpm start
```

Nuxt will output the server-ready application to `.output`. Deploy to any Node-compatible hosting provider or static host with serverless adapters.
