/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Add this line to scan all your React files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
