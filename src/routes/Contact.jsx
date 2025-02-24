import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div style={{ 
        backgroundImage: "url('../assets/contactbg.jpg')",  // Add your background image here
        backgroundSize: "cover", // Ensures the image covers the entire component
        backgroundPosition: "center", // Centers the background image
        backgroundRepeat: "no-repeat", // Ensures the background image doesn't repeat
        minHeight: "100vh", // Makes sure the component covers the full height of the viewport
    }}>
      <Heroimg2 heading={"CONTACT"} text={"Lets have a chat"}/>
      <Form/>
    </div>
  )
}

export default Contact
