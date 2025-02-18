import React from 'react';
import { Link } from 'react-router-dom';
import "./Heroimg.css";

const Heroimg = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className="intro-img" src="/assets/bg.jpg" alt="Background" />
      </div>
      <div className='content'>
        <div className='text-container'>
          <p>I am a web developer</p>
          <h1>Full Stack Developer</h1>
          <div>
            <Link to={"/project"} className='btn'>PROJECTS</Link>
            <Link to={"/contact"} className='btn btn-light'>CONTACT</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heroimg;
