/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        custom:['Montserrat', 'sans-serif'],
        second:['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}

