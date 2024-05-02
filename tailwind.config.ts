import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        "bgColors-primary": "var(--bg-body)",
        "bgColors-header": "var(--bg-header)",
        "bgColors-sidebar": "var(--bg-sidebar)",
        // Text
        "textColors-primary": "var(--text-primary)",
        "textColors-secondary": "var(--text-secondary)",
        // Icons
        "iconColors-primary": "var(--icon-primary)",
        // Active
        "activeColors-sidebarLink": "var(--active-sidebarLink)",
      },
    },
  },
  darkMode: "selector",
  corePlugins: {
    container: false,
  },
  plugins: [],
};
export default config;
