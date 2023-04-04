/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: {
          light: "#FFDAD4",
          DEFAULT: "#F63218",
          dark: "#A71A07",
        },
        secondary: {
          light: "#C4EDD3",
          DEFAULT: "#328056",
          dark: "#193C35",
        },
      },
    },
  },
  plugins: [],
};
