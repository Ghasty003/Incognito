/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#251e3e",
        navbg: "rgba(0, 0, 0, .2)",
        dodger: "#1e90ff",
      },
      screens: {
        tablet: { max: "740px" },
      },
    },
  },
  plugins: [],
};
