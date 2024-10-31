// src/components/Skills.jsx
import React from 'react';
import './Skills.css'; // Import the CSS file

const skillsData = [
    { name: 'HTML', icon: 'src/assets/download (5).png' },
    { name: 'CSS', icon: 'src/assets/download (4).png' },
    { name: 'JavaScript', icon: 'src/assets/download (3).png' },
    { name: 'React.js', icon: 'src/assets/react-icon-in-a-hexagon-vector-36587857.jpg' },
    { name: 'Node.js', icon: 'src/assets/download (6).png' },
    { name: 'Express.js', icon: 'src/assets/download (7).png' },
    { name: 'MongoDB', icon: 'src/assets/download (8).png' },
    { name: 'Postman', icon: 'src/assets/download (9).png' },
    { name: 'Bootstrap', icon: 'src/assets/download (10).png' },
    { name: 'Tailwind', icon: 'src/assets/download (11).png' },
    { name: 'Canvas', icon: 'src/assets/download (12).png' },
    { name: 'Networking', icon: 'src/assets/download (13).png' },
    { name: 'STP', icon: 'src/assets/download (16).png' },
    { name: 'Cisco Packet Tracer', icon: 'src/assets/download (14).png' },
    { name: 'DNS', icon: 'src/assets/download (15).png' },
    { name: 'STP', icon: 'src/assets/download (16).png' }
    


]
const Skills = () => {
    return (
        <div className="skills">
            <h2>My Skills</h2>
            <div className="skills-container">
                {skillsData.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        <img src={skill.icon} alt={skill.name} className="skill-icon" />
                        <h3>{skill.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
