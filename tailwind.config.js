/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        default : '#fed136',
        blacktext : '#121212',
        regulartext : '#757575',
        danger : '#FF3737',
        warning : '#EED202',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1200px',
        xl: '1440px',
      },
    },
    fontFamily: {
      'sans': ['Raleway', 'Raleway',],
      'serif': ['Raleway', 'Raleway',],
      'mono': ['Raleway', 'Raleway',],
      'display': ['Raleway', ],
      'body': ['"Raleway"',],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
