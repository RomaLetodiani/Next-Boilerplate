import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        grid: "url('/grid.svg')",
        "grid-dots": "url('/grid-dots.svg')",
        "grid-modern": "url('/grid-modern.svg')",
      },
    },
  },

  plugins: [require("@tailwindcss/forms")],
} satisfies Config;
