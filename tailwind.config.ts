import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "425px",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
      fontFamily: {
        inter: "var(--font-inter)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "dark-blue": "#043873",
        "light-blue": "#4F9CF9",
        "secondary-yellow": "#FFE492",
        "secondary-blue": "#A7CEFC",
        "secondary-black": "#212529",
      },
    },
  },
  plugins: [],
} satisfies Config;
