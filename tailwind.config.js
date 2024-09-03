/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A7C7F9", // Biru Muda Pastel
        mint: "#CFF7F8", // Hijau Mint Pastel
        cream: "#F8F8F0", // Putih Krim (tetap sama)
        accent: "#F9B2B2", // Merah Pastel
        success: "#A8E6A3", // Hijau Muda Pastel
        highlight: "#D1A7E5", // Ungu Muda Pastel
        "dark-gray": "#666666", // Abu-abu Tua (lebih terang)
        "pastel-yellow": "#F9F3B2", // Kuning Pastel tambahan
        "pastel-pink": "#F9C4D2", // Pink Pastel tambahan
        "pastel-purple": "#D4C1F5", // Ungu Pastel tambahan
      },
      fontFamily: {
        "futura-bold": ["Futura-Bold", "sans-serif"],
        "futura-medium": ["Futura-Medium", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        ":root": Object.keys(theme("colors")).reduce((vars, color) => {
          const value = theme(`colors.${color}`);
          if (typeof value === "string") {
            vars[`--color-${color}`] = value;
          }
          return vars;
        }, {}),
      });
    }),
  ],
};
