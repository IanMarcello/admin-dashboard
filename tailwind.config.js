/* eslint-disable no-undef */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          50: "#ffffff",
          100: "#f8f9fa",
          200: "#e9ecef",
          300: "#dee2e6",
          400: "#ced4da",
          500: "#adb5bd",
          600: "#6c757d",
          700: "#495057",
          800: "#343a40",
          900: "#212529",
        },
        dark: {
          50: "#0081c6",
          100: "#0073b0",
          200: "#00649a",
          300: "#005684",
          400: "#00486e",
          450: "#003049",
          500: "#003958",
          600: "#002b42",
          700: "#001d2c",
          800: "#000e16",
          900: "#000000",
        },
      },
      fontFamily: {
        dmc: ["DMC5Font"],
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("@tailwindcss/forms"),
  ],
};
