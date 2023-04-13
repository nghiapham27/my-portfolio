/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {},
      fontFamily: {
        titleFont: ['Montserrat', 'sans-serif'],
        bodyFont: ['Inter', 'sans-serif'],
      },
      colors: {
        bodyColor: '#1e293b',
        primaryColor: '#38bdf8',
        lightColor: '#f8fafc',
        darkColor: '#94a3b8',
        hoverColor: '#64748b',
      },
    },
  },
  plugins: [],
};
