/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'hueneu-primary': '#A8A39D', // Warm, muted neutral gray (Neu)
        'hueneu-secondary': '#D4C3B8', // Soft, earthy neutral (Neu)
        'hueneu-accent': '#FF6B6B', // Vibrant coral/red (Hue)
        'hueneu-light-bg': '#F5F5F5',
        'hueneu-dark-text': '#333333',
        'hueneu-secondary-text': '#888888',
        'hueneu-success': '#4CAF50',
        'hueneu-warning': '#FF9800',
        'hueneu-error': '#F44336',
      },
      fontFamily: {
        primary: ['Inter', 'sans-serif'],
        secondary: ['Poppins', 'sans-serif'], // Example for display/headings
      },
      animation: {
        'logo-reveal': 'logoReveal 2s ease-out forwards',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'pop-out': 'popOut 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards',
      },
      keyframes: {
        logoReveal: {
          '0%': { opacity: 0, transform: 'scale(0.8)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        popOut: {
          '0%': { transform: 'scale(0.5)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
      },
      borderRadius: {
        'soft': '8px',
      },
      boxShadow: {
        'subtle': '0 4px 12px rgba(0, 0, 0, 0.05)',
        'interactive': '0 6px 16px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
};
