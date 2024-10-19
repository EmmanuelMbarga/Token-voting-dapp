/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      screens: {
        MiniPortable: { max: '288px' },
        mobil: { min: '289px', max: '480px' },
        Tablette: { min: '481px', max: '761px' },
        Laptop: { min: '762px', max: '1025px' },
        screenLarge: { min: '1026px' },
      },
    },
  },
  plugins: [],
};
