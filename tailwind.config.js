/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#eff2f7",
        destructive: "#ff4d4f",
      },
    },
  },
  plugins: [],
};
