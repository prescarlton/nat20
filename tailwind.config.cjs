/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#1a2035",
        "light-bg": "#f0f2f5",
        "dark-bg-alt": "#1f283e",
        "light-bg-alt": "#ffffff",
        "modal-bg": "#00000080",
      },
      boxShadow: {
        soft: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        hard: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
      },
      keyframes: {
        show: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        show: "show .25s ease-in-out",
      },
    },
  },
  plugins: [],
}
