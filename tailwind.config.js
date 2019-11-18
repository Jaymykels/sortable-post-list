const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {},
    colors: {
      ...colors,
      green: {
        ...colors.green,
        '300': '#0bf684'
      }
    }
  },
  variants: {},
  plugins: []
}
