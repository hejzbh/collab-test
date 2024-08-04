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
        "bgColors-modal": "var(--bg-modal)",
        "bgColors-input": "var(--bg-input)",
        "bgColors-blue": "#3ea6ff",
        "bgColors-tabs": "var(--bg-tabs)",
        "bgColors-tab": "var(--bg-tab)",
        // Text
        "textColors-primary": "var(--text-primary)",
        "textColors-secondary": "var(--text-secondary)",
        "textColors-label": "#56565A",
        "textColors-blue": "#3ea6ff",
        // Icons
        "iconColors-primary": "var(--icon-primary)",
        // Active
        "activeColors-sidebarLink": "var(--active-sidebarLink)",
        // Border
        "borderColors-primary": "var(--border-primary)",
        // Other
        red: "#c00",
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
