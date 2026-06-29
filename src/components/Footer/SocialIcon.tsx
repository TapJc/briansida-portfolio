import React from "react";
import styles from "./SocialIcon.module.css";

interface SocialIconProps {
  link: string;
  icon: React.ReactNode;
}

function SocialIcon({link, icon}: SocialIconProps) {
  return (
    <a className={styles.socialIcon} href={link} target="_blank" rel="noopener noreferrer">
      {icon}
    </a>
  );
}

export default SocialIcon;