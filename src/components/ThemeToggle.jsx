import { useState, useEffect } from "react";
import SunIcon from "../assets/icons/icon-sun.svg?react";
import MoonIcon from "../assets/icons/icon-moon.svg?react";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    return savedTheme === "dark" || (!savedTheme && prefersDark);
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => {
    const nextTheme = !isDark;
    setIsDark(nextTheme);
    localStorage.setItem("theme", nextTheme ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-live="polite"
      className={styles.themeToggleBtn}
    >
      {isDark ? (
        <>
          <span>Light</span>
          <SunIcon></SunIcon>
        </>
      ) : (
        <>
          <span>Dark</span>
          <MoonIcon></MoonIcon>
        </>
      )}
    </button>
  );
}
