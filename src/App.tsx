import Panel from './components/Panel';
import styles from './styles/App.module.css';
import { useState } from 'react';

function App() {
  const [openPane, setOpenPane] = useState<string[]>([]);
  // Keeps track of the zIndex of each window to manage stacking order
  const [zIndexRecord, setZIndexRecord] = useState<Record<string, number>>({projects: 0, about: 0, contact: 0});
  const basePositionX = window.innerWidth * 0.25;
  const basePositionY = window.innerHeight * 0.35;
  
  // Adds windowName if not open, removes it if already open
  function togglePane(windowName: string) {
    // Sets the zIndex of the toggled Pane to be 2 above the current max
    if (!openPane.includes(windowName)) raiseZIndex(windowName);

    // Passes a function to setOpenPane so React always uses the latest state
    setOpenPane(prev => prev.includes(windowName) 
      ? prev.filter(w => w !== windowName)  // remove if already open
      : [...prev, windowName]);             // add if not open
  }

  // Raises the zIndex of the specified window to be above all others
  function raiseZIndex(windowName: string) {
    // Passes a function to setZIndexRecord so React always uses the latest state
    setZIndexRecord(prev => {
      const maxZ = Math.max(...Object.values(prev));
      // Sets the zIndex of the raised window to be 2 above the current max 
      return {...prev, [windowName]: maxZ + 2};
    })
  }

  return (
    <div className={styles.desktop}>

      <div className={styles.intro}>

        <div className={styles.introTitleBar}>
          <span>Home</span>
        </div>

        <div className={styles.introContent}>

          <div className={styles.nameGroup}>
            <span className={styles.name}>Hello, <span style={{color: "var(--color-accent)", fontWeight: "bold"}}>I'm Brian</span></span>
            <p className={styles.tagline}>fullstack developer <span style={{color:"var(--color-accent)", fontWeight:"bold"}}>·</span> cs graduate <span style={{color:"var(--color-accent)", fontWeight:"bold"}}>·</span> introvert</p>
          </div>

          <nav className={styles.nav}>
            <button onClick={() => togglePane("projects")}>Projects</button>
            <button onClick={() => togglePane("about")}>About</button>
            <button onClick={() => togglePane("contact")}>Contact</button>
          </nav>

        </div>

      </div>

        {/* Conditionally render each window if its name is in openPane */}
        {openPane.includes("projects") && 
          <Panel title="Projects" initialX={(openPane.indexOf("projects") * 50) + basePositionX} initialY={(openPane.indexOf("projects") * 30) + basePositionY} maxWidth="860px" zIndex={zIndexRecord["projects"]} onRaise={() => raiseZIndex("projects")} onClose={() => togglePane("projects")}>
            <p>Projects Content Here</p>
          </Panel>
        }

        {openPane.includes("about") && 
          <Panel title="About" initialX={(openPane.indexOf("about") * 50) + basePositionX} initialY={(openPane.indexOf("about") * 30) + basePositionY} zIndex={zIndexRecord["about"]} onRaise={() => raiseZIndex("about")} onClose={() => togglePane("about")}>
            <p>About Content Here</p>
          </Panel>
        }

        {openPane.includes("contact") && 
          <Panel title="Contact" initialX={(openPane.indexOf("contact") * 50) + basePositionX} initialY={(openPane.indexOf("contact") * 30) + basePositionY} maxWidth="580px" maxHeight="600px" zIndex={zIndexRecord["contact"]} onRaise={() => {raiseZIndex("contact")}} onClose={() => togglePane("contact")}>
            <p>Contact Content Here</p>
          </Panel>
        }

    </div>
  )
}

export default App