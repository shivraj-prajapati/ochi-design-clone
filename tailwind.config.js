/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'HeadingPro': ['Heading Pro Trial', 'sans-serif'], // Add your custom font
      },
    },
  },
  plugins: [],
}
  