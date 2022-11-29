/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {},
    // textColor: theme => theme('colors'),
    textColor: {
      white: 'white',
      'ccc': '#ccc',
      xtxColor: '#27ba9b',
      '666':'#666',
      '999':'#999',
      priceColor: '#cf4444'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      // gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      '333': '#333',
      'page-f5': '#F5F5F5',
      'down': '#27ba9b !important',
      'xtxColor': '#27ba9b',
      ccc: '#ccc',
      goods: '#f0f9f4',
      layerBg: '#e3f9f4'
    })
  },
  plugins: [],
}