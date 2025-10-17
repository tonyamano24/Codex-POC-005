// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Monochrome Muse — Black & White Photography Portfolio',
      meta: [
        { name: 'description', content: 'A minimalist black-and-white photography portfolio featuring editorial, fine art, commercial, and portrait work.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:title', content: 'Monochrome Muse — Black & White Photography Portfolio' },
        { property: 'og:description', content: 'Explore a curated black-and-white photography collection with galleries for women, editorial, fine art, and commercial work.' },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap' }
      ]
    }
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.ts',
    exposeConfig: false,
    viewer: false
  },
  experimental: {
    payloadExtraction: false
  }
})
