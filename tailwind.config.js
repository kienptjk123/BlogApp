/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'slow-spin': 'spin 4s linear infinite'
      }
    }
  },
  plugins: []
}
