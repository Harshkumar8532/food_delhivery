/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#f97316",      // Orange-500
        secondary: "#ef4444",    // Red-500
        accent: "#fbbf24",       // Amber-400
        background: "#ffffff",
        surface: "#f8f9fa",
        dark: {
          background: "#0f0f0f",
          surface: "#1a1a1a",
          border: "#2d2d2d"
        }
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
