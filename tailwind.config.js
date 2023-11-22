/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        primary: '#FF7B66',
        primaryMedium: '#F67E6D',
        primaryLight: '#FFF2F1',
        secondary: '#0DCCAE',
        secondaryMedium: '#01E3BD',
        secondaryDark: '#005244',
        secondaryLight: '#E6FAF8',
        accent: '#1D9DE6',
        accentMedium: '#1FACFD',
        foreground: '#F6F6F5',
        transBlack: 'rgba(0,0,0,0.1)',
        background: '#F2F6F7',
        black: '#151515',
      },
      boxShadow: {
        newShadow: '0px 0px 16px 0px rgba(0,0,0,0.2)',
      },
    },
  },
  plugins: [],
};
