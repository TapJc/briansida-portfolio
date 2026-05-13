import styles from "../styles/About.module.css"
import ProfilePic from "../Snoop.png";

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.profileHeader}>
        <img className={styles.profilePic} src={ProfilePic}></img>
        <div className={styles.profileBio}>
          <div className={styles.name}>
            <span>Brian Sida</span>
          </div>
          <div className={styles.description}>
            <span>CS graduate, full-stack developer</span>
            <br/>
            <span>Problem solver building modern <a style={{color: "var(--color-accent)"}} href="https://github.com/TapJc">web applications</a></span>
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
          <span style={{fontFamily:"var(--font-heading)", fontSize:"1.5rem", fontWeight:"bold"}}>EDUCATION</span>
          <div style={{borderLeft: "3px solid var(--color-border)", marginTop:"8px"}}>
            <span style={{paddingLeft:"15px"}}>Bachelor of Science in Computer Science</span>
            <br/>
            <span style={{paddingLeft:"15px", color:"var(--color-text-muted)", fontSize:"0.9rem"}}>(Graduated Cum Laude 2024)</span>
          </div>
        </div>
        <div>
          <span style={{fontFamily:"var(--font-heading)", fontSize:"1.5rem", fontWeight:"bold"}}>INTERESTS</span>
          <ul style={{marginTop:"15px"}}>
            <li>role playing games</li>
            <li>psychological movies/shows</li>
            <li>reading comics and novels</li>
            <li>hiking or riding my bike</li>
          </ul>
        </div>
        <div>
          <span style={{fontFamily:"var(--font-heading)", fontSize:"1.5rem", fontWeight:"bold"}}>LANGUAGE PROFICIENCY</span>
          <div style={{borderLeft: "3px solid var(--color-border)", marginTop: "8px"}}>
            <span style={{paddingLeft:"15px"}}>I have native fluency in English and can speak Spanish</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;