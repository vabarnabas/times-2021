module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#f2f2f2',
        secondary: '#363636',
        estiemGreen: "#48b285",
        estiemGreenHover: '#3e9a73',
        formBorder: '#b7b7b7'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
