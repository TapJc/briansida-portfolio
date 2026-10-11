import styles from "./About.module.scss"
import profile from "../../../assets/images/profile.webp";

function About() {
  return (
    <div className={styles.about}>
      <div className={styles['about__profile-header']}>
        <img className={styles['about__profile-pic']} src={profile} alt="profile"/>
        <div className={styles['about__profile-bio']}>
          <div className={styles.about__name}>
            <span>Brian Sida</span>
          </div>
          <div className={styles.about__description}>
            <p>Computer Science graduate & full-stack developer</p>
            <p>Building modern, user-focused web <a className={styles.about__link} href="https://github.com/TapJc" target="_blank" rel="noopener noreferrer">applications</a></p>
          </div>
        </div>
      </div>
      <div className={styles.about__details}>
        <div>
          <p className={styles.about__paragraph}>Hi, I'm Brian, a CS graduate and developer. I've...</p>
          <ul className={styles.about__list}>
            <li>collaborated with developers and UX designers to build accessible, user-focused web applications</li>
            <li>developed responsive front-end interfaces and RESTful APIs in Agile team environments</li>
            <li>built projects ranging from full-stack e-commerce platforms to interactive Unity games</li>
          </ul>
        </div>
        <div>
          <span className={styles['about__detail-title']}>EDUCATION</span>
          <div className={styles['about__detail-border']}>
            <p>Bachelor of Science in Computer Science with a Minor in Cybersecurity</p>
            <span className={styles.about__muted}>(Graduated Magna Cum Laude 2024)</span>
          </div>
        </div>
        <div>
          <span className={styles['about__detail-title']}>INTERESTS</span>
          <ul className={styles.about__list}>
            <li>role-playing and single-player games</li>
            <li>thriller movies and shows</li>
            <li>reading comics and novels</li>
            <li>hiking and riding my bike</li>
          </ul>
        </div>
        <div>
          <span className={styles['about__detail-title']}>LANGUAGE PROFICIENCY</span>
          <div className={styles['about__detail-border']}>
            <p>I have native fluency in <span className={styles.about__highlight}>English</span> and can speak <span className={styles.about__highlight}>Spanish</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;