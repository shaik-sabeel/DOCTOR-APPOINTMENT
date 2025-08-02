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
      },
      gridTemplateColumns :{
        'auto':'repeat(auto-fill, minmax(200px,1fr))'
      }
    },
  },
  plugins: [],
}

//npm install -D tailwindcss postcss autoprefixer

//npx tailwindcss init -p

