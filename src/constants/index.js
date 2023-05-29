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
    jsmastery,
    notes,
    underconstruction,
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
      title: "Web Developer",
      icon: gem
    },
    {
      title: "React Developer",
      icon: gem
    },
    {
      title: "Frontend Developer",
      icon: gem
    }
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
      link: "https://www.youtube.com/watch?v=wm5gMKuwSYk",
      company_name: "JavaScript Mastery",
      icon: jsmastery,
      iconBg: "#0b0a25",
      date: "June 2023",
      points: [

      ],
    },
    {
      title: "Frontend Developer Career Path",
      link: "https://scrimba.com/learn/frontend",
      company_name: "Scrimba",
      icon: scrimba,
      iconBg: "#0b0a25",
      date: "March 2023 - May 2023",
      points: [
        "HTML 5","CSS 3", "Responsive design","Advanced JavaScript", "Working with APIs","Advanced React JS"
      ],
    },
    {
      title: "JavaScript Programming",
      link: "https://www.youtube.com/watch?v=jS4aFq5-91M",
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
        `Web application that allows users to add, 
        modify and delete notes. It uses localStorage 
        to save the data`,
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "hooks",
          color: "blue-text-gradient",
        },
      ],
      image: notes,
      live_demo_link: "https://notes.gonza.gr/",
      source_code_link: "https://github.com/gonzagramaglia/notes",
    },
    {
      name: "Links",
      description:
        `Web application that is a clone of Linktree, 
        but much cooler`,
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "hooks",
          color: "blue-text-gradient",
        },
        {
          name: "next",
          color: "blue-text-gradient",
        },
        {
          name: "css-animations",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
      ],
      image: "https://i.postimg.cc/sgsv7wXt/links-demo.png",
      live_demo_link: "https://links.gonza.gr/",
      source_code_link: "https://github.com/gonzagramaglia/links",
    },
    {
      name: "Album",
      description:
        `Web application under construction, 
        but you can take a look at the repository 
        and the live demo to see its current state`,
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "hooks",
          color: "blue-text-gradient",
        },
        {
          name: "material-ui",
          color: "green-text-gradient",
        },
      ],
      image: underconstruction,
      live_demo_link: "https://album.gonza.gr",
      source_code_link: "https://github.com/gonzagramaglia/album",
    },
    {
      name: "Blog",
      description:
        `Web application under construction, 
        but you can take a look at the repository 
        and the live demo to see its current state`,
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "next",
          color: "blue-text-gradient",
        },
        {
          name: "graphql",
          color: "pink-text-gradient",
        },
        {
          name: "sass",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        }
      ],
      image: underconstruction,
      live_demo_link: "https://blog.gonza.gr",
      source_code_link: "https://github.com/gonzagramaglia/blog",
    }
  ];
  
  export { services, technologies, skills, projects };