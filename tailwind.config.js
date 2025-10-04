/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        fire: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        neon: {
          orange: '#ff6b00',
          red: '#ff0000',
          yellow: '#ffff00',
        },
      },
      backgroundImage: {
        'fire-gradient': 'linear-gradient(135deg, #ff0000 0%, #ff6b00 50%, #ffff00 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0a0a0a 0%, #1a0a00 100%)',
        'glow-gradient': 'radial-gradient(circle at 50% 50%, rgba(255, 107, 0, 0.2) 0%, transparent 70%)',
      },
      boxShadow: {
        'fire-glow': '0 0 20px rgba(255, 107, 0, 0.5), 0 0 40px rgba(255, 107, 0, 0.3)',
        'fire-glow-lg': '0 0 30px rgba(255, 107, 0, 0.6), 0 0 60px rgba(255, 107, 0, 0.4)',
        'neon-orange': '0 0 15px rgba(255, 107, 0, 0.8)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'fire-flicker': 'fire-flicker 1.5s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(255, 107, 0, 0.5), 0 0 40px rgba(255, 107, 0, 0.3)',
            transform: 'scale(1)',
          },
          '50%': {
            boxShadow: '0 0 30px rgba(255, 107, 0, 0.8), 0 0 60px rgba(255, 107, 0, 0.5)',
            transform: 'scale(1.05)',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'fire-flicker': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};
