import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
      'sky-blue' : "#23A6F0",
      'grey-text' : "#737373",
      'white': "#FFFFFF",
      'red' : "#E74040"
      },
    },
  },
  plugins: [],
} satisfies Config;
