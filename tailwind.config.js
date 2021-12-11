module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      extend: {
        backgroundImage: {
          'main-pattern': "url('/src/images/sg.svg')",
        }
      },
   colors: {
     transparent: 'transparent',
     current: 'currentColor',
     yellow: {
       default: '#FFD287'
     },
       orangeGrep: {
         default: '#FF5051'
       },
     purpleRain: {
       default: '#3B2694'
     },
     nightBlue: {
       default: '#110939'
     },
     mintGreen: {
       default: '#11FDC7'
     },
       white:{
         default: '#FFFFFF'
       }
   },
    fontFamily: {
      body: ['Roboto Mono']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
