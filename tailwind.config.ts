import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "mdx-components.tsx",
  ],
  theme: {
    extend: {
      colors: {
        terminal: {
          bg: "#0d0d0d",
          fg: "#f2f2ec",
          muted: "#c4c4bc",
          dim: "#94948a",
          accent: "#7dd3fc",
          border: "#2e2e2c",
          hover: "#1c1c1a",
        },
      },
      fontFamily: {
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        shell: "760px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
