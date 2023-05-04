import { type Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import scrollbar from "tailwind-scrollbar";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        body: ["var(--font-inter)"],
      },
      colors: {},
    },
  },
  plugins: [forms, scrollbar],
} satisfies Config;
