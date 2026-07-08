import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#2F4156",
        teal: "#567C8D",
        sky: "#C8D9E6",
        beige: "#F5EFEB",
        ink: "#2F4156",
        muted: "#567C8D",
        mist: "#F5EFEB",
        ice: "#C8D9E6"
      },
      boxShadow: {
        soft: "0 18px 55px rgba(47, 65, 86, 0.14)",
        card: "0 12px 32px rgba(47, 65, 86, 0.10)"
      },
      fontFamily: {
        sans: ['"Segoe UI"', "Arial", "var(--font-sans)", "sans-serif"],
        serif: ["Georgia", '"Times New Roman"', "var(--font-serif)", "serif"]
      }
    }
  },
  plugins: []
};

export default config;
