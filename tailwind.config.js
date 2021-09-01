const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    colors: {
      blue: {
        light: '#0000ff',
        DEFAULT: '#0000ff',
        dark: '#0000ff',
      },
      primary: colors.blue,
      secondary: colors.red,
      neutral: colors.gray,
      white: '#FFF',
    },
    extend: {},
  },
  variants: {},
  plugins: [],
};