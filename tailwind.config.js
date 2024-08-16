/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "image":"url('/src/comp/media/weather.jpg')",
        "left":"url('/src/comp/media/leftbg.jpg')"
      }
    },
  },
  plugins: [],
}

