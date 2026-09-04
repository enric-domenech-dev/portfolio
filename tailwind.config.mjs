/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F0F2FF',
          100: '#E0E4FF',
          200: '#C2C9FF',
          300: '#8A9BFF',
          400: '#6E82F7',
          500: '#5865F2',
          600: '#4652D9',
          700: '#3741AE',
          800: '#2C3489',
          900: '#242B6E',
        },
        secondary: {
          50: '#EDFCFF',
          100: '#D6F8FE',
          200: '#ADF1FD',
          300: '#67E8F9',
          400: '#3DD5F3',
          500: '#18B7E5',
          600: '#0B93C1',
          700: '#0A759B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 8px 30px rgba(88, 101, 242, 0.3)',
        soft: '0 12px 30px rgba(15, 23, 42, 0.08)',
        neo: '10px 10px 20px rgba(148, 163, 184, 0.25), -10px -10px 20px rgba(255, 255, 255, 0.95)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(125deg, #4652D9 0%, #18B7E5 45%, #67E8F9 100%)',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        'gradient-shift': 'gradient-shift 12s ease infinite',
        'fade-up': 'fade-up 700ms ease both',
        'fade-in': 'fade-in 600ms ease both',
      },
      transitionDuration: {
        400: '400ms',
        500: '500ms',
      },
    },
  },
  plugins: [],
};
