/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand': {
          cream: '#D0BA98',
          dark: '#23140C',
          red: '#91040C',
        }
      },
      animation: {
        'gradient-shift': 'gradient-shift 15s ease infinite',
        'float': 'float linear infinite',
        'glow-float': 'glow-float linear infinite',
        'fade-in': 'fade-in 1s ease-out',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-30px) rotate(120deg)' },
          '66%': { transform: 'translateY(-15px) rotate(240deg)' },
        },
        'glow-float': {
          '0%, 100%': { 
            transform: 'translateY(0px) translateX(0px) scale(1)',
            opacity: '0.3'
          },
          '25%': { 
            transform: 'translateY(-40px) translateX(20px) scale(1.2)',
            opacity: '0.8'
          },
          '50%': { 
            transform: 'translateY(-20px) translateX(-15px) scale(0.8)',
            opacity: '0.5'
          },
          '75%': { 
            transform: 'translateY(-60px) translateX(30px) scale(1.1)',
            opacity: '0.9'
          },
        },
        'fade-in': {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};