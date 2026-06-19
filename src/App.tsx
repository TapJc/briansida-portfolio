import Panel from "./components/Panel/Panel";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import NavButton from "./components/Intro/NavButton";

import Intro from "./components/Intro/Intro";
import About from "./components/panels/About/About";
import Contact from "./components/panels/Contact/Contact";
import Work from "./components/panels/Work/Work";

import {projects, technologies, languages} from "./data/projects"

import styles from "./App.module.css";
import { useState, useEffect } from "react";
import { BsPersonExclamation, BsEnvelopeAt, BsFolder2, BsSun, BsMoonStars} from "react-icons/bs";

export type PanelPosition = {
  "x": number,
  "y": number,
};
type PanelName = "work" | "about" | "contact";

function App() {
  const basePositionX = window.innerWidth * 0.20;
  const basePositionY = window.innerHeight * 0.20;

  const [panelPosition, setPanelPosition] = useState<Record<PanelName, PanelPosition>>({
    work: {x: basePositionX, y: basePositionY},
    about: {x: basePositionX, y: basePositionY},
    contact: {x: basePositionX, y: basePositionY}
  });
  const [openPanels, setOpenPanels] = useState<PanelName[]>([]);
  const [zIndexRecord, setZIndexRecord] = useState<Record<PanelName, number>>({work: 0, about: 0, contact: 0});
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const stored = localStorage.getItem("isDarkMode");
    return stored ? stored === "true" : true; // If stored exists parse it, otherwise default to true (dark mode)
  });

  function toggleTheme() {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("isDarkMode", JSON.stringify(newMode));
    
    // Toggle the 'light' class on the <html> element to switch between dark and light theme
    document.documentElement.classList.toggle("light");
  }
  
  // Run once on page load to apply the stored theme
  useEffect(() => {
    if (!isDarkMode) document.documentElement.classList.add("light");
  }, []);
  
  // Adds current panel to be above all others
  function openPanel(panel: PanelName) {
    // Sets the zIndex of the toggled Pane to be 2 above the current max
    if (!openPanels.includes(panel)) raiseZIndex(panel);

    setOpenPanels(prev => [...prev, panel]);          
  }

  // Removes panel and stores its last position 
  function closePanel(panel: PanelName, position: PanelPosition) {
    setPanelPosition(prev => (
      {...prev, [panel]: {x: position.x, y: position.y}}
    ));

    setOpenPanels(prev => prev.filter(w => w !== panel));
  }

  // Raises the zIndex of the specified window to be above all others
  function raiseZIndex(panel: PanelName) {
    setZIndexRecord(prev => {
      const maxZ = Math.max(...Object.values(prev));
      // Sets the zIndex of the raised window to be 2 above the current max 
      return {...prev, [panel]: maxZ + 2};
    });
  }

  return (
    <div className={styles.desktop}>

      <ThemeToggle themeIcon={isDarkMode ? <BsSun/> : <BsMoonStars/>} onClick={() => toggleTheme()}/>
      
      <Intro title="home" name="Brian" tags={["fullstack developer", "cs graduate", "problem solver"]}>
        <NavButton onClick={() => openPanel("about")} icon={<BsPersonExclamation/>} title="About"/>
        <NavButton onClick={() => openPanel("work")} icon={<BsFolder2/>} title="Work"/>
        <NavButton onClick={() => openPanel("contact")} icon={<BsEnvelopeAt/>} title="Contact"/>
      </Intro>

        {/* Conditionally render each panel if its name is in openPanel */}
        {openPanels.includes("work") && 
          <Panel title="work" initialX={panelPosition["work"].x} initialY={panelPosition["work"].y} maxWidth="960px" zIndex={zIndexRecord["work"]} onRaise={() => raiseZIndex("work")} onClose={(position) => closePanel("work", position)}>
            <Work technologies={technologies} languages={languages} projects={projects}/>
          </Panel>
        }

        {openPanels.includes("about") && 
          <Panel title="about" initialX={panelPosition["about"].x} initialY={panelPosition["about"].y} zIndex={zIndexRecord["about"]} onRaise={() => raiseZIndex("about")} onClose={(position) => closePanel("about", position)}>
            <About/>
          </Panel>
        }

        {openPanels.includes("contact") && 
          <Panel title="contact" initialX={panelPosition["contact"].x} initialY={panelPosition["contact"].y} maxWidth="560px" maxHeight="580px" zIndex={zIndexRecord["contact"]} onRaise={() => {raiseZIndex("contact")}} onClose={(position) => closePanel("contact", position)}>
            <Contact/>
          </Panel>
        }

    </div>
  );
}

export default App