/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem", // 40px
        sm: "1rem", // 16px
        md: "1.5rem", // 24px
        xl: "2rem", // 32px
        xxl: "2.5rem", // 40px
      },
    },

    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1440px",
      xxxl: "1920px",
      ultraWide: "2500px",
      short: { raw: "(max-height: 800px)" },
    },

    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#3aa7a4",
      },
    },
  },
  plugins: [],
};
