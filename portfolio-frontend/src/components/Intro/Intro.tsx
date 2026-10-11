import styles from "./Intro.module.scss";
import React from "react";
import { useState, useEffect } from "react";
interface IntroProps {
  title: string;
  name: string;
  tags: string[];
  children: React.ReactNode;
}

function Intro({title, name, tags, children} : IntroProps) {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 645)

  useEffect(() => {
    const controller = new AbortController();

    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth <= 645);

    }, {signal: controller.signal});

    return () => {
      controller.abort();
    }

  }, [])

  return (
    <div className={styles.intro}>

      {!isMobile && 
        <div className={styles['intro__title-bar']}>
          <span>{title}</span>
        </div>
      }

      <div className={styles.intro__content}>

        <div className={styles['intro__name-group']}>
          <span className={styles.intro__name}>Hello, <span className={styles.intro__highlight}>I'm {name}</span></span>

          {/* Render each tag separated by an accent-colored dot, omitting the dot after the last tag */}
          <p className={styles.intro__tagline}> 
            {tags.map((tag, index) => (
              <span key={tag}>
                {` ${tag} `}
                {index !== tags.length - 1 ? <span className={styles.intro__highlight}>·</span> : null}
              </span>
            ))}
          </p>

        </div>

        <nav className={styles.intro__nav}>
          {children}
        </nav>

      </div>

    </div>
  );
}

export default Intro;