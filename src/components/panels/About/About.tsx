import styles from "./About.module.css"
import profile from "../../../assets/images/profile.jpg";

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.profileHeader}>
        <img className={styles.profilePic} src={profile} alt="profile"></img>
        <div className={styles.profileBio}>
          <div className={styles.name}>
            <span>Brian Sida</span>
          </div>
          <div className={styles.description}>
            <p>Computer Science graduate & full-stack developer</p>
            <p>Building modern, user-focused web <a className={styles.linkHighlight} href="https://github.com/TapJc" target="_blank" rel="noopener noreferrer">applications</a></p>
          </div>
        </div>
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.paragraphSpacing}>Hi, I'm Brian, a CS graduate and developer. I've...</p>
          <ul>
            <li>collaborated with developers and UX designers to build accessible, user-focused web applications</li>
            <li>developed responsive front-end interfaces and RESTful APIs in Agile team environments</li>
            <li>built projects ranging from full-stack e-commerce platforms to interactive Unity games</li>
          </ul>
        </div>
        <div>
          <span className={styles.detailTitle}>EDUCATION</span>
          <div className={styles.detailBorder}>
            <p>Bachelor of Science in Computer Science with a Minor in Cybersecurity</p>
            <span className={styles.mutedText}>(Graduated Magna Cum Laude 2024)</span>
          </div>
        </div>
        <div>
          <span className={styles.detailTitle}>INTERESTS</span>
          <ul className={styles.sectionSpacing}>
            <li>role-playing and single-player games</li>
            <li>thriller movies and shows</li>
            <li>reading comics and novels</li>
            <li>hiking or riding my bike</li>
          </ul>
        </div>
        <div>
          <span className={styles.detailTitle}>LANGUAGE PROFICIENCY</span>
          <div className={styles.detailBorder}>
            <p>I have native fluency in <span className={styles.highlightText}>English</span> and can speak <span className={styles.highlightText}>Spanish</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;