module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./component/**/*.{js,ts,jsx,tsx}",
    "/images/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}