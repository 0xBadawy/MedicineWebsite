/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#611112", // Custom primary color
        secondary: "#FBBF24", // Custom secondary color
        accent: "#14B8A6", // Custom accent color
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
