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
          light: "#70A9FF",
          DEFAULT: "#0F3CBF",
          dark: "#1A2A6C",
        },
        secondary: {
          light: "#C4EDD3",
          DEFAULT: "#FF5733",
          dark: "#193C35",
        },
      },

      dropShadow: {
        blue: "0 0 10px 2px rgba(66,153,225,0.5)",
      },
    },
  },
  plugins: [],
};
