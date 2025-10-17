# Minimalist Black & White Portfolio

A Nuxt 3 + Tailwind CSS photography portfolio inspired by [TonYamanoStudio.com](https://tonyamanostudio.com/). The site
features a sticky navigation bar, immersive hero, category-driven galleries, responsive lightbox, and accessible, SEO-ready
markup tailored for monochrome imagery.

## Project Structure

```
├── app.vue
├── assets
│   └── css
│       └── tailwind.css
├── components
│   ├── GallerySection.vue
│   ├── HeroSection.vue
│   ├── LightboxModal.vue
│   └── StickyNavbar.vue
├── data
│   └── galleries.ts
├── nuxt.config.ts
├── package.json
├── pages
│   └── index.vue
├── postcss.config.cjs
├── tailwind.config.ts
└── README.md
```

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Open your browser at http://localhost:3000 to view the portfolio. The design is responsive, includes smooth scrolling,
   keyboard-friendly lightbox controls, and descriptive metadata for basic SEO.

## Customisation

- Update `data/galleries.ts` to replace the sample Unsplash imagery with your own artwork and descriptions.
- Tailwind utility styles can be adjusted through `tailwind.config.ts` and the global `assets/css/tailwind.css` file.
- Modify copy and contact details within `pages/index.vue` to reflect your studio profile.

## Licensing

Sample images reference Unsplash URLs for demonstration purposes only. Replace them with assets you own or have licensed
before publishing.
