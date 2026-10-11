import styles from "./CloseButton.module.scss"
interface ClosebuttonProps {
  title: string;
  onClose: () => void;
}

function CloseButton({onClose, title} : ClosebuttonProps) {
  return (
    <button className={styles['close-button']} onClick={onClose}>
      <span className={styles['close-button__bracket']}>[</span>
      <span className={styles['close-button__title']}>{title}</span>
      <span className={styles['close-button__bracket']}>]</span>
    </button>
  );
}

export default CloseButton;