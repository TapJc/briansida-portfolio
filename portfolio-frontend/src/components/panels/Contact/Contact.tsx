import styles from "./Contact.module.scss";
import { useEffect, useRef, useState } from "react";

import { IoAlertCircle, IoCheckmarkCircle } from "react-icons/io5";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

type ContactField = "name" | "email" | "subject" | "message";
type StatusType = "success" | "error";
const emptyContactForm = {
  name: "",
  email: "",
  subject: "",
  message: ""
}
const maxLength = 500;

function Contact() {
  const [contactForm, setContactForm] = useState<Record<ContactField, string>>(emptyContactForm);
  const [inputErrors, setInputErrors] = useState<Record<ContactField, string>>(emptyContactForm);
  const [submitStatus, setSubmitStatus] = useState<{type: StatusType, message: string} | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const statusTimeout = useRef<number | null>(null);

  function emailCopied() {
    navigator.clipboard.writeText("brian209222@gmail.com");
    setCopied(true);

    setTimeout(() => {
      setCopied(false)
    }, 3000); // Resets every 3 seconds
  }

  function updateContactForm(field: ContactField, value: string) {
    // Clear the field's validation error as the user edits it
    if (inputErrors[field]) {
      setInputErrors(prev => ({
        ...prev, [field]: ""
      }));
    }

    setContactForm(prev => ({
      ...prev, [field]: value
    }));
  }

  // Displays a temporary submission status message and resets its timer
  function showSubmitStatus(type: StatusType, message: string) {
    setSubmitStatus({type, message});
    
    if (statusTimeout.current) clearTimeout(statusTimeout.current);

    statusTimeout.current = setTimeout(() => {
      setSubmitStatus(null);
      statusTimeout.current = null;
    }, (8000));
  }

  useEffect(() => {
    return () => {
      // Clear the timeout if the component unmounts
      if (statusTimeout.current) clearTimeout(statusTimeout.current);
    }
  }, [])

  async function handleSubmit(event : React.SyntheticEvent<HTMLFormElement, SubmitEvent>) {
    // Handle the form submission in React instead of letting the browser reload the page.
    event.preventDefault();

    setSubmitStatus(null);
    setIsSubmitting(true);

    try {
      // Update fetch request before deploying
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(contactForm)
      })

      const data = await response.json();

      if (!response.ok) {
        // Show either field validation errors or a general server error.
        if (data.type === "validation") {
          setInputErrors(data);
        } else if (data.type === "server") {
          showSubmitStatus("error", data.message)
        }

      } else {
        setContactForm(emptyContactForm);
        showSubmitStatus("success", data.message); 
      }

    } catch (error) {
      console.error("Issue with backend: ", error);
      showSubmitStatus("error", "Unable to connect with server");
    } finally {
      // Always stop the loading state after the request completes
      setIsSubmitting(false);
    }
  }

  return (
    <div className={styles.contact}>
      <p className={styles['contact__title']}>
        WORK EMAIL{" "}
        <button
          type="button"
          className={`${styles['contact__email']} ${copied ? styles['contact__email--copied'] : ""}`}
          onClick={emailCopied}
        >
          brian209222@gmail.com
        </button>
        {/* Announces the copy action to screen readers; the tooltip text is CSS-only */}
        <span className={styles['contact__sr-only']} aria-live="polite">
          {copied ? "Email copied to clipboard" : ""}
        </span>
      </p>

      <h2 className={styles['contact__title']}>QUICK CONTACT</h2>

      <form
        className={styles['contact__form']}
        onSubmit={handleSubmit}
        aria-label="Contact form"
        noValidate
      >
        <div className={styles['contact__top-section']}>
          <div className={styles['contact__form-fields']}>
            <input
              id="contact-name"
              className={`${styles['contact__input']} ${inputErrors?.name ? styles['contact__input--error'] : ""}`}
              placeholder="Name"
              aria-label="Name"
              autoComplete="name"
              aria-invalid={!!inputErrors.name}
              aria-describedby="contact-name-error"
              value={contactForm.name}
              onChange={(e) => updateContactForm("name", e.currentTarget.value)}
            />
            <p id="contact-name-error" className={styles['contact__error-message']} aria-live="polite">
              {inputErrors?.name && (
                <>
                  <IoAlertCircle className={styles['contact__error-icon']} aria-hidden="true" /> {inputErrors.name}
                </>
              )}
            </p>

            <input
              id="contact-email"
              type="email"
              className={`${styles['contact__input']} ${inputErrors?.email ? styles['contact__input--error'] : ""}`}
              placeholder="Email address"
              aria-label="Email address"
              autoComplete="email"
              aria-invalid={!!inputErrors.email}
              aria-describedby="contact-email-error"
              value={contactForm.email}
              onChange={(e) => updateContactForm("email", e.currentTarget.value)}
            />
            <p id="contact-email-error" className={styles['contact__error-message']} aria-live="polite">
              {inputErrors?.email && (
                <>
                  <IoAlertCircle className={styles['contact__error-icon']} aria-hidden="true" /> {inputErrors.email}
                </>
              )}
            </p>

            <input
              id="contact-subject"
              className={`${styles['contact__input']} ${inputErrors?.subject ? styles['contact__input--error'] : ""}`}
              placeholder="Subject"
              aria-label="Subject"
              aria-invalid={!!inputErrors.subject}
              aria-describedby="contact-subject-error"
              value={contactForm.subject}
              onChange={(e) => updateContactForm("subject", e.currentTarget.value)}
            />
            <p id="contact-subject-error" className={styles['contact__error-message']} aria-live="polite">
              {inputErrors?.subject && (
                <>
                  <IoAlertCircle className={styles['contact__error-icon']} aria-hidden="true" /> {inputErrors.subject}
                </>
              )}
            </p>
          </div>

          <div className={styles['contact__message-field']}>
            <textarea
              id="contact-message"
              className={`${styles['contact__message-input']} ${inputErrors?.message ? styles['contact__message-input--error'] : ""}`}
              placeholder="Your message"
              aria-label="Your message"
              aria-invalid={!!inputErrors.message}
              aria-describedby="contact-message-error"
              maxLength={maxLength}
              value={contactForm.message}
              onChange={(e) => updateContactForm("message", e.currentTarget.value)}
            />
            <p className={styles['contact__counter']} aria-hidden="true">
              {contactForm.message.length} / {maxLength}
            </p>

            <p id="contact-message-error" className={styles['contact__error-message']} aria-live="polite">
              {inputErrors?.message && (
                <>
                  <IoAlertCircle className={styles['contact__error-icon']} aria-hidden="true" /> {inputErrors.message}
                </>
              )}
            </p>
          </div>
        </div>

        <div className={styles['contact__bottom-section']}>
          {/* Always rendered, so screen readers announce status messages when they appear */}
          <div className={styles['contact__status-section']} aria-live="polite">
            {submitStatus?.type === "success" && (
              <div className={`${styles['contact__status']} ${styles['contact__status--success']}`}>
                <IoCheckmarkCircle className={styles['contact__status-icon']} aria-hidden="true" />
                <span className={styles['contact__status-message']}>{submitStatus.message}</span>
              </div>
            )}
            {submitStatus?.type === "error" && (
              <div className={`${styles['contact__status']} ${styles['contact__status--error']}`}>
                <IoAlertCircle className={styles['contact__status-icon']} aria-hidden="true" />
                <span className={styles['contact__status-message']}>{submitStatus.message}</span>
              </div>
            )}
          </div>

          <button
            className={styles['contact__send-button']}
            type="submit"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <AiOutlineLoading3Quarters className={styles['contact__loading-icon']} aria-hidden="true" />
                Sending
              </>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;