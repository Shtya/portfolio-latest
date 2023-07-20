module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
     'smd': {'max': '639px'},
     'all':{'max':"1000px" , "min" :"400px"}
},
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
      },
      backgroundImage: {
        site: "url('./assets/site-bg.jpg')",
        about: "url('./assets/about.png')",
        services: "url('./assets/services.png')",
      },
    },
  },
  plugins: [],
};

// module.exports = {
//   theme: {
//     screens: {
//       'xl': {'max': '1279px'},
//       // => @media (max-width: 1279px) { ... }

//       'lg': {'max': '1023px'},
//       // => @media (max-width: 1023px) { ... }

//       'md': {'max': '767px'},
//       // => @media (max-width: 767px) { ... }

//       // => @media (max-width: 639px) { ... }
//     }
//   }
// }