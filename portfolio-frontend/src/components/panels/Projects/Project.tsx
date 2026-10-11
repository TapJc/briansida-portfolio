import styles from "./Project.module.scss"

export interface ProjectProps {
  title: string;
  img: string;
  description: string[];
  link: string;
}

function Project({title, img, description, link}: ProjectProps) {
  return (
    <div className={styles.project}>
      <img className={styles.project__thumbnail} src={img} alt={title}></img>
      <div className={styles.project__info}>
        <div className={styles.project__title}>
          <span>{title}</span>
        </div>
        <div className={styles.project__description}>
          {description.map((sentence, index) => 
            <p key={index}>
              {sentence}
            </p>
          )}
        </div>
        <a className={styles.project__button} href={link} target="_blank" rel="noopener noreferrer">Explore</a>
      </div>
    </div>
  );
}

export default Project;