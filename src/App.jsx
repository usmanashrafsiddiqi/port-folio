import Home from './routes/Home'
import About from './routes/About'
import Project from './routes/Project'
import Contact from './routes/Contact.jsx'; 
 // Check the case here

import { Route, Routes } from 'react-router-dom'


function App() {
  

  return (
    <>
     <Routes> 
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>    
     </>
  )
}

export default App
