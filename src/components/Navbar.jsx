import React, { useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {

  const [click, setclick] = useState(false)
  const handleclick = () => {
    setclick(!click)
  }

  const [scroll, setscroll] = useState(false)
  const handlescroll = () => {
    if (window.scrollY >= 100) {
      setscroll(true)

    } else {
      setscroll(false)
    }
  };

  window.addEventListener("scroll", handlescroll)

  return (
    <div className={scroll ? "header header-bg" : "header"}>

      <Link to={"/"} >
        <h1> USMAN ASHRAF</h1></Link>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li><Link to={"/"}>Home</Link></li>

        <li><Link to={"/project"}>Project</Link></li>
        <li><Link to={"/about"}>About</Link></li>
        <li><Link to={"/contact"}>Contact</Link></li>

      </ul>
      <div className='hamburger' onClick={handleclick}>
        {click ? (<FaTimes size={20} style={{ color: 'white' }} />) : (<FaBars size={20} style={{ color: 'white' }} />)
        }


      </div>
    </div>
  )
}

export default Navbar
