module.exports = {
content: [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    container: { center: true, padding: "24px" },
    extend: {
      colors: {
        primary: "#3DFF87",
        primaryDark: "#249951",
        bg: "#030804",
        surface: "#06100A",
        muted: "#9CA3AF",
        soft: "#0F0F0F",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        card: "0 6px 18px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.02)",
      },
      borderRadius: {
        'xl-lg': '1rem',
      },
    },
  },
  plugins: [],
};
