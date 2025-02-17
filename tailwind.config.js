module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(-5%)'},
          '50%': { transform: 'translateY(0)'}
        }
      },
      animation: {
        wiggle: 'wiggle 200ms ease-in-out',
        bounce: 'bounce 300ms ease-in-out'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
