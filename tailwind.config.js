module.exports = {
  purge: {
    enabled: true,
    content: [
      '*.html',
    ]
  },
  darkMode: false, 
  theme: {

    screens: {
      'sm': '540px',

      'md': '720px',

      'lg': '960px',

      'xl': '1140px',

      '2xl': '1320px',
    },

    container: {
      center: true,
    },

    spacing: {
      '0': '0px',
      '1': '4px',
      '2': '8px',
      '3': '12px',
      '4': '16px',
      '5': '20px',
      '6': '24px',
      '7': '28px',
      '8': '32px',
      '9': '36px',
      '10': '40px',
      '11': '44px',
      '12': '48px',
      '13': '52px',
      '14': '56px',
      '15': '60px',
      '16': '64px',
      '17': '68px',
      '18': '72px',
      '19': '76px',
      '20': '80px',
      '21': '84px',
      '22': '88px',
      '23': '92px',
      '24': '96px',
      '25': '100px',
      '110': '110px',
      '120': '120px',
      '130': '130px',
      '140': '140px',
      '150': '150px',
      '160': '160px',
      '170': '170px',
      '180': '180px',
      '190': '190px',
      '200': '200px',
      '260': '260px',
    },

    extend: {

      colors: {
        "white": "#ffffff",
        "black": "#201F1F",
        "gray": "#FBFBFF",
        "yellow": "#FDD446",
        "theme-color": "#079211",
        "border-color": "#E8E8E8",
        "body-color": "#201F1F",
        "heading-color": "#162447",
        "shadow": "#9D6A6A",
      },

      zIndex: {
        '-10': '-10',
        '-20': '-20',
        '-30': '-30',
        '-40': '-40',
      },

      transitionDelay: {
        '400': '400ms',
        '600': '600ms',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
