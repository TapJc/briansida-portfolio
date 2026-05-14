import styles from "../styles/Contact.module.css";
import snoopyMail from "../snoopyMail.png";

function Contact() {
  return (
    <div className={styles.contact}>
      <span className={styles.title}>Email</span>
      <p className={styles.description}>The easiest way to contact me is through email. 
        Direct any requests or inquiries at my email: <span style={{color:"var(--color-accent)", fontWeight:"bold"}}>brian209222@gmail.com</span>
      </p>
      <img className={styles.mailImg} src={snoopyMail} alt="snoopyMail"></img>
      <p className={styles.description}>or press the button below to open your mail app</p>
      <button className={styles.mailBtn} style={{color:"black", fontWeight:"bold"}}>Send Email</button>
    </div>
  );
}

export default Contact;