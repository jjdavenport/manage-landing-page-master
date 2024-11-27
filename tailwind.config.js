/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Primary
        brightRed: "hsl(12, 88%, 59%)",
        darkBlue: "hsl(228, 39%, 23%)",

        // Neutral
        darkGrayishBlue: "hsl(227, 12%, 61%)",
        veryDarkBlue: "hsl(233, 12%, 13%)",
        veryPaleRed: "hsl(13, 100%, 96%)",
        veryLightGray: "hsl(0, 0%, 98%)",
      },
      fontFamily: {
        custom: ["be vietnam pro", "sans-serif"],
      },
      backgroundImage: {
        mobile: "url('../src/assets/bg-simplify-section-mobile.svg')",
        desktop: "url('../src/assets/bg-simplify-section-desktop.svg')",
      },
    },
  },
  plugins: [],
};
