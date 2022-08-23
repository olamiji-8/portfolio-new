import React from 'react'
import pic from '../../assets/ola.jpg'
import './About.css'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import Work from '../Work/Work';

const About = () => {
  return (
    <div className='About' id='about'>
      <div className='carry'>
      <h1 className='heading'>ABOUT</h1>
      <h2 className='sub-heading'>Who AM I</h2>
      </div>
      
      <div>
        <span className='ola'>
        <img src={pic} alt=''/>
        </span>
      <span className='details'>
            <div className='details-b'>
            <h3 className='name-one'>Hi, I am</h3>
            <h3 className='name'>Sotomi Olamiji</h3>
            </div>
            <p><h4>Well, I have been working on web applications, which I started with Html, Css and Javascript and down to react.
            while still studying at college. Having my own projects, coded mostly in React JS, I have learned a lot while working on these projects. Now I am looking to get a job or an internship to get some experience, and am glad to be interviewing with you here.
              </h4></p>
              <h4>These are some qualities that I think sets me apart from other candidates</h4>
              
              <h4 className='hone'>One of the things that distinguish me from other candidates is that I am able to remain calm and focused no matter how difficult the task. I always try to stay positive and find a way out. I am sure that everything happens for a reason and that any mistake can be fixed.</h4>
              <h4 className='hone'>I am a quick learner and constantly improve my skills not only in professional but also in multiple other fields. If hired for the position, I will continue to learn and transfer obtained knowledge and skills to other team members.</h4>
              <h4 className='hone'>You will never find a more disciplined person. I am never late and know how to value the time of other people. Especially in the engineering field, where everything should be clear, structured, and meet requirements.</h4>
      </span>
        
      </div>  
        <div className='btn-about'>
          <a href='#work'>
          <button>Check out my project</button>
          </a>
          
        </div>  
        
    </div>
  )
}

export default About
