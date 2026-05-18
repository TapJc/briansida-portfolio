import styles from "./Contact.module.css";
import mail from "../../../assets/images/mail.png";
import { useState } from "react";

function Contact() {
  const [copied, setCopied] = useState(false);

  function emailCopied() {
    navigator.clipboard.writeText("brian209222@gmail.com");
    setCopied(true);

    setTimeout(() => {
      setCopied(false)
    }, 6000); // Resets every two seconds
  }

  return (
    <div className={styles.contact}>
      <span className={styles.contactTitle}>Email</span>
      <p className={styles.contactDescription}>The easiest way to contact me is through email. 
        Direct any requests or inquiries at my email: <span className={copied ? styles.emailCopied : styles.emailHighlight} onClick={emailCopied}>brian209222@gmail.com</span>
      </p>
      <img className={styles.contactImage} src={mail} alt="mail"></img>
      <p className={styles.contactDescription}>or press the button below to open your mail app</p>
      <button className={styles.contactBtn} onClick={() => {window.location.href = "mailto:brian209222@gmail.com"}}>Send Email</button>
    </div>
  );
}

export default Contact;