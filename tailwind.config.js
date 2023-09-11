/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    container : {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#0d9488'
      },
      screens: {
        '2xl' : '1320px',
      },
    },
  },
  plugins: [],
}