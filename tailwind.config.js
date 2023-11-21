/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        prim:'#23aaeb'
      },
      container: {
        padding: ".5rem",
        center: true,
      },
    },
  },
  plugins: [],
}