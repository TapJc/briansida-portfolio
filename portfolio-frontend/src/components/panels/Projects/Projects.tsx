import { Fragment } from "react";
import styles from "./Projects.module.scss";
import ToolBadge from "./ToolBadge";

import Project from "./Project";
// Tells TypeScript this import is only used for type checking and should be erased at runtime
import type { ProjectProps } from "./Project";

interface WorkProps {
  technologies: string[];
  languages: string[];
  projects: ProjectProps[];
}

function Projects({ technologies, languages, projects }: WorkProps) {
  return (
    <div className={styles.projects}>
      <div className={styles.projects__headline}>
        <p className={styles.projects__label}>
          Available for software development opportunities and freelance projects via my{" "}
          <a className={styles.projects__email} href="mailto:brian209222@gmail.com">email</a>
        </p>
        <p>I build software and web-based solutions from concept to deployment, combining intuitive user experiences with scalable and reliable systems</p>
      </div>

      <div className={styles['projects__skills-grid']}>
        <section aria-labelledby="projects-technologies">
          <h2 id="projects-technologies" className={styles.projects__title}>TECHNOLOGIES</h2>
          <ul role="list">
            {technologies.map(tech => (
              <ToolBadge key={tech}>{tech}</ToolBadge>
            ))}
          </ul>
        </section>

        <section aria-labelledby="projects-languages">
          <h2 id="projects-languages" className={styles.projects__title}>LANGUAGES</h2>
          <ul role="list">
            {languages.map(language => (
              <ToolBadge key={language}>{language}</ToolBadge>
            ))}
          </ul>
        </section>
      </div>

      <div className={styles.projects__divider} />

      <section aria-labelledby="projects-development">
        <h2 id="projects-development" className={styles.projects__title}>DEVELOPMENT</h2>
        {projects.map(project => (
          <Fragment key={project.title}>
            <Project {...project} />
            <div className={styles.projects__divider} />
          </Fragment>
        ))}

        <p className={styles['projects__footer-note']}>
          See more on{" "}
          <a
            className={styles['projects__footer-link']}
            href="https://github.com/TapJc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub (opens in a new tab)"
          >
            Github
          </a>
        </p>
      </section>
    </div>
  );
}

export default Projects;