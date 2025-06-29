const projects = [
    {
      title: "Netflix-Clone",
      description: "Netflix Clone is a responsive front-end replica of Netflix’s homepage, crafted to highlight my proficiency in HTML, CSS, and JavaScript.",
      link: "https://fajarsaleem14.github.io/Netflix-clone/"
    },
     {
        title: "Inventory Management System",
        description: "The Inventory Management System is a secure ASP.NET Web Forms application using VB.NET for managing products, customers, orders, and shipments. It features role-based access, real-time inventory updates, and a modern dark-themed interface.",
        link: "http://www.inventory-sys.somee.com/Semester_Project/Login.aspx"
      },
    
    {
      title: "VogueNest",
      description: "A fully responsive online store built with HTML, CSS, and JavaScript to showcase and sell premium fashion apparel and accessories.",
      link: "https://fajarsaleem14.github.io/VogueNest/"
    },
     {
      title: "BuddHabit",
      description: "BuddHabit is a habit-tracking web application designed to help users build positive routines through daily progress monitoring and motivational reminders. It offers a simple, user-friendly interface with personalized habit goals and streak tracking.",
      link: "https://fajarsaleem14.github.io/BuddHabit/"
    },
    {
        title: "Internet and Application Development",
        description: "My personal website to upload my course labs with problem statement, solution and demonstration.",
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
  
