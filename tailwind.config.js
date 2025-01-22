/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "280px",
        md: "760px",
        lg: "1024px",
        xlg: "1280px",
        xl: "1440px",
        xxl: "1780px",
      },
      boxShadow: {
        "custom-light": "5px 0px 8px 0px rgba(0, 0, 0, 0.05)",
      },
      fontFamily: {
        outfit: ["Outfit", "serif"],
      },
      colors: {
        "site-main-blue": "#348DCB",
        "site-main-orange": "#F5841E",
        "site-main-black": "#333333",
        "site-main-grey": "#888888",
        "site-main-green": "#00A86A",
      },
    },
  },
  plugins: [],
};
