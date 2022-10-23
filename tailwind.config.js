/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'twitch': {
          'default': '#9146FF',
          'dark': '#6441A5',
          'light': '#A864FF',
        },
        'twitter': {
          'default': '#1DA1F2',
          'dark': '#1A91DA',
          'light': '#299ce3',
        },
        'youtube': {
          'default': '#FF0000',
          'dark': '#CC0000',
          'light': '#FF3333',
        },
        'instagram': {
          'default': '#E1306C',
          'dark': '#B81E5B',
          'light': '#ef417c',
        },
        'discord': {
          'default': '#7289DA',
          'dark': '#5F73BC',
          'light': '#879eef',
        },
        'github': {
          'default': '#181717',
          'dark': '#0D1117',
          'light': '#24292E',
        },
        'voggt': {
          'default': '#1d1d1d',
          'dark': '#0d0d0d',
          'light': '#2d2d2d',
        }
      }
    },
  },
  plugins: [],
}
