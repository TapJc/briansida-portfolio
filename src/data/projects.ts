import ecommerceSite from "../assets/images/projects/ecommerce.png";
import peoriaFresh from "../assets/images/projects/peoriaFresh.png";
import healthScape from "../assets/images/projects/healthScape.png";
import portfolio from "../assets/images/projects/portfolio.png";

// Static list of projects displayed in the Work panel
export const projects = [
  {
    title: "Ecommerce Site", 
    img: ecommerceSite, 
    description: 
    [
    `Developed a full-stack e-commerce web application inspired by Amazon using Java Spring Boot for the backend 
    and JavaScript, HTML, and CSS for the frontend. Designed and implemented RESTful APIs for product and order 
    management, including order creation, order tracking, and H2 database integration for reliable data 
    persistence.`,
    `Built a responsive and interactive user interface featuring real-time cart updates, product search 
    functionality, and efficient state management. Focused on delivering a seamless shopping experience through 
    dynamic content rendering and smooth user interactions.`
    ], 
    link: "https://github.com/TapJc/ecommerce-frontend"
  },
  {
    title: "PeoriaFresh", 
    img: peoriaFresh, 
    description: 
    [
    `Working in an Agile team of five, I contributed to feature development, testing, and continuous improvements 
    on PeoriaFresh, a web application that improved food accessibility in the Peoria community by connecting 
    families, food banks, pantries, and local gardeners through a centralized platform.`,
    `Using React, TypeScript, and RESTful architecture, I developed and debugged frontend and backend components, 
    including secure authentication, a forgot-password email workflow, product cards, a gardener profile popup, 
    and post-login landing pages.`,
    ],
    link: "https://peoriafresh.org/"
  },
  {
    title: "HealthScape", 
    img: healthScape, 
    description: [
    `HealthScape was a Unity-based game project developed by a team of five, where I helped build core gameplay systems 
    using C#. I implemented player controls, physics interactions, and collision detection to create a smooth and responsive experience. 
    I also developed AI behaviors for NPCs, along with gameplay features like health, inventory, and quest systems. 
    Throughout the project, I focused on testing and debugging to ensure stable performance and an engaging player experience.`
    ],
    link: "https://kmann725.itch.io/healthscape"
  },
  {
    title: "Brian's Portfolio",
    img: portfolio,
    description: [
    `A single-page personal portfolio built with React and TypeScript, featuring a windowed desktop interface with draggable, 
    stackable panels. Includes a light/dark theme toggle with localStorage persistence, dynamic z-index management, 
    and responsive boundary clamping to keep panels within the viewport.`
    ],
    link: "https://github.com/TapJc/briansida-portfolio"
  }
];

// Static list of frameworks & technologies displayed in the experience section in Work panel
export const technologies = [
  "React", "Node.js", "Express.js", "Spring Boot", "Spring Framework", "HTML", "CSS", "Bootstrap", "Git/GitHub"
];

// Static list of languages displayed in the experience section in Work panel
export const languages = [
  "Java", "Python3", "C++", "C#", "JavaScript", "TypeScript", "SQL"
];