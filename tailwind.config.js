/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important: "#root",
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        'primary': '#009688',
        'accent': '#94c720',
        'warn': '#c70d38',
        'black': '#404040',
        'gray': '#8d8d8d'
      },
        borderWidth: {
        '3': '3px'
      }
    },
  },
  plugins: [],
}
