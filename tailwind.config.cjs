/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      orange: "hsl(35, 77%, 62%)",
      red: "hsl(5, 85%, 63%)",
      white: "hsl(36, 100%, 99%)",
      blue: "hsl(233, 8%, 79%)",
      darkblue: "hsl(240, 100%, 5%)",
      lightblue: "hsl(236, 13%, 42%)",
    },
    minWidth: {
      half: "50%",
    },
  },
  plugins: [],
};
