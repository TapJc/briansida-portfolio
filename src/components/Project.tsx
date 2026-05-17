import styles from "../styles/Project.module.css"

interface ProjectProps {
  title: string;
  img: string;
  description: string;
  link: string;
}

function Project({title, img, description, link}: ProjectProps) {
  return (
    <div className={styles.project}>
      <div className={styles.thumbnail}>
        <img src={img}></img>
      </div>
      <div className={styles.projectInfo}>
        <div className={styles.projectTitle}>
          <span>{title}</span>
        </div>
        <div className={styles.projectDescription}>
          <p>{description}</p>
        </div>
        <button className={styles.viewProject}></button>
      </div>
    </div>
  );
}

export default Project;