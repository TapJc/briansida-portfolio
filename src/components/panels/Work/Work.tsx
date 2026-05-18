import styles from "./Work.module.css";
import React from "react";

interface WorkProps {
  children: React.ReactNode;
}

function Work({children}: WorkProps) {
  return (
    <div className={styles.work}>
      <div className={styles.headline}>
        <p style={{fontWeight:"bold"}}>Accepting work offers via my <a className={styles.emailHighlight} href="mailto:brian209222@gmail.com">work email!</a></p>
        <p>I do web design and web/app development.</p>
      </div>
      <div className={styles.experince}>
        <div className={styles.tools}>
          <span>TOOLS</span>
          <span className={styles.pushDown}>React</span>
        </div>
        <div className={styles.development}>
          <span>DEVELOPMENT</span>
        </div>
      </div>
      <div className={styles.projects}>
        {children}
      </div>
    </div>
  );
}

export default Work;