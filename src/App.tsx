import Panel from "./components/Panel/Panel";
import NavBar from "./components/NavBar/NavBar";
import NavButton from "./components/Intro/NavButton";

import Intro from "./components/Intro/Intro";
import About from "./components/panels/About/About";
import Contact from "./components/panels/Contact/Contact";
import Work from "./components/panels/Work/Work";

import Project from "./components/panels/Work/Project";
import {projects, technologies, languages} from "./data/projects"

import styles from "./App.module.css";
import { useState, useEffect } from "react";
import { BsPersonExclamation, BsEnvelopeAt, BsFolder2, BsSun, BsMoonStars} from "react-icons/bs";


function App() {
  const [openPanel, setOpenPanel] = useState<string[]>([]);
  // Keeps track of the zIndex of each window to manage stacking order
  const [zIndexRecord, setZIndexRecord] = useState<Record<string, number>>({work: 0, about: 0, contact: 0});
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const stored = localStorage.getItem("isDarkMode");
    return stored ? stored === "true" : true; // If stored exists parse it, otherwise default to true (dark mode)
  });
  
  const basePositionX = window.innerWidth * 0.25;
  const basePositionY = window.innerHeight * 0.35;

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

      <NavBar themeIcon={isDarkMode ? <BsSun/> : <BsMoonStars/>} onClick={() => toggleTheme()}/>
      
      <Intro title="Home" name="Brian" tags={["fullstack developer", "cs graduate", "problem solver"]}>
        <NavButton onClick={() => togglePanel("about")} icon={<BsPersonExclamation/>} title="About"/>
        <NavButton onClick={() => togglePanel("work")} icon={<BsFolder2/>} title="Work"/>
        <NavButton onClick={() => togglePanel("contact")} icon={<BsEnvelopeAt/>} title="Contact"/>
      </Intro>

        {/* Conditionally render each panel if its name is in openPanel */}
        {openPanel.includes("work") && 
          <Panel title="Projects" initialX={(openPanel.indexOf("work") * 50) + basePositionX} initialY={(openPanel.indexOf("work") * 30) + basePositionY} maxWidth="860px" zIndex={zIndexRecord["work"]} onRaise={() => raiseZIndex("work")} onClose={() => togglePanel("work")}>
            <Work technologies={technologies} languages={languages}>
              {
                projects.map(project => (
                  <Project key={project.title} title={project.title} description={project.description} img={project.img} link={project.link}/>
                ))
              }
            </Work>
          </Panel>
        }

        {openPanel.includes("about") && 
          <Panel title="About" initialX={(openPanel.indexOf("about") * 50) + basePositionX} initialY={(openPanel.indexOf("about") * 30) + basePositionY} zIndex={zIndexRecord["about"]} onRaise={() => raiseZIndex("about")} onClose={() => togglePanel("about")}>
            <About/>
          </Panel>
        }

        {openPanel.includes("contact") && 
          <Panel title="Contact" initialX={(openPanel.indexOf("contact") * 50) + basePositionX} initialY={(openPanel.indexOf("contact") * 30) + basePositionY} maxWidth="560px" maxHeight="580px" zIndex={zIndexRecord["contact"]} onRaise={() => {raiseZIndex("contact")}} onClose={() => togglePanel("contact")}>
            <Contact/>
          </Panel>
        }

    </div>
  );
}

export default App