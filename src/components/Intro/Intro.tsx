import styles from "./Intro.module.css";
import React from "react";

interface IntroProps {
  title: string;
  name: string;
  tags: string[];
  children: React.ReactNode;
}

function Intro({title, name, tags, children} : IntroProps) {
  return (
    <div className={styles.intro}>

      <div className={styles.introTitleBar}>
        <span>{title}</span>
      </div>

      <div className={styles.introContent}>

        <div className={styles.nameGroup}>
          <span className={styles.name}>Hello, <span style={{color: "var(--color-accent)", fontWeight: "bold"}}>I'm {name}</span></span>

          {/* Render each tag separated by an accent-colored dot, omitting the dot after the last tag */}
          <p className={styles.tagline}> 
            {tags.map((tag, index) => (
              <span key={tag}>
                {` ${tag} `}
                {index !== tags.length - 1 ? <span style={{color:"var(--color-accent)", fontWeight:"bold"}}>·</span> : null}
              </span>
            ))}
          </p>

        </div>

        <nav className={styles.nav}>
          {children}
        </nav>

      </div>

    </div>
  );
}

export default Intro;