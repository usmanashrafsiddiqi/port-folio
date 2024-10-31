import { FaHome, FaMailBulk, FaPhone, FaInstagram, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./Footer.css";
import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <p>Mallabagh, Srinagar</p>
            <p>Jammu and Kashmir</p>
          </div>
          <div className="phone">
            <h4>
              <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              8082958600
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              usmansiddiqi2000@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About the Company</h4>
          <p>This is me Usman! I enjoy working on new projects and design.</p>
          <div className="social">
            <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} style={{ color: "#fff", marginRight: "1rem" }} />
            </a>
            <a href="https://github.com/usmanashrafsiddiqi" target="_blank" rel="noopener noreferrer">
              <FaGithub size={20} style={{ color: "#fff", marginRight: "1rem" }} />
            </a>
            <a href="https://www.linkedin.com/in/usmansid11/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={20} style={{ color: "#fff", marginRight: "1rem" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
