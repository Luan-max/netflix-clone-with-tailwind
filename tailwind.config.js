/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    letterSpacing: {
      '1': '0.25em'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'linear-gradient(180deg, rgba(20, 20, 20, 0) 0%, rgba(20, 20, 20, 0.916667) 5.07%, #141414 7.48%);',
        background: "url('/background.svg')"
      },
      colors: {
        secondary: {
          1: 'rgba(255, 255, 255, 0.5);'
        }
      }
    },
  },
  plugins: [],
}
