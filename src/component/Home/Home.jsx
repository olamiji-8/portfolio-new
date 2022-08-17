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
            <h4 className='para-one'>LET'S BUILD SOMETHING TOGETHER</h4>
            <h1 className='para-two'>Hi, I'm Olamiji</h1>
            <h1 className='para-three'>A Frontend Web Developer</h1>
            <h4 className='para-four'>I’m focused on building responsive Frontend web applications while learning & exploring other technologies.</h4>
        </div>
        <Icon/>
    </div>
  )
}

export default Homee