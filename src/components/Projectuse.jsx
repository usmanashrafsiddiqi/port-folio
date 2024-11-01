// src/components/Projectuse.jsx
import React from 'react';
import './Projectuse.css'; // Import the CSS file

const Projectuse = () => {
  const projectData = [
    {
      title: "GOFOOD Online Ordering Platform",
      image: "/assets/233139734-6778feb3-f788-409a-933c-983445f8d38d.png",
      link: "https://your-link-to-mern-app.com",
    },
    {
      title: "Guess the Number Game",
      image: "/assets/images.png",
      link: "https://your-link-to-number-game.com",
    },
    {
      title: "Weather App",
      image: "/assets/flat-user-interface-concept-with-weather-widgets-web-elements-mobile-design_1284-45211.png",
      link: "https://your-link-to-weather-app.com",
    },
    {
      title: "ToDo Application",
      image: "/assets/download.png",
      link: "https://your-link-to-etv.com",
    },
    {
      title: "QR Code Generator",
      image: "/assets/qr.png",
      link: "https://your-link-to-etv.com",
    },
    {
      title: "Keyboard Event Tracker",
      image: "/assets/download (2).png",
      link: "https://your-link-to-etv.com",
    },
    {
      title: "BMI Calculator",
      image: "/assets/pngtree-bmi-cartoon-vector-illustration-depicting-medical-concept-unhealthy-vector-body-vector-png-image_47239794.jpg",
      link: "file:///C:/Users/usman/Downloads/web%20devvlop/project%20bmi%20calculator/index.html",
    }
  ];

  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
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
