import React from 'react'
import pic from '../../assets/ola.jpg'
import './About.css'

const About = () => {
  return (
    <div className='About'>
      <div className='ola'>
        <img src={pic} alt=''/>
      </div>
      <div>
      <h3>ABOUT</h3>
        <h2>Who AM I</h2>
            <h5>Hi I am Sotomi Olamiji</h5>
            <p><h5>Well, I have been working on web applications, which I started with Htnl, Css and Javascript and down to react.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt quisquam quod harum, molestias commodi enim natus, ipsum architecto voluptatum ad atque modi? Tempore dolorem error cumque quos asperiores quod ullam?
              </h5></p>
      </div>
        
            

        <button>Check out my project</button>
    </div>
  )
}

export default About
