import React from 'react';
import './Projectuse.css'; // Import the CSS file

const Projectuse = () => {
  // Data for projects
  const projectData = [
    {
      title: "Offical Landing Page of BRISKBOLD",
      image: "/assets/briskboldbg.png",
      link: "https://briskbold.com/",
    },
    {
      title: "Offical Landing Page of BRISKBOLDproperties",
      image: "/assets/briskprobg.png",
      link: "https://briskboldproperties.com/",
    },
    {
      title: "GOFOOD Online Ordering Platform",
      image: "/assets/233139734-6778feb3-f788-409a-933c-983445f8d38d.png",
      link: "https://your-link-to-mern-app.com",
    },
    {
      title: "Guess the Number Game",
      image: "/assets/images.png",
      link: "https://guess-the-number-game-gilt.vercel.app/",
    },
    {
      title: "Weather App",
      image: "/assets/flat-user-interface-concept-with-weather-widgets-web-elements-mobile-design_1284-45211.png",
      link: "https://weatherapp-using-html-css-js.vercel.app", // Corrected link
    },
    {
      title: "ToDo Application",
      image: "/assets/download.png",
      link: "https://todo-app-html-css-js.vercel.app/",
    },
    {
      title: "QR Code Generator",
      image: "/assets/qr.png",
      link: "https://qr-code-generator-liart-pi.vercel.app/",
    },
    {
      title: "Keyboard Event Tracker",
      image: "/assets/download (2).png",
      link: "https://keyboard-event-tracker.vercel.app/",
    },
    {
      title: "BMI Calculator",
      image: "/assets/pngtree-bmi-cartoon-vector-illustration-depicting-medical-concept-unhealthy-vector-body-vector-png-image_47239794.jpg",
      link: "https://bmi-calculator-lemon-mu.vercel.app", // Corrected link
    },
    {
      title: "Digital Clock",
      image: "/assets/download (18).png",
      link: "https://digital-clock-lyart-chi.vercel.app/", // Corrected link
    }
  ];

  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <div
            className={`project-card ${index % 2 === 0 ? 'left' : 'right'}`} // Decide left or right based on index
            key={index}
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projectuse;
