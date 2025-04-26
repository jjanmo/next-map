/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'dot-pattern': `
          radial-gradient(circle at 1px 1px, #E37E2E 1px, transparent 0),
          radial-gradient(circle at 1px 1px, #E37E2E 1px, transparent 0)
        `,
      },
      backgroundSize: {
        'dot-pattern': '40px 40px',
      },
      backgroundPosition: {
        'dot-pattern': '0 0, 20px 20px',
      },
      keyframes: {
        'slow-bounce': {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
      animation: {
        'slow-bounce': 'slow-bounce 2s infinite',
      },
    },
  },
  plugins: [],
}
