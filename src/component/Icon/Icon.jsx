import React from 'react'
import './Icon.css'
import LinkedIn from '../../assets/linkedIn.png';
import GitHub from '../../assets/github.png';
import Message from '../../assets/message.png';
import Person from '../../assets/person.png';


const Icon = () => {
  return (
    <div className='Icon'>
        <img src={LinkedIn} alt="" className='LinkedIn'/>
        <img src={GitHub} alt="" className='Github'/>
        <img src={Message} alt="" className='Message'/>
        <img src={Person} alt="" className='Person'/>
    </div>
  )
}

export default Icon