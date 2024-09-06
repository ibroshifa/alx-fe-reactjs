/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  variants: {
    extend: {
      backgroundColor: ['active'], // For example, to extend background color for active state
      opacity: ['disabled'],        // For opacity when an element is disabled
    },
  },
}

