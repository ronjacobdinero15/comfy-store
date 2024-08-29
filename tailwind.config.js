/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Open Sans, sans-serif",
    },
    container: {
      padding: "2rem",
    },
    extend: {
      colors: {
        base: "#cacdfa",
        secondary: "#303e41",
      },
    },
  },
  plugins: [],
};
