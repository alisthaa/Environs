/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#f8b864",
        "hover":"#f2f2f2",
        "secondary":"#f3e0c6"
      },
fontFamily:{
  'Roboto': ["Roboto", 'sans-serif'],
  'Jost': ["Jost", 'sans-serif'],

},

    },
  },
  plugins: [],
}

