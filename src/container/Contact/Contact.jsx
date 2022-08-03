
import React from 'react'
import email from '../../../src/assets/email.png';
import mobile from '../../../src/assets/mobile.png';

const Contact = () => {
  const image = {
    height: "1px",
    width:"1px"
  }
  return (
    <div>
        <div>
            <h1>Take A Coffee & Chat With Me</h1>
        </div>
        <div>
          <div style={image}>
            <img src={email} alt=""/>
          <button>olamijisotomi@gmail.com</button>
          </div>
          <div style={image}>
            <img src={mobile} alt=""/>
          <button>+2349066274154</button>
          </div>   
        </div>
        <div>
            <input type="text" value="" placeholder='Your Name'/>
            <input type="gmail" value="" placeholder='Your Gmail'/>
            <textarea rows="4" cols="50" placeholder='Your Message'></textarea>
            <button>Send Message</button>
        </div>
    </div>
  )
}

export default Contact