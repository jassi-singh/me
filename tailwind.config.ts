import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "mdx-components.tsx",
  ],
  theme: {
    extend: {
      colors: {
        /* Values from globals.css (:root / .dark) — 60-30-10 documented there */
        terminal: {
          bg: "var(--terminal-bg)",
          fg: "var(--terminal-fg)",
          muted: "var(--terminal-muted)",
          dim: "var(--terminal-dim)",
          accent: "var(--terminal-accent)",
          border: "var(--terminal-border)",
          hover: "var(--terminal-hover)",
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
