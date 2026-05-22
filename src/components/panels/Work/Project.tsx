import styles from "./Project.module.css"

export interface ProjectProps {
  title: string;
  img: string;
  description: string;
  link: string;
}

function Project({title, img, description, link}: ProjectProps) {
  return (
    <div className={styles.project}>
      <img className={styles.thumbnail} src={img}></img>
      <div className={styles.projectInfo}>
        <div className={styles.projectTitle}>
          <span>{title}</span>
        </div>
        <div className={styles.projectDescription}>
          <p>{description}</p>
        </div>
        <button className={styles.viewProject} onClick={() => window.location.href = link}>View Project</button>
      </div>
      <div className={styles.divider}/>
    </div>
  );
}

export default Project;