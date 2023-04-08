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
      'sans': ['DM Sans', 'DM Sans',],
      'serif': ['DM Sans', 'DM Sans',],
      'mono': ['DM Sans', 'DM Sans',],
      'display': ['DM Sans', ],
      'body': ['"DM Sans"',],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
