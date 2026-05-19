import styles from "./Work.module.css";
import ToolBadge from "./ToolBadge";
import React from "react";

interface WorkProps {
  technologies: string[];
  languages: string[];
  children: React.ReactNode;
}

function Work({technologies, languages, children}: WorkProps) {
  return (
    <div className={styles.work}>
      <div className={styles.headline}>
        <p style={{fontWeight:"bold"}}>Accepting work offers via my <a className={styles.emailHighlight} href="mailto:brian209222@gmail.com">work email!</a></p>
        <p>I do web design and web/app development.</p>
      </div>
      <div className={styles.skillsGrid}>
        <div className={styles.tools}>
          <h3 className={styles.titleHighlight}>TECHNOLOGIES</h3>
          {
            technologies.map(tech => (
              <ToolBadge key={tech}>{tech}</ToolBadge>
            ))
          } 
        </div>
        <div className={styles.development}>
          <h3 className={styles.titleHighlight}>LANGUAGES</h3>
          {
            languages.map(language => (
              <ToolBadge key={language}>{language}</ToolBadge>
            ))
          }
        </div>
      </div>
      <div className={styles.divider}/>
      <div className={styles.projects}>
        <span className={styles.titleHighlight}>DEVELOPMENT</span>
        {children}
      </div>
    </div>
  );
}

export default Work;