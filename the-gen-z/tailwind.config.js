/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hotel: {
          glow: '#ff4500', 
          dark: '#1a0500',
        },
        cafe: {
          glow: '#00ffff', 
          dark: '#00141a',
        },
        darkbg: '#0a0a0a', 
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], 
      }
    },
  },
  plugins: [],
}