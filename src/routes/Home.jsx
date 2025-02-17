// src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Heading from '../components/Heroimg';
import Footer from '../components/Footer';
import Skills from '../components/Skills'; // Import the Skills component
import Projectuse from '../components/Projectuse';
import About from './About'
import Contact from './Contact'
const Home = () => {
  return (
    <div>
     
      <Heading />
      <Skills /> {/* Add the Skills component here */}
      <Projectuse/>
      <About/>
      <Contact/>
      
    </div>
  );
};

export default Home;
