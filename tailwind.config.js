module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        "coffee": "#222222"
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'trns': '#00000066',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
