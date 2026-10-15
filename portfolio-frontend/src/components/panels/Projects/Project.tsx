import styles from "./Project.module.scss";

export interface ProjectProps {
  title: string;
  img: string;
  description: string[];
  link: string;
}

function Project({ title, img, description, link }: ProjectProps) {
  return (
    <article className={styles.project}>
      <img
        className={styles.project__thumbnail}
        src={img}
        alt={`Screenshot of ${title}`}
        loading="lazy"
      />
      <div className={styles.project__info}>
        <h3 className={styles.project__title}>{title}</h3>
        <div className={styles.project__description}>
          {description.map((sentence, index) => (
            <p key={index}>{sentence}</p>
          ))}
        </div>
        <a
          className={styles.project__button}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Explore ${title} (opens in a new tab)`}
        >
          Explore
        </a>
      </div>
    </article>
  );
}

export default Project;