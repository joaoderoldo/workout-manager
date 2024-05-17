/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        default: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#1BBCBC",
        secondary: "#1C3041",
      },
    },
  },
  plugins: [],
};
