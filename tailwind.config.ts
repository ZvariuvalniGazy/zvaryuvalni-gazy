import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#1560d6", dark: "#0f4aa8", tint: "#e8f0fd", soft: "#f3f7fd" },
        ink: { DEFAULT: "#101b33", muted: "#5a6a85" },
        line: "#dfe7f3",
      },
      fontFamily: { sans: ["var(--font-manrope)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
} satisfies Config;
