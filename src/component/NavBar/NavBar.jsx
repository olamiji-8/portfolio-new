
import React from 'react'
import './NavBar.css'
import resume from '../../assets/Resume.pdf'

const NavBar = () => {
  return (
    <div className='NavBar'>
        <h5>About</h5>
        <h5>Work</h5>
        <h5>Skills</h5>
        <h5>Contact</h5>
          <a href={resume}><button>Resume</button></a>
        
       
        
        
    </div>
  )
}
export default NavBar