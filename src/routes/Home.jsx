// src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Heading from '../components/Heroimg';
import Footer from '../components/Footer';
import Skills from '../components/Skills'; // Import the Skills component

const Home = () => {
  return (
    <div>
      <Navbar />
      <Heading />
      <Skills /> {/* Add the Skills component here */}
      <Footer />
    </div>
  );
};

export default Home;
