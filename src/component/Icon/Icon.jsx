import React from 'react'
import './Icon.css'
import LinkedIn from '../../assets/linkedIn.png';
import GitHub from '../../assets/github.png';
import Message from '../../assets/message.png';
import Person from '../../assets/person.png';
import Resume from '../../assets/Resume.pdf';


const Icon = () => {
  return (
    <div className='Icon'>
        <a href='https://www.linkedin.com/in/olamiji-sotomi-9605171a9/'><img src={LinkedIn} alt="" className='imgs'/></a>
        <a href='https://github.com/olamiji-8'><img src={GitHub} alt="" className='imgs'/></a>
        <a href='#contact'><img src={Message} alt="" className='imgs'/></a>
        <a href={Resume}><img src={Person} alt="" className='imgs'/></a>
    </div>
  )
}

export default Icon