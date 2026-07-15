import styles from "./Contact.module.css";
import { useState } from "react";

import { IoAlertCircle } from "react-icons/io5";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

type ContactField = "name" | "email" | "subject" | "message";
const emptyContactForm = {
  name: "",
  email: "",
  subject: "",
  message: ""
}

function Contact() {
  const [contactForm, setContactForm] = useState<Record<ContactField, string>>(emptyContactForm);
  const [errors, setErrors] = useState<Record<ContactField, string>>(emptyContactForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  function emailCopied() {
    navigator.clipboard.writeText("brian209222@gmail.com");
    setCopied(true);

    setTimeout(() => {
      setCopied(false)
    }, 3000); // Resets every 3 seconds
  }

  function updateContactForm(field: ContactField, value: string) {
    // Clear the field's validation error as the user edits it
    if (errors) {
      setErrors(prev => ({
        ...prev, [field]: ""
      }));
    }

    setContactForm(prev => ({
      ...prev, [field]: value
    }));
  }

  async function handleSubmit(event : React.SyntheticEvent<HTMLFormElement, SubmitEvent>) {
    // Handle the form submission in React instead of letting the browser reload the page.
    event.preventDefault();

    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(contactForm)
      })

      if (!response.ok) {
        setErrors(await response.json());
      } else {
        setContactForm(emptyContactForm);
      }

    } catch (error) {
      console.error("Issue with backend: ", error);
    } finally {
      // Always stop the loading state after the request completes
      setIsSubmitting(false);
    }
  }

  return (
    <div className={styles.contact}>
      <p className={styles.contactTitle}>WORK EMAIL <span className={copied ? styles.emailCopied : styles.emailHighlight} onClick={emailCopied}>brian209222@gmail.com</span></p>
      <p className={styles.contactTitle}>QUICK CONTACT</p>
    
        <form className={styles.formLayout} onSubmit={handleSubmit}>
          <div className={styles.topSection}>
            <div className={styles.formFields}>
              <input className={`${styles.inputField} ${errors?.name ? styles.inputError : ""}`} placeholder="Name" value={contactForm.name} onChange={(e) => updateContactForm("name", e.currentTarget.value)}/>
                <p className={styles.errorMessage}>
                  {errors?.name && 
                    <>
                      <IoAlertCircle className={styles.errorIcon}/> {errors.name}
                    </>                  
                  }
                </p>
              <input className={`${styles.inputField} ${errors?.email ? styles.inputError : ""}`} placeholder="Email address" value={contactForm.email} onChange={(e) => updateContactForm("email", e.currentTarget.value)}/>
                <p className={styles.errorMessage}>
                  {errors?.email && 
                    <>
                      <IoAlertCircle className={styles.errorIcon}/> {errors.email}
                    </>
                  }
                </p>
              <input className={`${styles.inputField} ${errors?.subject ? styles.inputError : ""}`} placeholder="Subject" value={contactForm.subject} onChange={(e) => updateContactForm("subject", e.currentTarget.value)}/>
                <p className={styles.errorMessage}>
                  {errors?.subject && 
                  <>
                    <IoAlertCircle className={styles.errorIcon}/> {errors.subject}
                  </>
                  }
                </p>
            </div>

            <div className={styles.messageField}>
              <textarea className={`${styles.messageInput} ${errors?.message ? styles.inputError : ""}`} placeholder="Your message" value={contactForm.message} onChange={(e) => updateContactForm("message", e.currentTarget.value)}></textarea>
                <p className={styles.errorMessage}>
                  {errors?.message && 
                    <>
                      <IoAlertCircle className={styles.errorIcon}/> {errors.message}
                    </>
                  }
                </p>
            </div>
          </div>

          <div className={styles.bottomSection}>
            <button className={styles.sendButton} type="submit" disabled={isSubmitting}>
              {isSubmitting 
                ? 
                <>
                  <AiOutlineLoading3Quarters className={styles.loadingIcon}/>
                  Sending
                </>
                : "Submit"
              }
            </button>
          </div>

        </form>
      </div>
  );
}

export default Contact;