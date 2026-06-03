"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "dark" | "light";

const THEME_EVENT = "lookout-theme-change";

function getThemeSnapshot(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme = window.localStorage.getItem("lookout-theme");
  return savedTheme === "dark" || savedTheme === "light" ? savedTheme : "light";
}

function subscribeToThemeChanges(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(THEME_EVENT, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(THEME_EVENT, callback);
  };
}

export function ThemeToggle({ label = false }: { label?: boolean }) {
  const theme = useSyncExternalStore(subscribeToThemeChanges, getThemeSnapshot, () => "light");

  function toggleTheme() {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";

    window.localStorage.setItem("lookout-theme", nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.dispatchEvent(new Event(THEME_EVENT));
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <span aria-hidden="true">{theme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}</span>
      {label ? <span className="theme-toggle-label">{theme === "dark" ? "Dark" : "Light"}</span> : null}
    </button>
  );
}
