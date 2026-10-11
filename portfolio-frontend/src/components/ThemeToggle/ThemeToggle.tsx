import React from "react";
import styles from "./ThemeToggle.module.scss"

interface NavBarProps {
  themeIcon: React.ReactNode;
  onClick: () => void;
}

function ThemeToggle({themeIcon, onClick} : NavBarProps) {
  return (
    <button className={styles['theme-button']} onClick={onClick}>
      {themeIcon}
    </button>
  );
}

export default ThemeToggle;