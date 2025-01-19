/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scrollBehavior: ['smooth'],
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        robotoSlab: ['"Roboto Slab"', 'serif'],
      },
    },
  },
  plugins: [],
}

