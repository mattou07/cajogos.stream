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
          'light': '#1DA1F2',
        },
        'youtube': {
          'default': '#FF0000',
          'dark': '#CC0000',
          'light': '#FF3333',
        },
        'instagram': {
          'default': '#E1306C',
          'dark': '#B81E5A',
          'light': '#E1306C',
        },
        'discord': {
          'default': '#7289DA',
          'dark': '#5F73BC',
          'light': '#7289DA',
        },
      }
    },
  },
  plugins: [],
}
