import React, {useRef} from 'react'
import email from '../../../src/assets/email.png';
import mobile from '../../../src/assets/mobile.png';
import emailjs from '@emailjs/browser';
import '../Contact/Contact.css'

const Contact = () => {
    const form = useRef();

    const sendEmail =(e) =>{
    e.preventDefault();

    emailjs.sendForm('Gmail', 'template_3vc0ccs', form.current, 'w6funta2lC9bYLfDw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    };
    

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
          <form ref={form} onSubmit={sendEmail}>
          <input type="text"  placeholder='Your Name' />
            <input type="email" placeholder='Your Email'/>
            <textarea rows="4" cols="500" placeholder='Your Message'></textarea>
            <button className='btn-msg'>Send Message</button>
          </form>     
        </div>
    </div>
  );

  };
export default Contact