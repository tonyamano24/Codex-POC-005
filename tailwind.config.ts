import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './app.{js,ts,vue}',
    './error.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Work Sans"', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'serif']
      },
      colors: {
        ink: '#0b0b0b',
        cloud: '#f5f5f5',
        mist: '#d9d9d9'
      }
    }
  },
  plugins: []
} satisfies Config
