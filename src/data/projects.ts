import ecommerceSite from "../assets/images/projects/amazon.png";
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
    `Developed a full-stack e-commerce web application inspired by Amazon, featuring a Java Spring Boot backend and a dynamic JavaScript frontend. 
    I designed RESTful APIs for product and order management, implemented order creation and tracking functionality, and integrated 
    an H2 database for data persistence.`,
    `On the frontend, I built responsive pages with real-time cart updates, product search, 
    and seamless state management to create a smooth and interactive shopping experience.`
    ], 
    link: "https://github.com/TapJc/ecommerce-frontend"
  },
  {
    title: "PeoriaFresh", 
    img: peoriaFresh, 
    description: 
    [`
    PeoriaFresh was a team-based web application focused on improving food accessibility in the Peoria community by connecting families,
    food banks, pantries, and local farmers through an easy-to-use platform. I contributed to both the front-end and back-end development 
    using React, TypeScript, Node.js, Express.js, and RESTful architecture.`,
    `I designed, implemented, and debugged a secure sign-in authentication page with a responsive and accessible UI. Working in an agile team of five, 
    I collaborated on feature development, testing, and continuous improvements to deliver a reliable user experience across devices.`
    ],
    link: "https://peoriafresh.org/"
  },
  {
    title: "HealthScape", 
    img: healthScape, 
    description: [`
    HealthScape was a Unity-based game project developed by a team of five, where I helped build core gameplay systems 
    using C#. I implemented player controls, physics interactions, and collision detection to create a smooth and responsive experience. 
    I also developed AI behaviors for NPCs, along with gameplay features like health, inventory, and quest systems. 
    Throughout the project, I focused on testing and debugging to ensure stable performance and an engaging player experience.`
    ],
    link: "https://kmann725.itch.io/healthscape"
  },
  {
    title: "Portfolio",
    img: portfolio,
    description: [`
    A single-page personal portfolio built with React and TypeScript, featuring a windowed desktop interface with draggable, 
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