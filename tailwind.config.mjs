import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      stone: colors.stone,
      teal: colors.teal,
      indigo: colors.indigo,
    },
    extend: {
      colors: {
        stone: {
          1100: "#111110",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      maxWidth: {
        custom: "692px",
      },
    },
  },
  plugins: [],
};
