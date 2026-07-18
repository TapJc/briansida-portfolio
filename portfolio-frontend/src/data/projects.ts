import portfolio from "../assets/images/projects/portfolio.webp";
import ecommerceSite from "../assets/images/projects/ecommerce.webp";
import peoriaFresh from "../assets/images/projects/peoriaFresh.webp";
import healthScape from "../assets/images/projects/healthScape.webp";
import timeToDie from "../assets/images/projects/timeToDie.webp";

// Static list of projects displayed in the Work panel
export const projects = [
    {
    title: "Brian's Portfolio",
    img: portfolio,
    description: [
    `A single-page personal portfolio built with React and TypeScript, featuring a windowed desktop interface with 
    draggable, stackable panels that preserve their last position. Includes a light/dark theme toggle with 
    localStorage persistence, dynamic z-index management, responsive layouts, and viewport boundary clamping to 
    ensure panels remain accessible across different screen sizes.`,
    `Developed a Spring Boot backend that validates contact form requests, securely processes submissions, and uses 
    SMTP to send emails generated through the portfolio's contact panel directly to me.`
    ],
    link: "https://github.com/TapJc/briansida-portfolio"
  },
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
    `Developed HealthScape, a Unity-based bullet hell game where players battle their unhealthy habits while 
    navigating a challenging five-floor labyrinth. Working within a team of five, I contributed through weekly 
    planning sessions to define goals, coordinate development efforts, and ensure project milestones were met.`,
    `Using C# and the Unity Engine, I developed and debugged ranged and stationary enemy AI, implemented projectile 
    mechanics, and created the tutorial UI that guided players through the game's objectives and core systems. 
    `
    ],
    link: "https://kmann725.itch.io/healthscape"
  },
  {
    title: "Time to Die",
    img: timeToDie,
    description: [
      `Developed Time to Die, a Unity prototype where players take on the role of Death and collect souls 
      through dice-based combat encounters. As part of a five-person team, I collaborated in weekly planning 
      sessions to define development goals and coordinate responsibilities.`,
      `Using C# and the Unity Engine, I developed and debugged the player movement system and third-person 
      camera controls. I also designed and implemented the overworld and battle tutorial UIs to introduce players 
      to game objectives, movement, and combat mechanics, helping create an intuitive experience.
      `
    ],
    link: "https://jackson-l.itch.io/time-to-die"
  }
];

// Static list of frameworks & technologies displayed in the experience section in Work panel
export const technologies = [
  "React", "Node.js", "Express.js", "Spring Boot", "Spring Framework", "REST APIs", "H2 Database" ,"HTML", "CSS", "Git/GitHub"
];

// Static list of languages displayed in the experience section in Work panel
export const languages = [
  "Java", "Python", "C++", "C#", "JavaScript", "TypeScript", "SQL"
];