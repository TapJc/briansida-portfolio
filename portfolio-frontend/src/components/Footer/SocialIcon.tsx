import React from "react";
import styles from "./SocialIcon.module.scss";

interface SocialIconProps {
  link: string;
  icon: React.ReactNode;
}

function SocialIcon({link, icon}: SocialIconProps) {
  return (
    <a className={styles['social-icon']} href={link} target={link.startsWith("mailto:") ? undefined : "_blank"} rel="noopener noreferrer">
      {icon}
    </a>
  );
}

export default SocialIcon;