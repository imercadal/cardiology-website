/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e2e9f3',
        secondary: {
          100: '#17147F',
          200: '#06044A'
        },
        dark: '#6C91C2',
        darker: '#2D4C87',
        darkest: '#00246B',
        rojoReserva: "#e22340"
      },
      fontFamily: {
        azeret: ["var(--font-azeret-mono)"],
        inter: ["var(--font-inter)"],
        cardo: ["Cardo, serif"],
      },
    },
  },
  plugins: [],
};
