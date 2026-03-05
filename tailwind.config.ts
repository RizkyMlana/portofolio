import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation : {
        "spin-slow": "spin3d 22s linear infinite",
      },
      keyframes: {
        spin3d: {
          "0%": { transform: "rotateX(18deg) rotateY(0deg)" },
          "100%": { transform: "rotateX(18deg) rotateY(360deg)" },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        petronas: {
          400: "#00D2BE",
          500: "#00BFAE",
          600: "#009E90",
        },
        carbon: {
          900: "#0B0B0B",
          800: "#121212",
          700: "#1A1A1A",
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
