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
        custom: "rgba(0, 0, 0, 0.35) 0px 2px 7px",
      },
      fontFamily: {
        outfit: ["Outfit", "serif"],
      },

      colors: {
        "custom-blue": "#348DCB",
        "custom-green": "#00A86A",
        "custom-black": "#333333",
        "custom-gray": "#888888",
        "custom-orange": "#F5841E",
        "custom-lite-gray": "#666666",
      },
    },
  },
  plugins: [],
};
