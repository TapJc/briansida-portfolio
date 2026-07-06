import styles from "./CloseButton.module.css"
interface ClosebuttonProps {
  title: string;
  onClose: () => void;
}

function CloseButton({onClose, title} : ClosebuttonProps) {
  return (
    <button className={styles.closeButton} onClick={onClose}>
      <span className={styles.bracket}>[</span>
      <span className={styles.title}>{title}</span>
      <span className={styles.bracket}>]</span>
    </button>
  );
}

export default CloseButton;