module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      display: ["Display", "sans-serif"],
      text: ["Text", "sans-serif"],
      source: ["Source Code Pro", "monospace"],
    },

    extend: {
      screens: {
        "pc-hover": { raw: "(hover: hover)" },
      },
      keyframes: {},
    },
  },
  plugins: [],
};
