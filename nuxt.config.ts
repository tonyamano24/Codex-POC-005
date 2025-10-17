// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Minimalist Black & White Portfolio',
      meta: [
        { name: 'description', content: 'Black and white photography portfolio featuring women, editorial, fine art, and commercial collections.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'og:title', content: 'Minimalist Black & White Portfolio' },
        { name: 'og:description', content: 'Discover evocative monochrome photography across women, editorial, fine art, and commercial galleries.' },
        { name: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/icon.svg' }
      ]
    }
  },
  css: ['@/assets/css/tailwind.css'],
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: '@/assets/css/tailwind.css',
    exposeConfig: true,
    viewer: false
  },
  typescript: {
    strict: true,
    typeCheck: false
  }
});
