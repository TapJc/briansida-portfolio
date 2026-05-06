import Panel from "./components/Panel";
import NavButton from "./components/NavButton"
import styles from "./styles/App.module.css";
import { useState } from "react";
import { BsPersonExclamation, BsEnvelopeAt, BsFolder2} from "react-icons/bs";

function App() {
  const [openPanel, setOpenPanel] = useState<string[]>([]);
  // Keeps track of the zIndex of each window to manage stacking order
  const [zIndexRecord, setZIndexRecord] = useState<Record<string, number>>({work: 0, about: 0, contact: 0});
  const basePositionX = window.innerWidth * 0.25;
  const basePositionY = window.innerHeight * 0.35;
  
  // Adds windowName if not open, removes it if already open
  function togglePanel(windowName: string) {
    // Sets the zIndex of the toggled Pane to be 2 above the current max
    if (!openPanel.includes(windowName)) raiseZIndex(windowName);

    // Passes a function to setOpenPanel so React always uses the latest state
    setOpenPanel(prev => prev.includes(windowName) 
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
            <NavButton onClick={() => togglePanel("about")} icon={<BsPersonExclamation/>} title="About"/>
            <NavButton onClick={() => togglePanel("work")} icon={<BsFolder2/>} title="Work"/>
            <NavButton onClick={() => togglePanel("contact")} icon={<BsEnvelopeAt/>} title="Contact"/>
          </nav>

        </div>

      </div>

        {/* Conditionally render each window if its name is in openPanel */}
        {openPanel.includes("work") && 
          <Panel title="Projects" initialX={(openPanel.indexOf("work") * 50) + basePositionX} initialY={(openPanel.indexOf("work") * 30) + basePositionY} maxWidth="860px" zIndex={zIndexRecord["work"]} onRaise={() => raiseZIndex("work")} onClose={() => togglePanel("work")}>
            <p>Work Content Here</p>
          </Panel>
        }

        {openPanel.includes("about") && 
          <Panel title="About" initialX={(openPanel.indexOf("about") * 50) + basePositionX} initialY={(openPanel.indexOf("about") * 30) + basePositionY} zIndex={zIndexRecord["about"]} onRaise={() => raiseZIndex("about")} onClose={() => togglePanel("about")}>
            <p>About Content Here</p>
          </Panel>
        }

        {openPanel.includes("contact") && 
          <Panel title="Contact" initialX={(openPanel.indexOf("contact") * 50) + basePositionX} initialY={(openPanel.indexOf("contact") * 30) + basePositionY} maxWidth="580px" maxHeight="600px" zIndex={zIndexRecord["contact"]} onRaise={() => {raiseZIndex("contact")}} onClose={() => togglePanel("contact")}>
            <p>Contact Content Here</p>
          </Panel>
        }

    </div>
  )
}

export default App