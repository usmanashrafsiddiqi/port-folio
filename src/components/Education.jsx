import React from 'react';
import './Education.css';

const Education = () => {
    const educationData = [
        {
            institution: "Institute of Technology, University of Kashmir",
            degree: "Bachelor of Electronics and Communication",
            year: "2023",
            marks: "CGPA: 7/10",
            image: "/assets/download (1).png" // Replace with actual image path
        },
        {
            institution: "Boys Higher Secondary",
            degree: "Higher Secondary Certificate",
            year: "2018",
            percentage: "83.4%",
            image: "/assets/hello.png" // Replace with actual image path
        },
        {
            institution: "Vision School of Education",
            degree: "Secondary School Certificate",
            year: "2016",
            marks: "Percentage: 90%",
            image: "/assets/bello.png" // Replace with actual image path
        }
    ];

    return (
        <div className="education">
            <h2>Education</h2>
            {educationData.map((edu, index) => (
                <div key={index} className="education-item">
                    <img src={edu.image} alt={edu.institution} className="education-image" />
                    <div className="education-details">
                        <h3>{edu.institution}</h3>
                        <p>{edu.degree}</p>
                        <p>Year of Completion: {edu.year}</p>
                        <p>Marks: {edu.marks || edu.percentage}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Education;
