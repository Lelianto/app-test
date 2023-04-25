/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screen: {
      xs: "320px", // mobile
      sm: "576px", // mobile
      md: "768px", // tablet
      lg: "992px", // tablet
      xl: "1200px", // laptop
      "2xl": "1448px", // laptop
      "3xl": "1600px", // laptop
    },
    extend: {
      colors: {
        "grey-1": "#6A6A6A",
        "grey-2": "#D9D9D9",
      },
    },
  },
  plugins: [],
};
