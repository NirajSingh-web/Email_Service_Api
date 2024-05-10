/** @type {import('tailwindcss').Config} */
import da from "";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./src/assets/email.webp')",
      },
    },
  },
  plugins: [],
};
