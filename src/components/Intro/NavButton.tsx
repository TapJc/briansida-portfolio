import React from "react"
import styles from "./NavButton.module.css"

// Props for a navigation button with an icon and text label
interface NavButtonProps {
  icon: React.ReactNode; // icon component from React Icons
  title: string;         // text label displayed below the icon
  onClick: () => void;   // callback fired when button is clicked
}

function NavButton({icon, title, onClick} : NavButtonProps) {
  return (
    <button className={styles.navButton} onClick={onClick}>
      <div className={styles.navIcon}>{icon}</div>
      <span className={styles.title}>{title}</span>
    </button>
  );
}

export default NavButton;