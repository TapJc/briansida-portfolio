import Panel from './components/Panel';
import styles from './styles/App.module.css';
import { useState } from 'react';

function App() {
  const [openWindow, setOpenWindow] = useState<string[]>([]);
  // Keeps track of the zIndex of each window to manage stacking order
  const [zIndexRecord, setZIndexRecord] = useState<Record<string, number>>({projects: 0, about: 0, contact: 0});
  
  // Adds windowName if not open, removes it if already open
  function toggleWindow(windowName: string) {
    // Passes a function to setOpenWindow so React always uses the latest state
    setOpenWindow(prev => prev.includes(windowName) 
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
      <div>
        <h1>Hello World</h1>
        <nav>
          <button onClick={() => toggleWindow("projects")}>Projects</button>
          <button onClick={() => toggleWindow("about")}>About</button>
          <button onClick={() => toggleWindow("contact")}>Contact</button>
        </nav>

        {/* Conditionally render each window if its name is in openWindow */}
        {openWindow.includes("projects") && 
          <Panel title="Projects" zIndex={zIndexRecord["projects"]} onRaise={() => raiseZIndex("projects")} onClose={() => toggleWindow("projects")}>
            <p>Projects Content Here</p>
          </Panel>
        }

        {openWindow.includes("about") && 
          <Panel title="About" zIndex={zIndexRecord["about"]} onRaise={() => raiseZIndex("about")} onClose={() => toggleWindow("about")}>
            <p>About Content Here</p>
          </Panel>
        }

        {openWindow.includes("contact") && 
          <Panel title="Contact" zIndex={zIndexRecord["contact"]} onRaise={() => {raiseZIndex("contact")}} onClose={() => toggleWindow("contact")}>
            <p>Contact Content Here</p>
          </Panel>
        }
      </div>
    </div>
  )
}

export default App