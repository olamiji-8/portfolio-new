import React from 'react'

import '../../page/Home/Home.css'
import NavBar from '../../component/NavBar/NavBar'
import About from '../../container/About/About'
import Contact from '../../container/Contact/Contact'
import Logo from '../../Logo'
import Icon from '../../component/Icon/Icon'
import Skills from '../../container/Skills/Skills'

const Home = () => {
  return (
    <div className='Home'>
        <Logo/>
        <NavBar/>
        <div>
            <h5>LET'S BUILD SOMETHING TOGETHER</h5>
            <h3>Hi, I'm Olamiji</h3>
            <h3>A Frontend Web Developer</h3>
            <h5>I’m focused on building responsive Frontend web applications while learning & exploring other technologies.</h5>

        </div>
        <Icon/>
        <About/>
        <Skills/>
        <Contact/>
        
    </div>
  )
}

export default Home;