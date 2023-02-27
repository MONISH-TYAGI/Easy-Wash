/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],

  theme: {
    extend: {
      colors:{
        'drymeBlue':'#194376',
        'select':'#46C6CE',
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}