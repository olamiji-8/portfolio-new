
import React from 'react'
import './NavBar.css'
import resume from '../../assets/Resume.pdf'
import {BrowserRouter as Router} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';



const NavBar = () => {
  return (
    <div className='NavBar'>
      <Router>
            <Link style={{textDecoration: 'none'}} to= '#about' smooth><h5>About</h5></Link>
            <Link style={{textDecoration: 'none'}} to= '#work' smooth><h5>Work</h5></Link>
            <Link style={{textDecoration: 'none'}} to= '#skills' smooth><h5>Skills</h5></Link>
            <Link style={{textDecoration: 'none'}} to= '#contact'smooth><h5>Contact</h5></Link>    
      </Router>
        
        
        
          <a href={resume}><button>Resume</button></a>
        
          
    </div>
  )
}
export default NavBar