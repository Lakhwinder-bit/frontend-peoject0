"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

const subscribe = (onChange) => {
  window.addEventListener("kapoor-theme-change", onChange);
  return () => window.removeEventListener("kapoor-theme-change", onChange);
};

const getSnapshot = () => document.documentElement.classList.contains("dark");
const getServerSnapshot = () => false;

export default function ThemeToggle({ className = "" }) {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = () => {
    const nextIsDark = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", nextIsDark);
    window.localStorage.setItem("kapoor-theme", nextIsDark ? "dark" : "light");
    window.dispatchEvent(new Event("kapoor-theme-change"));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-card-foreground transition-colors hover:border-secondary hover:bg-accent ${className}`}
    >
      {isDark ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
    </button>
  );
}