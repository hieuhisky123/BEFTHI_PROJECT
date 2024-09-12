/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    "./public/index.html"
  ],
  theme: {
    fontFamily: {
      main: [
        'Poppins', 'sans-serif;'
      ]
    },
    extend: {
      width: {
        main: '1312px'
      },
      backgroundColor: {
        main: '#111015'
      },
      colors: {
        main: '#81ee97',
        customgreen: 'rgb(187, 247, 198)',
        linearappblack: '#f7f8f8',
      },
      fontSize: {
        '64px': '64px',
      },
      lineHeight: {
        '83px': '83px',
      },
      letterSpacing: {
        '-0.9px': '-0.9px',
      },
      fontFamily: {
        'rubik-medium': ['Rubik-Medium', 'sans-serif'],
      },
      aspectRatio: {
        '1245/920': '1245 / 920',
      },
    },
  },
  plugins: [],
}