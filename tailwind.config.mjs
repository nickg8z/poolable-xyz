/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#42de95",
          light: "#c1e5ea",
          dark: "#2e2c3b",
        },
        secondary: {
          DEFAULT: "#26969c",
          light: "#c1e5ea",
          dark: "#2e2c3b",
        },
      },
      fontFamily: {
        retro: ["Retropix", "sans-serif"],
        comp: ["Computer-Says-No", "sans-serif"],
      },
    },
  },
  plugins: [],
};
