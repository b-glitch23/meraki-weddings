/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FAF6F0",
        blush: "#E8C4B8",
        rose: "#C98A78",
        charcoal: "#3A2E2A",
        champagne: "#C9A66B",
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'Jost'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
