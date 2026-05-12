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

      </div>
    </div>
  );
}

export default About;