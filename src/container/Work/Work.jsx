import React from 'react'
import Enaira from '../../assets/E-naira.png';
import portfolio  from'../../assets/portfolio.png';
import blog from'../../assets/blog.png';
import Airbnb from '../../assets/Airbnb.png';
import "./Work.css"

const Work = () => {
  return (
    <div className='Work'>
       <div className='Enaira'>
        <img src={Enaira} alt=''/>
       </div>
       <div className='portfolio'>
        <img src={portfolio} alt=''/>
       </div>
       <div className='blog'>
        <img src={blog} alt=''/>
       </div>
       <div className='Airbnb'>
        <img src={Airbnb} alt=''/>
       </div>
    </div>
  )
}

export default Work