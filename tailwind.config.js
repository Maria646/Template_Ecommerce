/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#bfb9b7", // Gris clair
        secondary: "#32312f", // Gris fonce
      },
    },
  },
  plugins: [],
};
