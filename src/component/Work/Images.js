import React from 'react'
import Enaira from '../../assets/E-naira.png';
import portfolio  from'../../assets/portfolio.png';
import blog from'../../assets/blog.png';
import Airbnb from '../../assets/Airbnb.png';
import './Images.css'

const Images = () => {
  return (
    <div className='project'>
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

export default Images