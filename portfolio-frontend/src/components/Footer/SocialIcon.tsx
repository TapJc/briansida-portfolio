import React from "react";
import styles from "./SocialIcon.module.scss";

interface SocialIconProps {
  link: string;
  icon: React.ReactNode;
  label: string; // accessible name, e.g. "GitHub"
}

function SocialIcon({ link, icon, label }: SocialIconProps) {
  const isExternal = !link.startsWith("mailto:");

  return (
    <a
      className={styles['social-icon']}
      href={link}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={isExternal ? `${label} (opens in a new tab)` : label}
    >
      <span aria-hidden="true">{icon}</span>
    </a>
  );
}

export default SocialIcon;