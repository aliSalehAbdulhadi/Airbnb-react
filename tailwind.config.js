/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cerealLight: ["cerealLight", "cursive"],
        cerealMedium: ["cerealMedium", "cursive"],
        cerealBold: ["cerealBold", "cursive"],
        cerealExtraBold: ["cerealExtraBold", "cursive"],
      },
      colors: {
        primary: "#FF5A5F",
      },
    },
  },
  plugins: [],
};
