/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#dfeeff',
          200: '#b8dbff',
          300: '#7abfff',
          400: '#3a9eff',
          500: '#1E3A5F',
          600: '#162D4A',
          700: '#0f2038',
          800: '#0a1525',
          900: '#050b13',
        },
        accent: {
          DEFAULT: '#F59E0B',
          light: '#FCD34D',
          dark: '#D97706',
        },
      },
    },
  },
  plugins: [],
}