"use client";

import { createContext, useContext, useEffect, useState } from "react";
// Utils
import { saveInLocalStorage } from "@/utils/(local-storage)/saveInLocalStorage";
import { getFromLocalStorage } from "@/utils/(local-storage)/getFromLocalStorage";

export type ThemeMode = "dark" | "light";

type ThemeProviderValue = {
  theme: ThemeMode;
  changeTheme: (mode?: ThemeMode) => void; // eslint-disable-line
};

const ThemeContext = createContext<ThemeProviderValue>({
  theme: "light",
  changeTheme: () => {},
});

export const ThemeProvider = ({ children }: { children?: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeMode>(
    getFromLocalStorage("theme") || "dark"
  );

  useEffect(() => {
    if (!theme) return;

    // 1) Remove previous mode class
    document.documentElement.classList.remove(
      theme === "dark" ? "light" : "dark"
    );

    // 2) Add new mode class
    document?.documentElement?.classList?.add(theme);

    // 3) Save to local storage
    saveInLocalStorage("theme", theme);
  }, [theme]);

  function changeTheme(mode?: ThemeMode) {
    setTheme(mode || theme === "dark" ? "light" : "dark");
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
