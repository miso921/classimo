module.exports = {
  content: ["./**/*.html"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        transperent: 'transperent',
        current: 'currentColor',
        black: "#1c1c1c",
        lightred: "#FF4747",
        lightyellow: "#FFE999",
        lightwhite: "#F7F9FB",
        lightblue: {
          "100": "#E3F5FF",
          "200": "#B1E3FF",
          "300": "#A8C5DA",
        },
        lightpurple: {
          "100": "#E5ECF6",
          "200": "#C6C7F8",
          "300": "#95A4FC",
        },
        lightgreen: {
          "100": "#BAEDBD",
          "200": "#A1E3CB",
        },
      },
      boxShadow: {
        "3xl": "0 0 16px rgb(0 0 0 / 10%)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "base", // only generate global styles
    }),
    require('tailwind-scrollbar'),
    require('@tailwindcss/line-clamp'),
  ],
};
