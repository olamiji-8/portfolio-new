import React from 'react'
import './Home.css'
import NavBar from '../NavBar/NavBar'
import Logo from '../Logo/Logo'
import Icon from '../Icon/Icon'

const Homee = () => {
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
    </div>
  )
}

export default Homee