/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#37AF61",
        yellow: "#FAC92C",
        red: "#E54E37",
        blue: "#338AC8",
      },
    },
  },
  plugins: [],
};
