import React, {useRef} from 'react'
import email from '../../../src/assets/email.png';
import mobile from '../../../src/assets/mobile.png';
import emailjs from 'emailjs-com';
import '../Contact/Contact.css'

const Contact = () => {
    const form = useRef();

    const sendEmail =(e) =>{
    e.preventDefault();

    emailjs.send('Gmail', 'template_3vc0ccs', form.current, 'w6funta2lC9bYLfDw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
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
          <form action="https://formsubmit.co/your@email.com" method="POST">
          <input type="text"  placeholder='Your Name' name='name'/>
            <input type="email" placeholder='Your Email' name='email'/>
            <textarea rows="4" cols="500" placeholder='Your Message' name='message'></textarea>
            <button className='btn-msg'>Send Message</button>
          </form>     
        </div>
    </div>
  );

  };
export default Contact