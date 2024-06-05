/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: '#ffffff',
      white_1: "#6f7172",
      white_2: "#1F2021",
      white_3: "#e6e6e6",
      black: '#0c0d13',
      black_2: "#000000e6",
      black_3: "#181818",
      black_4: "#7a7a7a4d",
      black_5: "#5a5a5a",
      black_6: "#232935",
      black_7: "#201f1fab",
      black_8: "#282929cc",
      green: "#8CD903",
      green_1: "#8edd04",
      green_2: "#8ad603",
      yellow: "#c5ab5a",
      yellow_2: "#f4d56f",
      red: "#ff0400",
    },
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        hedvig: ["Hedvig Regular", "sans-serif"],
        barlow: ["Barlow-Regular", "sans-serif"],
        barlow_bold: ["Barlow-Bold", "sans-serif"],
        barlow_black: ["Barlow-Black", "sans-serif"],
        barlow_extra: ["Barlow-ExtraBold", "sans-serif"],
      },
      backgroundImage: {
        gradient_red: "linear-gradient(to right, #8cd903 14%, #fb0401 83%)",
        gradient_green: "linear-gradient(to right, #2c3919 0.1%, #17181f 100.1%, #611215 0.1%)",
        gradient_redLeft: "linear-gradient(to left, #611215 0.1%, #17181f 100.1%, #2c3919 0.1%)",
        
      },
      screens: {
        ios : '320px',
        samsungS8: "360px",
        xs: '390px',
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl":'1440px',
        "3xl": "1920px",
      },
    },
    boxShadow: {
    }
  },
  variants: {
    extend: {
      display: ["dark"],
    },
  },
  darkMode: ["class"],
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar")({ nocompatible: true }),
    // ...
  ],
}
