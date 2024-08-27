/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4285F4", // Biru Muda Material Design
        mint: "#B2EBF2", // Hijau Mint
        highlight: "#9C27B0", // Ungu Muda
        "dark-gray": "#333333", // Abu-abu Tua
      },
      fontFamily: {
        "futura-bold": ["Futura-Bold", "sans-serif"],
        "futura-medium": ["Futura-Medium", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
