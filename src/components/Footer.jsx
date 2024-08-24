import { FaFacebook, FaHome, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
import "./Footer.css"



import React from 'react'
import { FaLinkedin } from "react-icons/fa6"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">

            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff" , marginRight: "2rem"}}/>
                    <p>Mallabagh,Srinagar</p>
                    <p>Jammu and Kashmir</p>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff" , marginRight: "2rem"}}/>
                    8082958600</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff" , marginRight: "2rem"}}/>
                    usmansiddiqi2000@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About the Company</h4>
                <p> this is me usman! i enjoy working on new projects and design</p>
                <div className="social">
                    <FaFacebook size={20} style={{color:"#fff" , marginRight: "1rem"}}/>
                    <FaTwitter size={20} style={{color:"#fff" , marginRight: "1rem"}}/>
                    <FaLinkedin size={20} style={{color:"#fff" , marginRight: "1rem"}}/>

                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
