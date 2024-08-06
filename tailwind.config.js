/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: false,
  },
  important: "#root",
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          primary: "#ffffff",
          secondary: "#ffffff",
          background: "#ffffff",
          paper: "#f5f5f5",
          textPrimary: "#000000",
          textSecondary: "#555555",
          divider: "#e0e0e0",
          gold: "#f6b846",
        },
        dark: {
          primary: "#ffffff",
          secondary: "#000000",
          background: "#000000",
          paper: "#1c1c1c",
          textPrimary: "#ffffff",
          textSecondary: "#aaaaaa",
          divider: "#333333",
          gold: "#f6b846",
        },
      },
      gradientColorStops: {
        'gold-40': 'rgba(246, 184, 70, 0.3)',
        'gold-1': 'rgba(246, 184, 70, 0.1)',
      },
    },
  },
  plugins: [],
};
