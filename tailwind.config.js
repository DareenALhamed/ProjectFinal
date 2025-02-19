/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      Inter:['Jost', 'sans-serif'],
      Dm:['dm-serif-display']
    },
    extend: {
      screens: {
        '2md': '1150px',
        
        
      },
      colors: {
        primary: '#C76904',
        secondry: '#FFFFFF',
        black:' #292F36',
        grey:'#4D5053',
        orange:'#CDA274',
        beige:'#f0dac4'
      },
    },
  },
  
  plugins: [],
}