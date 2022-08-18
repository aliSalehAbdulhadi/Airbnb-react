/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cerealLight: ['cerealLight', 'cursive'],
        cerealMedium: ['cerealMedium', 'cursive'],
        cerealBold: ['cerealBold', 'cursive'],
        cerealExtraBold: ['cerealExtraBold', 'cursive'],
        cerealNormal: ['cerealNormal', 'cursive'],
        cerealDk2: ['cerealDk2', 'cursive'],
      },
      colors: {
        primary: '#FF5A5F',
      },
    },
    screens: {
      xs: '420px',
      sm: '640px',
      semiSm: '840px',
      md: '1100px',
      lg: '1280px',
      xl: '1300px',
      xxl: '1450px',
      xxxl: '1600px',
    },
  },
  plugins: [],
};
