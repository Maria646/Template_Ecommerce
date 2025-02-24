/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#32312f", // Gris fonce
        secondary: "#d9d1ce", // Gris clair
      },
      fontFamily:{
        'ela-demiserif': ['Ela Demiserif', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
