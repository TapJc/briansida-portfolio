import styles from "./Contact.module.css";
import { useState } from "react";

type ContactField = "name" | "email" | "subject" | "message";

function Contact() {
  const [contactForm, setContactForm] = useState<Record<ContactField, string>>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [copied, setCopied] = useState(false);

  function emailCopied() {
    navigator.clipboard.writeText("brian209222@gmail.com");
    setCopied(true);

    setTimeout(() => {
      setCopied(false)
    }, 3000); // Resets every 3 seconds
  }

  function updateContactForm(field: ContactField, value: string) {
    setContactForm(prev => ({
      ...prev, [field]: value
    }));
  }

  return (
    <div className={styles.contact}>
      <p className={styles.contactTitle}>WORK EMAIL <span className={copied ? styles.emailCopied : styles.emailHighlight} onClick={emailCopied}>brian209222@gmail.com</span></p>
      <p className={styles.contactTitle}>QUICK CONTACT</p>
    
        <form className={styles.formLayout}>
          <div className={styles.topSection}>
            <div className={styles.formFields}>
              <input className={styles.inputField} placeholder="Name" value={contactForm.name} onChange={(e) => updateContactForm("name", e.currentTarget.value)}/>
              <input className={styles.inputField} type="email" placeholder="Email address" value={contactForm.email} onChange={(e) => updateContactForm("email", e.currentTarget.value)}/>
              <input className={styles.inputField} placeholder="Subject" value={contactForm.subject} onChange={(e) => updateContactForm("subject", e.currentTarget.value)}/>
            </div>

            <div className={styles.messageField}>
              <textarea className={styles.messageInput} placeholder="Your message" value={contactForm.message} onChange={(e) => updateContactForm("message", e.currentTarget.value)}></textarea>
            </div>
          </div>

          <div className={styles.bottomSection}>
            <button className={styles.sendButton} type="submit">send</button>
          </div>

        </form>
      </div>
  );
}

export default Contact;