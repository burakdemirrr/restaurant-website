import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f4f9f9',
          100: '#dcedee',
          200: '#bcd8d9',
          300: '#8ebabb',
          400: '#649798',
          500: '#45787a',
          600: '#366163',
          700: '#2d4f51',
          800: '#284142',
          900: '#233738',
        },
        gold: {
          50: '#fbf7e4',
          100: '#f5ecbb',
          200: '#eed88d',
          300: '#e7c35f',
          400: '#e0af31',
          500: '#c99a2a',
          600: '#9d7720',
          700: '#725618',
          800: '#463510',
          900: '#1b1408',
        }
      },
      fontFamily: {
        display: ['var(--font-playfair)'],
        sans: ['var(--font-montserrat)'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-up': 'scaleUp 0.5s ease-out',
        'bounce-in': 'bounceIn 0.8s cubic-bezier(0.36, 0, 0.66, -0.56)',
        'rotate-in': 'rotateIn 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        rotateIn: {
          '0%': { transform: 'rotate(-180deg) scale(0)', opacity: '0' },
          '100%': { transform: 'rotate(0) scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};

export default config;
