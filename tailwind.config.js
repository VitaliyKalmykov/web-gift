/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': { 'max': '480px' },   // Екрани до 480px
      'md': { 'min': '481px', 'max': '768px' }, // 481px - 768px
      'xl': { 'min': '769px' }, // 769px - 1280px
    },
  },
  plugins: [],
};