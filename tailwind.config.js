/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{svelte, html, js}'
  ],
  theme: {
    extend: {
      colors: {
        black: '#000',
        primary: {
          100: '#E5F1FF',
          200: '#B8D4FF',
          300: '#8AB7FF'
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    },
  },
  plugins: [],
};

