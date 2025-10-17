import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './plugins/**/*.{js,ts}',
    './app.{vue,js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0f0f0f',
        paper: '#f5f5f5'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        focus: '0 0 0 3px rgba(15, 15, 15, 0.35)'
      }
    }
  }
}
