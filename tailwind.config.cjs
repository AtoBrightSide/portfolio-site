/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgPattern: "url('/src/assets/pexels-rahul-716398.jpg')",
      },
      colors: {
        brightRed: "hsl(12, 88%, 59%)",
        brightRedLight: "hsl(12, 88%, 69%)",
        brightRedSupLight: "hsl(12, 88%, 95%)",
        darkBlue: "hsl(228, 39%, 23%)",
        darkGrayishBlue: "hsl(227, 12%, 61%)",
        veryDarkBlue: "hsl(233, 12%, 13%)",
        veryPaleRed: "hsl(13, 100%, 96%)",
        veryLightGray: "hsl(0, 0%, 98%)",
        hotmag: "#51066f",
      },
      dropShadow: {
        "3xl": "0 0 0.2rem #51066f",
        "4xl": "0 0 0.5rem #51066f",
      },
      animation: {
        float: "float 2s ease-out infinite",
        spin: "spin 2s infinite linear",
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        float: {
          "50%": { transform: "translate(0, 20px)" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        blink: {
          "0%": { color: "transparent" },
          "50%": { color: "#2c3e50" },
        },
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
      body: ["Alegreya"],
    },
  },
  plugins: [],
};
