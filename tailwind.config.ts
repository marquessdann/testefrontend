import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#05070D',
          soft: '#0B0D14',
        },
        paper: {
          DEFAULT: '#FFFFFF',
          off: '#F7F7FA',
        },
        lilac: {
          DEFAULT: '#A78BFA',
          deep: '#7C3AED',
        },
        azure: {
          DEFAULT: '#4F8CFF',
          deep: '#2563EB',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #A78BFA 0%, #4F8CFF 100%)',
        'brand-gradient-soft': 'linear-gradient(135deg, rgba(167,139,250,0.16) 0%, rgba(79,140,255,0.16) 100%)',
      },
      boxShadow: {
        card: '0 1px 2px rgba(5,7,13,0.04), 0 8px 24px -12px rgba(5,7,13,0.12)',
        'card-dark': '0 1px 2px rgba(0,0,0,0.3), 0 12px 32px -12px rgba(0,0,0,0.5)',
      },
      maxWidth: {
        content: '1200px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;
