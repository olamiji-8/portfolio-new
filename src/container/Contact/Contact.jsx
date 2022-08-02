import React from 'react'

const Contact = () => {
  return (
    <div>
        <div>
            <h1>Take A Coffee & Chat With Me</h1>
        </div>
        <div>
            <button>olamijisotomi@gmail.com</button>
            <button>+2349066274154</button>
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