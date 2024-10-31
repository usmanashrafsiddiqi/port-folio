import React from 'react';
import { Link } from 'react-router-dom';
import "./Heroimg.css";

const Heroimg = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className="intro-img" src="/assets/intro-bg.jpg" alt="Background" />
      </div>
      <div className='content'>
        <div className='text-container'>
          <p>I am a web developer</p>
          <h1>React Developer</h1>
          <div>
            <Link to={"/project"} className='btn'>PROJECTS</Link>
            <Link to={"/contact"} className='btn btn-light'>CONTACT</Link>
          </div>
        </div>
        <div className='image-container'>
          <img src="/assets/e010aa13-f5c3-4c05-b0b8-111b7b1b9aeb.png" alt="Your Image" className="your-image" />
        </div>
      </div>
    </div>
  );
}

export default Heroimg;
