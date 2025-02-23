/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#c5955d", // Gris clair
        secondary: "#442207", // Gris fonce
        accent: "#5c5506", // Gris fonce
        clair:"#b7bdbb"
      },
    },
  },
  plugins: [],
};
