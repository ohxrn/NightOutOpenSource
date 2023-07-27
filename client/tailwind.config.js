// /** @type {import('tailwindcss').Config} */
// const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}' /* src folder, for example */],
  theme: {

    extend: {
      colors: {
        blue: '#1B0757',
        pink: '#DF2287',
        purple: '#6600A9',
        gray: '#2B2B2B',
        indigo: '#06BCC1',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
