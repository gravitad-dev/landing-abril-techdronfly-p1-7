/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss-animated';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // "blue-custom": "#192A68",
        'light-blue-custom': '#217BF4',
        'green-custom': '#00FF29',
        'gray-custom': '#656464',
      },
      fontFamily: {
        // sans: ["Poppins", "sans-serif"],
      },
      screens: {
        break: '1280px',
        break2: '1535px',
      },
    },
  },
  plugins: [plugin],
};
