import React from "react"
import styles from "./NavButton.module.scss"

// Props for a navigation button with an icon and text label
interface NavButtonProps {
  icon: React.ReactNode; // icon component from React Icons
  title: string;         // text label displayed below the icon
  onClick: () => void;   // callback fired when button is clicked
}

function NavButton({ icon, title, onClick }: NavButtonProps) {
  return (
    <button type="button" className={styles['nav-button']} onClick={onClick}>
      <span className={styles['nav-button__icon']} aria-hidden="true">{icon}</span>
      <span className={styles['nav-button__title']}>{title}</span>
    </button>
  );
}

export default NavButton;