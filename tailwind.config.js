/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#EDEBDC',
        secondary: '#86411C',
      },
      fontFamily: {
        abril: ["AbrilFatface-Regular", "sans-serif"],
        capriola: ["Capriola-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
}

