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
    },
  },
  plugins: [],
}
