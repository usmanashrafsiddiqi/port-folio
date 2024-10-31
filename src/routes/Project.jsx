import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimg2 from '../components/Heroimg2';
import Projectuse from '../components/Projectuse'; // Import the Projectuse component

const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading={"PROJECTS."} text={"Some of my recent projects."} />
      <Projectuse /> {/* Add the Projectuse component here */}
      <Footer />
    </div>
  );
}

export default Project;
