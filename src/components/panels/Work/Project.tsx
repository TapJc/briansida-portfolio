import styles from "./Project.module.css"

export interface ProjectProps {
  title: string;
  img: string;
  description: string[];
  link: string;
}

function Project({title, img, description, link}: ProjectProps) {
  return (
    <div className={styles.project}>
      <img className={styles.thumbnail} src={img} alt={title}></img>
      <div className={styles.projectInfo}>
        <div className={styles.projectTitle}>
          <span>{title}</span>
        </div>
        <div className={styles.projectDescription}>
          {description.map((sentence, index) => 
            <p key={index}>
              {sentence}
            </p>
          )}
        </div>
        <a className={styles.projectButton} href={link} target="_blank" rel="noopener noreferrer">view project</a>
      </div>
      <div className={styles.divider}/>
    </div>
  );
}

export default Project;