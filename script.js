const projects = [
    {
      title: "Netflix-Clone",
      description: "Netflix Clone is a responsive front-end replica of Netflix’s homepage, crafted to highlight my proficiency in HTML, CSS, and JavaScript.",
      link: "https://fajarsaleem14.github.io/Netflix-clone/"
    },
    {
      title: "VogueNest",
      description: "A fully responsive online store built with HTML, CSS, and JavaScript to showcase and sell premium fashion apparel and accessories.",
      link: "https://fajarsaleem14.github.io/VogueNest/"
    },
    {
        title: "Application Development",
        description: "My personal website where I upload my course(Interent and Application Development) labs with problem statement, solution and demonstration.",
        link: "http://www.inventory-sys.somee.com/"
     },
    {
        title: "Portfolio Website",
        description: "My personal portfolio built with HTML,CSS and Javascript to showcase my projects.",
        link: "https://github.com/fajarsaleem14/Personal-Portfolio.git"
      }
  ];
  
  const projectList = document.getElementById("project-list");
  
  projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "card";
  
    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank">View Project</a>
    `;
  
    projectList.appendChild(card);
  });
  
