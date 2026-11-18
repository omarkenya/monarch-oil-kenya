/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        monarch: {
          navy: '#0b132b',
          blue: '#1c2541',
          red: '#c62828',
          gold: '#f59e0b',
        }
      }
    },
  },
  plugins: [],
};