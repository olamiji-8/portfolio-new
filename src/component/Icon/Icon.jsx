import React from 'react'
import './Icon.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PersonIcon from '@mui/icons-material/Person';


const Icon = () => {
  return (
    <div className='Icon'>
         <LinkedInIcon/>
        <GitHubIcon/>
        <ContactMailIcon/>
        <PersonIcon/>
    </div>
  )
}

export default Icon