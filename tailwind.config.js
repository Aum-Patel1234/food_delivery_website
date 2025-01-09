/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './frontend/**/*.html',  // All HTML files in the frontend folder
    './frontend/**/*.js',    // All JS files in the frontend folder
  ],
  theme: {
    extend: {
      colors: {
        customPink: '#ff2b85', // Add your custom color here
        darkBlack: '#222222',
        lightBlack: '#3a3a3a'
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

