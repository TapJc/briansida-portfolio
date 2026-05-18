import styles from "./CloseButton.module.css"

function CloseButton({onClick, title} : {onClick: () => void; title: string}) {
  return (
    <button className={styles.closeButton} onClick={onClick}>
      <span className={styles.bracket}>[</span>
      <span className={styles.title}>{title}</span>
      <span className={styles.bracket}>]</span>
    </button>
  );
}

export default CloseButton;