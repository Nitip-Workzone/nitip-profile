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
          50: '#eef6ff',
          100: '#d9ebff',
          200: '#bce0ff',
          300: '#8ecfff',
          400: '#5ab6ff',
          500: '#0062cc',
          600: '#004da6',
          700: '#023c85',
          800: '#052a6b',
          900: '#052066',
        },
        accent: {
          DEFAULT: '#00c0c0',
          light: '#33cccc',
          dark: '#009999',
        },
      },
    },
  },
  plugins: [],
}