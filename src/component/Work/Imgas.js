import React from 'react'
import Enaira from '../../assets/E-naira.png';
import portfolio  from'../../assets/portfolio.png';
import blog from'../../assets/blog.png';
import Airbnb from '../../assets/Airbnb.png';
import './Imgas.css'

const Imgas = () => {
  return (
    <div className='projects'>
        <div className='timage'>
          <img src={Enaira} alt=''/>
          <h3>ZeroGrid</h3>
          <h5>This is a website created during E-naira hackathon,to improve the usage of E-naira</h5>
          </div>
          <div className='timage'>
          <img src={portfolio} alt=''/>
          <h3>Portfolio</h3>
          <h5>This is a web application with all information about me and my projet.</h5>
          </div>
          <div className='timage'>
          <img src={blog} alt=''/>
          <h3>Blog</h3>
          <h5 className='move'>This is a blog website, where articles are posted.</h5>
          </div>
          <div className='timage'>
          <img src={Airbnb} alt=''/>
          <h3>Clone-Airbnb</h3>
          <h5 className='move' >This is a clone Airbnb project</h5>
          </div>
    </div>
  )
}

export default Imgas