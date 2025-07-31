/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'primary' : "#5f6FFF"
      }
    },
  },
  plugins: [],
}

//npm install -D tailwindcss postcss autoprefixer

//npx tailwindcss init -p

