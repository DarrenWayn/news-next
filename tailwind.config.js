/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        autofit: "repeat(auto-fit, minmax(400px, 1fr))",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
