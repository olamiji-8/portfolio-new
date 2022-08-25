import React from 'react'
import './Icon.css'
import LinkedIn from '../../assets/linkedIn.png';
import GitHub from '../../assets/github.png';
import Message from '../../assets/message.png';
import Person from '../../assets/person.png';
import Resume from '../../assets/Resume.pdf';


const Icon = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
      
      <div className="col-2">
      <a href='https://www.linkedin.com/in/olamiji-sotomi-9605171a9/'><img src={LinkedIn} alt="" className='imgs' width="40%" /></a>
      </div>
      <div className="col-2">
      <a href='https://github.com/olamiji-8'><img src={GitHub} alt="" className='imgs' width="40%" /></a>
      </div>
      <div className="col-2">
      <a href='#contact'><img src={Message} alt="" className='imgs' width="40%" /></a>
      </div>
      <div className="col-2">
      <a href={Resume}><img src={Person} alt="" className='imgs' width="40%" /></a>
      </div>
      </div>
    </div>
  )
}

export default Icon