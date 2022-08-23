import React from 'react'
import email from '../../../src/assets/email.png';
import mobile from '../../../src/assets/mobile.png';
import '../Contact/Contact.css'

const Contact = () => {
  <form action='https://docs.google.com/forms/u/0/d/e/1FAIpQLScXiwmupan0afRd33TWLCFdJ5Yei6S4szbhI5-zr12rIUmgjA/formResponse?edit2=2_ABaOnucF52AYLt-vlFhSomIzXdzSOGqqE7FQjyN7o8iyFJ8BeSNjGrcIKz5eb8Fhgg'/>
  return (
    <div className='Contact' id='contact'>
        <div>
            <h1>Take A Coffee & Chat With Me</h1>
        </div>
        <div>
          <div className='display-one'>
            <img src={email} alt="email"/>
          <button className='btn'>olamijisotomi@gmail.com</button>
          </div>
          <div className='display-two'>
            <img src={mobile} alt="mobile"/>
          <button className='btn'>+2349066274154</button>
          </div>
   
        </div>
        <div className='info'>
            <input type="text"  placeholder='Your Name' />
            <input type="email" placeholder='Your Email'/>
            <textarea rows="4" cols="500" placeholder='Your Message'></textarea>
            <button className='btn-msg'>Send Message</button>
        </div>
    </div>
  )
}

export default Contact