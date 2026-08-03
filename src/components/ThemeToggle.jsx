import { useState, useEffect } from "react";
import sunIcon from "../assets/icons/icon-sun.svg";
import moonIcon from "../assets/icons/icon-moon.svg";
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
          <img src={sunIcon} alt="" aria-hidden="true" />
        </>
      ) : (
        <>
          <span>Dark</span>
          <img src={moonIcon} alt="" aria-hidden="true" />
        </>
      )}
    </button>
  );
}
