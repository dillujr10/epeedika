/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'logo': ['BreeSerif', 'serif'],
        'Onest':['Onest','serif']
      },
      colors: {

        "primary": "#0D1321",

        "secondary": "#1D2D44",

        "accent": "#3E5C76",

        "neutral": "#F0EBD8",

        "base-100": "#ffffff",

        "info": "#748CAB",

        "success": "#36d399",

        "warning": "#fbbd23",

        "error": "#f87272",
      }

    },
  },
  plugins: [require("daisyui")],
}
