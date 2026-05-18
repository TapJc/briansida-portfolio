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
            <span>CS graduate, full-stack developer</span>
            <br/>
            <span>Problem solver building modern <a className={styles.linkHighlight} href="https://github.com/TapJc" target="_blank" rel="noopener noreferrer">applications</a></span>
          </div>
        </div>
      </div>
      <div className={styles.details}>
        <div>
          <p style={{marginBottom: "15px"}}>Hi, I'm Brian, a CS graduate and devoloper. I've...</p>
          <ul>
            <li>collaborated with developers and UX designers to create user-focused sites</li>
            <li>developed responsive UIs and RESTful APIs in Agile team environments</li>
            <li>created projects ranging from e-commerce platforms to interactive games</li>
          </ul>
        </div>
        <div>
          <span className={styles.detailTitle}>EDUCATION</span>
          <div className={styles.detailBorder}>
            <span style={{paddingLeft:"15px"}}>Bachelor of Science in Computer Science</span>
            <br/>
            <span style={{paddingLeft:"15px", color:"var(--color-text-muted)", fontSize:"0.9rem"}}>(Graduated Cum Laude 2024)</span>
          </div>
        </div>
        <div>
          <span className={styles.detailTitle}>INTERESTS</span>
          <ul style={{marginTop:"13px"}}>
            <li>role playing games</li>
            <li>psychological movies/shows</li>
            <li>reading comics and novels</li>
            <li>hiking or riding my bike</li>
          </ul>
        </div>
        <div>
          <span className={styles.detailTitle}>LANGUAGE PROFICIENCY</span>
          <div className={styles.detailBorder}>
            <span style={{paddingLeft:"15px"}}>I have native fluency in <span className={styles.highlightText}>English</span> and can speak <span className={styles.highlightText}>Spanish</span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;