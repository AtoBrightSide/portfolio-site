/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brightRed: "hsl(12, 88%, 59%)",
        brightRedLight: "hsl(12, 88%, 69%)",
        brightRedSupLight: "hsl(12, 88%, 95%)",
        darkBlue: "hsl(228, 39%, 23%)",
        darkGrayishBlue: "hsl(227, 12%, 61%)",
        veryDarkBlue: "hsl(233, 12%, 13%)",
        veryPaleRed: "hsl(13, 100%, 96%)",
        veryLightGray: "hsl(0, 0%, 98%)",
        hotmag: "#05386b",
      },
      animation: {
        float: "float 2s ease-out infinite",
        spin: "spin 2s infinite linear",
      },
      keyframes: {
        float: {
          "50%": { transform: "translate(0, 20px)" },
        },
        spin: {
          "0%": {transform: "rotate(0deg)"},
          "100%": { transform: "rotate(360deg)"}
        }
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      serif: ["Poppins"],
      display: ["Oswald"],
      body: ['Alegreya'],
    },
  },
  plugins: [],
};
