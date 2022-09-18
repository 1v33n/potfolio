/** @type {import('tailwindcss').Config} */ 
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  purge: [
    './src/**/*.html',
    './src/**/*.jsx',
    './src/**/*.js'
  ],
  theme: {
    extend:{
      colors: {
        primary: '#FF5D00',
        darker: '#f25a02',
        secondary: '#00478F',
        neutral: '#D8E1E7',
        normal: '#2A231F'
      },
      fontFamily: {
        'press-start': ['Silkscreen', 'cursive'],
        'sans': ['Kanit', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [],
}