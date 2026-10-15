import React from "react";
import styles from "./ThemeToggle.module.scss"

interface ThemeToggleProps {
  themeIcon: React.ReactNode;
  label: string; // accessible name, e.g. "Switch to light mode"
  onClick: () => void;
}

function ThemeToggle({ themeIcon, label, onClick }: ThemeToggleProps) {
  return (
    <button
      type="button"
      className={styles['theme-button']}
      onClick={onClick}
      aria-label={label}
    >
      <span aria-hidden="true">{themeIcon}</span>
    </button>
  );
}

export default ThemeToggle;