/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlack: "#141414",
        primaryGreen: "#00E100",
        primaryGray: "#5A5C5F",
        primaryWhite: "#FFF",
        navbarBg: "#F8F8F8"
      },
      container: {
        center: true,
        padding: "24px",
      },
      screens: {
        xs: "375px",
        sm: "480px",
        md: "576px",
        lg: "768px",
        xlg: "992px",
        xl: "1200px",
        "2xl": "1640px",
      },
    },
  },
  plugins: [],
};
