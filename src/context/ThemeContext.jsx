import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext(undefined);

export const THEME = {
  DARK: "dark",
  LIGHT: "light",
};

const getInitialTheme = () => {
  if (typeof window !== "undefined") {
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme !== null) {
      return savedTheme === "dark";
    }
  }
  return true;
};

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(getInitialTheme);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    const isDark = savedTheme !== null ? savedTheme === "dark" : true;
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light",
    );
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("portfolio-theme", newMode ? "dark" : "light");
    document.documentElement.setAttribute(
      "data-theme",
      newMode ? "dark" : "light",
    );
  };

  const value = {
    darkMode,
    toggleDarkMode,
    isDark: darkMode,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export default ThemeContext;
