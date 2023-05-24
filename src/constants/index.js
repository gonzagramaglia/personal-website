import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    chatgpt,
    css,
    reactjs,
    tailwind,
    firebase,
    git,
    figma,
    next,
    scrimba,
    freecodecamp,
    notesapp,
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
      icon: web,
    },
    {
      title: "React Developer",
      icon: web, // mobile
    },
    {
      title: "Web Developer",
      icon: web, // backend
    },
    {
      title: "UX Developer",
      icon: web, // creator
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
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Notes App",
      description:
        "Web application that allows users to add, modify and delete notes. It uses a Firebase database to store the data.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
      ],
      image: notesapp,
      source_code_link: "https://github.com/",
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
      source_code_link: "https://github.com/",
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
          color: "pink-text-gradient",
        },
      ],
      image: gymtracker,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, skills, testimonials, projects };