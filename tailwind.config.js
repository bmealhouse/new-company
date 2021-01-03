const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // blue: colors.lightBlue,
        gray: colors.warmGray,
        orange: colors.orange,
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      // animation: {
      //   cycle: "cycle 3s infinite",
      // },
      // colors: {
      //   "accent-1": "#333",
      // },
      // height: {
      //   "60px": "60px",
      // },
      // keyframes: {
      //   cycle: {
      //     "0%, 30%": {
      //       transform: "translateY(-183px)",
      //       animationTimingFunction: "ease-in-out",
      //     },
      //     "32%": {
      //       transform: "translateY(-120px)",
      //       animationTimingFunction: "ease-in-out",
      //     },
      //     "33%, 63%": {
      //       transform: "translateY(-123px)",
      //       animationTimingFunction: "ease-in-out",
      //     },
      //     "65%": {
      //       transform: "translateY(-60px)",
      //       animationTimingFunction: "ease-in-out",
      //     },
      //     "66%, 96%": {
      //       transform: "translateY(-63px)",
      //       animationTimingFunction: "ease-in-out",
      //     },
      //     "98%": {
      //       transform: "translateY(0)",
      //       animationTimingFunction: "ease-in-out",
      //     },
      //     "99%, 100%": {
      //       transform: "translateY(-3px)",
      //       animationTimingFunction: "ease-in-out",
      //     },
      //   },
      // },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
