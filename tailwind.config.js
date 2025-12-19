/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0A2540',
        gold: '#C9A227',
        'off-white': '#F7F8FA',
        'slate-gray': '#667085',
        'electric-blue': '#00D4FF',
        'vivid-purple': '#9D4EDD',
        'neon-green': '#39FF14',
        'bright-orange': '#FF6B35',
        'hot-pink': '#FF006E',
        'cyber-yellow': '#FFBE0B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-up-delayed': 'fadeInUp 0.8s ease-out 0.3s backwards',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 3s',
        'marquee': 'marquee 30s linear infinite',
        'outline-pulse': 'outlinePulse 2s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'scale-in': 'scaleIn 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'content-reveal': 'contentReveal 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'stagger-1': 'contentReveal 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.1s forwards',
        'stagger-2': 'contentReveal 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards',
        'stagger-3': 'contentReveal 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        outlinePulse: {
          '0%, 100%': { boxShadow: '0 0 0 0px rgba(0, 212, 255, 0.4)' },
          '50%': { boxShadow: '0 0 0 8px rgba(0, 212, 255, 0)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
