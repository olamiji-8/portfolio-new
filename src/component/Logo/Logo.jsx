import {BrowserRouter as Router,Link} from 'react-router-dom';
import React from 'react'
import "./Logo.css"
const Logo = () => {
   return (
    <div className='Logo'>
      <Router>
      <Link style={{textDecoration: 'none'}} to='/'>
      <h3>OLAPELU</h3>
      </Link>
      </Router>
      
        
    </div>
  )
}

export default Logo;