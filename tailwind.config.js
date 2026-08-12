/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 20px 80px -30px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
};
