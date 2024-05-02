"use client";

import React from "react";
// Providers
import { useTheme } from "@/components/providers/ThemeProvider";
//  Icons
import { MoonIcon, SunIcon } from "lucide-react";

// Props
interface ThemeTogglerProps {}

const ThemeToggler = ({}: ThemeTogglerProps) => {
  const { theme, changeTheme } = useTheme();

  const Icon = theme === "dark" ? MoonIcon : SunIcon;

  return (
    <button
      onClick={() => changeTheme()}
      title={`Change to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      <Icon className="text-iconColors-primary" />
    </button>
  );
};

export default ThemeToggler;
