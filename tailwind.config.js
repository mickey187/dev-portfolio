/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gugi: ['Gugi', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        sans: ['sans-serif', '"Open Sans"'], 
      },
    },
  },
  plugins: [],
}