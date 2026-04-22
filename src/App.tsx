import AppWindow from './components/window';
import { useState } from 'react';

function App() {
  const [openWindow, setOpenWindow] = useState<string[]>([]);

  // Adds windowName if not open, removes it if already open
  function toggleWindow(windowName: string) {
    // Passes a function to setOpenWindow so React always uses the latest state.
    setOpenWindow(prev => prev.includes(windowName) 
      ? prev.filter(w => w !== windowName)  // remove if already open
      : [...prev, windowName]);             // add if not open
  }

  return (
    <div>
      <h1>Hello World</h1>
      <nav>
        <button onClick={() => toggleWindow("projects")}>Projects</button>
        <button onClick={() => toggleWindow("about")}>About</button>
        <button onClick={() => toggleWindow("contact")}>Contact</button>
      </nav>

      {/* Conditionally render each window if its name is in openWindow */}
      {openWindow.includes("projects") && 
        <AppWindow title="Projects" onClose={() => toggleWindow("projects")}>
          <p>Projects Content Here</p>
        </AppWindow>
      }

      {openWindow.includes("about") && 
        <AppWindow title="About" onClose={() => toggleWindow("about")}>
          <p>About Content Here</p>
        </AppWindow>
      }

      {openWindow.includes("contact") && 
        <AppWindow title="Contact" onClose={() => toggleWindow("contact")}>
          <p>Contact Content Here</p>
        </AppWindow>
      }
      
    </div>
  )
}

export default App