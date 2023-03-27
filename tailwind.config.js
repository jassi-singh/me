const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      darkNavy: "#0A192F",
      navy: "#112240",
      lightNavy: "#233554",
      darkSlate: "#8892B0",
      slate: "#A8B2D1",
      lightSlate: "#ccd6f6",
      white: "#e6f1ff",
      primary: colors.cyan[400],
    },
    extend: {},
  },
  plugins: [],
};
