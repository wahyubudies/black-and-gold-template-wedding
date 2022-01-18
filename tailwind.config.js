module.exports = {
  content: [
    './public/**/*.{html,js}',
    './resources/**/*.{html,js}',
    './index.html',
    './tailwind.css',
  ],
  theme: {
    extend: {
      colors: {
        'orange-level-1': "#E1A170",
        'orange-level-2': "#F6E0CF",
        'gray-level-1': "#E0E0E0",
        'gray-level-2': "#F3F3F3",

        'gray-black-gold': "#373737",
        'black-black-gold': '#1f1f1f',
        'gold-black-gold-level-1': '#DBC087',
        'gold-black-gold-level-2': '#B68F48'
      },
      backgroundImage: {
        'hero-header': "url('../frontend/images/template-01/header.png')"
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'elsie-swash-caps': ['"Elsie Swash Caps"', 'cursive']
      }
    },
  },
  plugins: [],
}
