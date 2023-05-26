import {
    gem,
    javascript,
    typescript,
    html,
    chatgpt,
    vscode,
    css,
    reactjs,
    tailwind,
    firebase,
    git,
    figma,
    next,
    scrimba,
    freecodecamp,
    notes,
    memesgenerator,
    gymtracker,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "works",
      title: "Works",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: gem
    },
    {
      title: "React Developer",
      icon: gem
    },
    {
      title: "Web Developer",
      icon: gem
    },
    {
      title: "UX Developer",
      icon: gem
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "ChatGPT",
      icon: chatgpt,
    },
    {
      name: "VSCode",
      icon: vscode,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Next JS",
      icon: next,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Figma",
      icon: figma,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
  ];
  
  const skills = [
    {
      title: "Next JS",
      company_name: "freeCodeCamp",
      icon: freecodecamp,
      iconBg: "#0b0a25",
      date: "June 2023",
      points: [

      ],
    },
    {
      title: "Frontend Developer Career Path",
      company_name: "Scrimba",
      icon: scrimba,
      iconBg: "#0b0a25",
      date: "March 2023 - June 2023",
      points: [
        "HTML 5","CSS 3", "Responsive design","Advanced JavaScript", "Working with APIs","Advanced React JS"
      ],
    },
    {
      title: "React Router v6",
      company_name: "Scrimba",
      icon: scrimba,
      iconBg: "#0b0a25",
      date: "May 2021 - May 2022",
      points: [
        
      ],
    },
    {
      title: "TypeScript",
      company_name: "Scrimba",
      icon: scrimba,
      iconBg: "#0b0a25",
      date: "Apr 2022 - Apr 2023",
      points: [

      ],
    },
    {
      title: "JavaScript Programming",
      company_name: "freeCodeCamp",
      icon: freecodecamp,
      iconBg: "#0b0a25",
      date: "Feb 2023 - Feb 2023",
      points: [

      ],
    },
  ];

const projects = [
    {
      name: "Notes",
      description:
        "Web application that allows users to add, modify and delete notes. It uses a localStorage to save the data.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "hooks",
          color: "green-text-gradient",
        },
      ],
      image: notes,
      live_demo_link: "https://notes.gonza.uno/",
      source_code_link: "https://github.com/gonzagramaglia/notes",
    },
    {
      name: "Meme Generator",
      description:
        "Web application that allows users to create memes calling an api, receiving templates and writing text over them.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
      ],
      image: memesgenerator,
      live_demo_link: "https://gonza.uno/",
      source_code_link: "https://github.com/gonzagramaglia",
    },
    {
      name: "Gym Tracker",
      description:
        "Web application that allows users to keep track of the progress of their gym routines. It's my first React creation built from scratch.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
      ],
      image: gymtracker,
      live_demo_link: "https://gonza.uno/",
      source_code_link: "https://github.com/gonzagramaglia",
    },
  ];
  
  export { services, technologies, skills, projects };