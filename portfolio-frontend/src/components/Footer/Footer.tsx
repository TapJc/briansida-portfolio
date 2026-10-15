import React from "react";
import styles from "./Footer.module.scss";

interface FooterProps {
  trademark: string;
  children: React.ReactNode;
}

function Footer({ trademark, children }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <nav className={styles.footer__socials} aria-label="Social links">
          {children}
        </nav>
        <p className={styles.footer__trademark}>{trademark}</p>
      </div>
    </footer>
  );
}

export default Footer;