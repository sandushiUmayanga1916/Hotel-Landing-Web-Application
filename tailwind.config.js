/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'buttonColor' : '#34CAC6',
      },
      fontFamily: {
        'heading' : ['Plus Jakarta Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

