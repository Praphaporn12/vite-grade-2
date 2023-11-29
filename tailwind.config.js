/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "important: '#root'",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'top': '#6D99D2',
      'border': '#E4EEFC',
      'gray' : '#D4D4D8',
      'blue' : '#2470EC',
      'darkblue' : '#155BCD',
      'red' : '#FF0000',
      'grayblue' : '#BFDBFE',
      'green' : '#09A63E',
      'darkgreen' : '#0C7A31',
      'darkgray' : '#AAAAAB',
      'black' : '#000000',
      'grayless' : '#d4d4d4',
      'blackless' : '#09090b'
    },
    extend: {},
  },
  plugins: [],
}

