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
          <div className="d-flex">
            <div className="col-md-6">
          <div className='d-flex'>
            <img src={email} alt="email" width="10%" />
          <p className=''>olamijisotomi@gmail.com</p>
          </div>
              
            </div>
            <div className="col-md-6">
          <div className='d-flex'>
            <img src={mobile} alt="mobile" width="10%" />
          <p className=''>+2349066274154</p>
          </div>

            </div>

          </div>
   
        </div>
        <div className='info'>
          <form action="https://formspree.io/f/xqkjaplw" method="POST">
          <div className="row justify-content-center">
            <div className="col-md-5">

          <input type="text"  placeholder='Your Name' name='name' required/>
            </div>
            <div className="col-md-5">
            <input type="email" placeholder='Your Email' name='email' required/>
            </div>
            <div className="col-md-10">
            <textarea rows="4" placeholder='Your Message' name='message' required></textarea>
            </div>
            <button className='btn-msg col-md-3' >Send Message</button>
          </div>
            
          </form>     
        </div>
    </div>
  );

  };
export default Contact