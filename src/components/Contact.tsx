import styles from "../styles/Contact.module.css";
import mail from "../assets/images/mail.png";

function Contact() {
  return (
    <div className={styles.contact}>
      <span className={styles.contactTitle}>Email</span>
      <p className={styles.contactDescription}>The easiest way to contact me is through email. 
        Direct any requests or inquiries at my email: <span className={styles.emailHighlight} title="Copy to Clipboard">brian209222@gmail.com</span>
      </p>
      <img className={styles.contactImage} src={mail} alt="mail"></img>
      <p className={styles.contactDescription}>or press the button below to open your mail app</p>
      <button className={styles.contactBtn} onClick={() => {window.location.href = "mailto:brian209222@gmail.com"}}>Send Email</button>
    </div>
  );
}

export default Contact;