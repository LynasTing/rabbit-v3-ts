/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    textColor: {
      'ccc': '#ccc',
      'xtxColor': '#27ba9b'
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      '333': '#333',
      'page-f5': '#F5F5F5',
      'down': '#27ba9b !important'
    })
  },
  plugins: [],
}