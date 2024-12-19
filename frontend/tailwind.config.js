/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8873ef",
          100: "#FFFFF8"
        },
        secondary: "#404030",
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
    screens: {
      sm: '640px', // Small screens
      md: '768px', // Medium screens
      lg: '1024px', // Large screens
      xl: '1280px', // Extra large screens
    },
  },
  plugins: [],
};