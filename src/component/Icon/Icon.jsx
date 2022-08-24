import React from 'react'
import './Icon.css'
import LinkedIn from '../../assets/linkedIn.png';
import GitHub from '../../assets/github.png';
import Message from '../../assets/message.png';
import Person from '../../assets/person.png';


const Icon = () => {
  return (
    <div className='Icon'>
        <a href='https://www.linkedin.com/in/olamiji-sotomi-9605171a9/'><img src={LinkedIn} alt="" className='imgs'/></a>
        <img src={GitHub} alt="" className='imgs'/>
        <img src={Message} alt="" className='imgs'/>
        <img src={Person} alt="" className='imgs'/>
    </div>
  )
}

export default Icon