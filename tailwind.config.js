module.exports = {
  content: ["./**/*.html", "config.toml"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        warmgray: {
          700: "#2f3335",
          800: "#1e2022",
          900: "#3d2c26",
        },
      },
      fontFamily: {
        'sans': ['"Ubuntu Mono"', "monospace"]
      }
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
