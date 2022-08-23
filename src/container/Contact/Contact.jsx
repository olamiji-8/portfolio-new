import React from 'react'
import email from '../../../src/assets/email.png';
import mobile from '../../../src/assets/mobile.png';
import '../Contact/Contact.css'

const Contact = () => {
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
          <form>
          <input type="text"  placeholder='Your Name' />
            <input type="email" placeholder='Your Email'/>
            <textarea rows="4" cols="500" placeholder='Your Message'></textarea>
            <button className='btn-msg'>Send Message</button>
          </form>     
        </div>
    </div>
  )
}

export default Contact