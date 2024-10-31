import React from 'react'
import "./Aboutcontent.css"
import { Link } from 'react-router-dom'



const Aboutcontent = () => {
  return (
    <div className='about'>
      <div className="left">

        <h1>Who am i?</h1>
        <p>
            i am a front-end developer.
        </p>
        <Link to={"/contact"}>
        <button className='btn'>CONTACT</button></Link>
      </div>
      <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src='/assets/react1.jpg' className='img'></img>
            </div>
            <div className="img-stack bottom">
                <img src='/assets/react2.webp' className='img'></img>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutcontent
