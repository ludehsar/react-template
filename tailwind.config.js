/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      primary: ['"Josefin Sans"'],
    },
    fontSize: {
      xs: '1rem',
      sm: '1.2rem',
      md: '1.4rem',
      lg: '1.6rem',
      xl: '1.8rem',
      '2xl': ['2rem', '1.3'],
      '3xl': ['3rem', '1.3'],
      '4xl': ['3.5rem', '1.3'],
      '5xl': ['6rem', '1.3'],
      '6xl': ['8.5rem', '1.2'],
    },
    colors: {
      transparent: 'transparent',
      primary: '#7366FF',
      'primary-dark': '#1B2C55',
      'primary-2': '#CBC7FF',
      'secondary-dark': '#69748F',
      secondary: '#979DA7',
      'secondary-2': '#F1F2F5',
      muted: '#9A9A9A',
      success: '#6FCF97',
      black: '#000',
      white: '#FFF',
      'dark-bg': '#181818',
      'card-dark-bg': '#64646B',
      card: '#CECDCF',
      'dark-2': '#191A2A',
    },
    spacing: {
      0: '0',
      1: '0.4rem',
      2: '0.8rem',
      3: '1.2rem',
      4: '1.4rem',
      5: '1.6rem',
      6: '2rem',
      7: '2.4rem',
      8: '2.8rem',
      9: '3rem',
      10: '3.2rem',
      11: '3.6rem',
      12: '4rem',
      13: '4.4rem',
      14: '4.8rem',
      15: '5.2rem',
      16: '5.6rem',
      17: '6rem',
      18: '6.4rem',
      19: '6.8rem',
      20: '7.2rem',
      21: '7.6rem',
      22: '8rem',
      23: '9rem',
      'navigation-height': 'var(--navigation-height)',
    },
    backgroundImage: {
      background: 'linear-gradient(0deg, #FFF 0%, #FFF 100%)',
      'dark-background': 'linear-gradient(0deg, #181818 0%, #181818 100%)',
    },
    boxShadow: {
      default: '0px 4px 4px 0px rgba(0, 0, 0, 0.1)',
    },
    keyframes: {
      'fade-in': {
        from: {
          opacity: 0,
          transform: 'translateY(-10px)',
        },
        to: {
          opacity: 1,
          transform: 'none',
        },
      },
    },
    animation: {
      'fade-in': 'fade-in 1000ms var(--animation-delay, 0ms) ease forwards',
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
