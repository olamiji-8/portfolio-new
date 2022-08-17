import React from 'react'
import pic from '../../assets/ola.jpg'
import './About.css'

const About = () => {
  return (
    <div className='About'>
      <div className='carry'>
      <h3 className='heading'>ABOUT</h3>
      <h1 className='sub-heading'>Who AM I</h1>
      </div>
      
      <div>
        <span className='ola'>
        <img src={pic} alt=''/>
        </span>
      <span className='details'>
            <h5>Hi I am Sotomi Olamiji</h5>
            <p><h5>Well, I have been working on web applications, which I started with Htnl, Css and Javascript and down to react.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt quisquam quod harum, molestias commodi enim natus, ipsum architecto voluptatum ad atque modi? Tempore dolorem error cumque quos asperiores quod ullam?
              </h5></p>
      </span>
        
      </div>  
        <div className='btn-about'>
          <button>Check out my project</button>
        </div>  
        
    </div>
  )
}

export default About
