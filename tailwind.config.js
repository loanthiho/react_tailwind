/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Barlow: ['"Barlow Condensed"']
      },
      colors:{
        primary: '#16405B'
      }
    },
  },
  plugins: [],
}

