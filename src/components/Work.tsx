import styles from "../styles/Work.module.css";
import React from "react";

interface WorkProps {
  children: React.ReactNode;
}

function Work({children}: WorkProps) {
  return (
    <div className={styles.work}>
      <div className={styles.overview}>
        <div className={styles.headline}>
          <p></p>
        </div>
        <div className={styles.experince}>
          <div className={styles.tools}></div>
          <div className={styles.languages}></div>
        </div>
      </div>
      <div className={styles.projects}>
        {children}
      </div>
    </div>
  );
}

export default Work;