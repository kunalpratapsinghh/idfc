"use client";

import {
  PAGETYPE,
  THEMES_ENABLED,
  THEMES_STATUS_BAR,
  ThemeTypes
} from "@/config";
import React, { createContext, useContext, useEffect, useState } from "react";

export type ThemeMode = "light" | "dark";

interface ThemeContextValue {
  brand: ThemeTypes;
  mode: ThemeMode;
  setBrand: (brand: ThemeTypes) => void;
  setMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider = ({
  children,
  initialBrand = "base",
  initialMode = "light",
  cardType = "DEFAULT"
}: {
  children: React.ReactNode;
  initialBrand?: ThemeTypes;
  initialMode?: ThemeMode;
  cardType: PAGETYPE;
}) => {
  const [brand, setBrandState] = useState<ThemeTypes>(initialBrand);
  const [mode, setModeState] = useState<ThemeMode>(initialMode);

  // Update body classes on load and on state changes
  useEffect(() => {
    updateBodyClasses(brand, mode);
    const domain = "." + window.location.hostname;
    document.cookie = `theme=${cardType}; secure; SameSite=Strict; path=/; domain=${domain}`;
  }, [brand, mode]);

  const updateBodyClasses = (brand: ThemeTypes, mode: ThemeMode) => {
    document.body.classList.remove(
      ...THEMES_ENABLED.map(theme => `theme-${theme}`),
      "light",
      "dark"
    );
    document.body.classList.remove("light", "dark");

    document.body.classList.add(`theme-${brand}`);
    document.body.classList.add(mode);
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (themeColorMeta) {
      themeColorMeta.setAttribute(
        "content",
        THEMES_STATUS_BAR[brand] ?? THEMES_STATUS_BAR["default"]
      );
    }
  };

  const setBrand = (newBrand: ThemeTypes) => {
    setBrandState(newBrand);
    document.cookie = `user-theme=${newBrand}; path=/; max-age=31536000; Secure`;
  };

  const setMode = (newMode: ThemeMode) => {
    setModeState(newMode);
    document.cookie = `color-mode=${newMode}; path=/; max-age=31536000; Secure`;
  };

  return (
    <ThemeContext.Provider value={{ brand, mode, setBrand, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};
