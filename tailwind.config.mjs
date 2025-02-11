/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        poppins: ["var(--font-poppins)"],
        spaceGrotesk: ["var(--font-spaceGrotesk)"],
      },
      backgroundColor:{
        primaryBlack: "#141718",
      },
      colors:{
        primaryBlack: "#141718",
        primaryGray: "#6C7275",
        primaryGreen: "#38CB89",
        errorColor: "#fc8181",
        linkColor: "#377DFF"
      }
    },
  },
  plugins: [],
};
