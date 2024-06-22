/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "sc-blue": "#152630ff",
        "sc-white": "#e0ddcfff",
        "sc-green": "#568259ff",
        "sc-pink": "#c78283ff",
        "sc-red": "#6d1a36ff",
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  plugins: [],
};
