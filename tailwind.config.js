/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8873ef",
          100: "#F1F5F9"
        },
        secondary: "#193256",
        modernRed: "#E0115F",
        black:
          {DEFAULT: "#202020"},
        whiteBg: "#f5f5f5",
      },
      fontFamily: {
        pthin: ["Poppins", "sans-serif"],
        pextralight: ["Poppins", "sans-serif"],
        plight: ["Poppins", "sans-serif"],
        pregular: ["Poppins", "sans-serif"],
        pmedium: ["Poppins", "sans-serif"],
        psemibold: ["Poppins", "sans-serif"],
        pbold: ["Poppins", "sans-serif"],
        pextrabold: ["Poppins", "sans-serif"],
        pblack: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        pthin: '100',
        pextralight: '200',
        plight: '300',
        pregular: '400',
        pmedium: '500',
        psemibold: '600',
        pbold: '700',
        pextrabold: '800',
        pblack: '900',
      }
    },
  },
  plugins: [],
};