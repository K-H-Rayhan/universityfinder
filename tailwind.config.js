module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./component/**/*.{js,ts,jsx,tsx}",
    "/images/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      margin: {
        '3px': '2px',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}