/** @type {import('tailwindcss').Config} */
// import url('https://fonts.cdnfonts.com/css/season');


module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "primary" : "#03001C",
        "secondary" : "#D5CEA3"
      },
      fontFamily: {
        "season":"'Season', sans-serif",
        "poppins": "Poppins"
      }
    },
  },
  plugins: [],
}