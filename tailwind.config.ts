/**
 * Tailwind CSS configuration for consistent design tokens.
 */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#1B4965",
          secondary: "#62B6CB",
          accent: "#CAE9FF",
        },
      },
    },
  },
  plugins: [],
};

export default config;
