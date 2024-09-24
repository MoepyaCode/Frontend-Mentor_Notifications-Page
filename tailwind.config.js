/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
    }),
    extend: {
      fontFamily: {
        'plus-jakarta': ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        blue: '#0A327B',
        grey: {
          'very-dark': '#1C202B',
          'dark': '#5E6778',
          default: '#939CAD',
          'light': '#E5EFFA',
          'very-light': '#DDE7EE',
        },
        snow: '#F7FAFD',
        red: '#F65552',
      }
    },
  },
  plugins: [],
}