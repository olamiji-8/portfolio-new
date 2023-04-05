import React from 'react'
import './NavBar.css'
import resume from '../../assets/Sotomi Olamiji updated Resume.pdf'
// import {BrowserRouter as Router} from 'react-router-dom';
// import { HashLink as Link } from 'react-router-hash-link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../Logo/Logo'

const NavBar = () => {
  return (
    // <div className='NavBar'>
    //   <Router>
    //         <Link style={{textDecoration: 'none'}} to= '#about' smooth><h5>About</h5></Link>
    //         <Link style={{textDecoration: 'none'}} to= '#work' smooth><h5>Work</h5></Link>
    //         <Link style={{textDecoration: 'none'}} to= '#skills' smooth><h5>Skills</h5></Link>
    //         <Link style={{textDecoration: 'none'}} to= '#contact'smooth><h5>Contact</h5></Link>    
    //   </Router>
        
        
        
    //       <a href={resume}><button>Resume</button></a>
    //       <a href={resume}><button>Resume</button></a>
    
    
    // </div>
    <div className='NavBar'>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <Logo/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#work">Work</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
           
          </Nav>
          <Nav className='ms-auto'>
           <a href={resume}><button>Resume</button></a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </div>
  )
}
export default NavBar