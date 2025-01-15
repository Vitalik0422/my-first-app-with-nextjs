import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title:["Lato", "sans-serif"],
        brand:["Brand","sans-serif"]
      },
      fontSize:{
        base:"0.875rem"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        defaultBlue: "var(--defaultBlue)"
      },
    },
  },
  plugins: [],
} satisfies Config;
