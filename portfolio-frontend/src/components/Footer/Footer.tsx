import React from "react";
import styles from "./Footer.module.scss";

interface FooterProps {
  trademark: string;
  children: React.ReactNode;
}

function Footer({trademark, children}: FooterProps) {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__socials}>
          {children}
        </div>
        <p className={styles.footer__trademark}>{trademark}</p>
      </div>
    </div>
  );
}

export default Footer;