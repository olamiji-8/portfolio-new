
import React from 'react'
import './NavBar.css'
import resume from '../../assets/Resume.pdf'
import {BrowserRouter as Router,Link} from 'react-router-dom';


const NavBar = () => {
  return (
    <div className='NavBar'>
      <Router>
            <Link to= '/about'><h5>About</h5></Link>
            <Link to= '/work'><h5>Work</h5></Link>
            <Link to= '/skills'><h5>Skills</h5></Link>
            <Link to= '/contact'><h5>Contact</h5></Link>



            
      </Router>
     
        
        
        
        
          <a href={resume}><button>Resume</button></a>
        
          
    </div>
  )
}
export default NavBar