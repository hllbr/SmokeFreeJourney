/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // React dosyalarını dahil et
  ],
  theme: {
    extend: {
      colors: {
        lightBg: "#f1f5f9",
        darkBg: "#2b2b2b",
        primary: "#6a994e",
        secondary: "#a2d2ff",
        danger: "#ff6f61",
      },
    },
  },
  plugins: [],
};
