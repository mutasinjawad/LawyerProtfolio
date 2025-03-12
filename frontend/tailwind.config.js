/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#010522",
        },
        secondary: "#C9A227",
        accent: "#E8D5B7",
        whiteBg: "#f8f8f8",
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

        esextraextralight: ["Encode Sans", "sans-serif"],
        esthin: ["Encode Sans", "sans-serif"],
        esextralight: ["Encode Sans", "sans-serif"],
        eslight: ["Encode Sans", "sans-serif"],
        esregular: ["Encode Sans", "sans-serif"],
        esmedium: ["Encode Sans", "sans-serif"],
        essemibold: ["Encode Sans", "sans-serif"],
        esbold: ["Encode Sans", "sans-serif"],
        esextrabold: ["Encode Sans", "sans-serif"],
        esblack: ["Encode Sans", "sans-serif"],

        rthin: ["Roboto", "sans-serif"],
        rextralight: ["Roboto", "sans-serif"],
        rlight: ["Roboto", "sans-serif"],
        rregular: ["Roboto", "sans-serif"],
        rmedium: ["Roboto", "sans-serif"],
        rsemibold: ["Roboto", "sans-serif"],
        rbold: ["Roboto", "sans-serif"],
        rextrabold: ["Roboto", "sans-serif"],
        rblack: ["Roboto", "sans-serif"],
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

        esextraextralight: '100',
        esthin: '200',
        esextralight: '300',
        eslight: '400',
        esregular: '500',
        esmedium: '600',
        essemibold: '700',
        esbold: '800',
        esextrabold: '900',
        esblack: '1000',

        rthin: '100',
        rextralight: '200',
        rlight: '300',
        rregular: '400',
        rmedium: '500',
        rsemibold: '600',
        rbold: '700',
        rextrabold: '800',
        rblack: '900',
      },
      keyframes: {
        "infinite-scroll": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(calc(-50% - 20px))" },
        },
      },
      animation: {
        "infinite-scroll": "infinite-scroll 10s linear infinite",
      },
    },
    screens: {
      xs: '375px', // Extra small screens
      sm: '640px', // Small screens
      md: '768px', // Medium screens (768)
      lg: '1024px', // Large screens (1024)
      xl: '1290px', // Extra large screens (1280)
      lp: '1366px', // Laptop screens
      xxl: '2560px', // Extra extra large screens
    },
  },
  plugins: [],
};