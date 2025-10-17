// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Monochrome Muse — Fine Art Photography',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'A minimalist black-and-white photography portfolio featuring editorial, fine art, and commercial work by Monochrome Muse.'
        },
        { name: 'keywords', content: 'photography, black and white, portfolio, fine art, editorial, commercial' }
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
    }
  },
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  runtimeConfig: {
    public: {
      siteName: 'Monochrome Muse'
    }
  }
})
