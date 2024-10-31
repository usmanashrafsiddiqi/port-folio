import React from 'react'
import { Link } from 'react-router-dom'
import "./Heroimg.css"


const Heroimg = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img  className="intro-img " src="/assets/intro-bg.jpg" />
      </div>
    <div className='content'>
      <p>i am a web developer</p>
      <h1>react developer</h1>
    
    <div>
      <Link to={"/project"} className='btn'>PROJECTS</Link>
      <Link to={"/contact"} className=' btn btn-light'>CONTACT</Link>
    </div>
    </div>
    </div>
  )
}

export default Heroimg
