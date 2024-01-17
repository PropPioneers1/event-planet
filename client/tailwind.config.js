/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: "Lora, serif",
      },

      colors: {
        natural: "#EEEEEE",
        primary: "#3F72AF",
        secondary: "#222831",
      },
    },
  },
  plugins: [require("daisyui")],
};
