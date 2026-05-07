import React from "react";
import styles from "../styles/NavBar.module.css"

interface NavBarProps {
  themeIcon: React.ReactNode;
  onClick: () => void;
}

function NavBar({themeIcon, onClick} : NavBarProps) {
  return (
      <div className={styles.navBar}>
        <button className={styles.themeButton} onClick={onClick}>{themeIcon}</button>
      </div>
  );
}

export default NavBar;