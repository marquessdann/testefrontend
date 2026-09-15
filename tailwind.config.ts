import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#09090B',
        },
        paper: {
          DEFAULT: '#FFFFFF',
          off: '#FAFAFC',
        },
        mist: '#F4F4F6',
        line: '#E7E7EB',
        lilac: {
          DEFAULT: '#A78BFA',
          light: '#EDE9FE',
          deep: '#8B5CF6',
        },
        purple: {
          deep: '#6D28D9',
        },
        lavender: '#DDD6FE',
      },
      fontFamily: {
        display: ['var(--font-sans)', 'sans-serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      maxWidth: {
        content: '1180px',
      },
    },
  },
  plugins: [],
};

export default config;
