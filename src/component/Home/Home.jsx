import React from 'react'
import './Home.css'
import NavBar from '../NavBar/NavBar'
import Logo from '../Logo/Logo'
import Icon from '../Icon/Icon'

const Homee = () => {
  return (
    <div className='Home'>
        <NavBar/>
        {/* <div>
            <h4 className='para-one'>LET'S BUILD SOMETHING TOGETHER</h4>
            <div className='pone-two'>
            <h1 className='para-two'>Hi, I'm </h1>
            <h1 className='nme'>Olamiji</h1>
            </div>
            
            <h1 className='para-three'>A Frontend Web Developer</h1>
            <h4 className='para-four'>I’m focused on building responsive Frontend web applications while learning & exploring other technologies.</h4>
          </div> */}

        <div className="container text-center py-5">
            <h4 className=' mt-5'>LET'S BUILD SOMETHING TOGETHER</h4>

          <h3 className='mt-4'>Hi, I'm <span className="nme"> Olamiji</span></h3>
          
          <h3 className='para-three'>A Frontend Web Developer</h3>
          <p className='para-four'>I’m focused on building responsive Frontend web applications while learning & exploring other technologies.</p>
        </div>
         <Icon/> 
    </div>
  )
}

export default Homee