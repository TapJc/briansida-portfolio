import styles from "./Projects.module.css";
import ToolBadge from "./ToolBadge";

import Project from "./Project";
// Tells TypeScript this import is only used for type checking and should be erased at runtime
import type { ProjectProps } from "./Project";

interface WorkProps {
  technologies: string[];
  languages: string[];
  projects: ProjectProps[];
}

function Projects({technologies, languages, projects}: WorkProps) {
  return (
    <div className={styles.projects}>
      <div className={styles.headline}>
        <p className={styles.paragraphSpacing}>Available for software development opportunities and freelance projects via my <a className={styles.emailHighlight} href="mailto:brian209222@gmail.com">email</a></p>
        <p>I build software and web-based solutions from concept to deployment, combining intuitive user experiences with scalable and reliable systems</p>
      </div>
      <div className={styles.skillsGrid}>
        <div>
          <h2 className={styles.titleHighlight}>TECHNOLOGIES</h2>
          {
            technologies.map(tech => (
              <ToolBadge key={tech}>{tech}</ToolBadge>
            ))
          } 
        </div>
        <div>
          <h2 className={styles.titleHighlight}>LANGUAGES</h2>
          {
            languages.map(language => (
              <ToolBadge key={language}>{language}</ToolBadge>
            ))
          }
        </div>
      </div>
      <div className={styles.divider}/>
      <div>
        <h2 className={styles.titleHighlight}>DEVELOPMENT</h2>
          {
            projects.map((project, index) =>
              <div key={project.title}>
                <Project {...project}/>
                <div className={styles.divider}/>

                {projects.length - 1 === index ? <p className={styles.footerNote}>See more on <a href="https://github.com/TapJc" target="_blank" rel="noopener noreferrer">Github</a></p> : null}
              </div>
            )
          }
      </div>
    </div>
  );
}

export default Projects;