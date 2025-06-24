/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors:{
        'primary':'#3238f2'
      },
      fontFamily:{
        'primary':['Poppins','sans-serif'],
        'body':['Inter','sans-serif']
      }
    },
  },
  plugins: [],
}

