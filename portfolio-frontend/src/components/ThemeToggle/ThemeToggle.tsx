import React from "react";
import styles from "./ThemeToggle.module.css"

interface NavBarProps {
  themeIcon: React.ReactNode;
  onClick: () => void;
}

function ThemeToggle({themeIcon, onClick} : NavBarProps) {
  return (
    <button className={styles.themeButton} onClick={onClick}>
      {themeIcon}
    </button>
  );
}

export default ThemeToggle;