// src/About.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimg2 from '../components/Heroimg2';
import Aboutcontent from '../components/Aboutcontent';
import Education from '../components/Education'; // Import the Education component

const About = () => {
    return (
        <div>
           
            <Heroimg2 heading={"About."} text={"I am a front-end developer"} />
            <Aboutcontent />
            <Education /> {/* Include the Education section */}
          
        </div>
    );
}

export default About;
