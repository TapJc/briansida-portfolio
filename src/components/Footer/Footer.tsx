import React from "react";
import styles from "./Footer.module.css";

interface FooterProps {
  trademark: string;
  children: React.ReactNode;
}

function Footer({trademark, children}: FooterProps) {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.socials}>
          {children}
        </div>
        <p className={styles.trademark}>{trademark}</p>
      </div>
    </div>
  );
}

export default Footer;