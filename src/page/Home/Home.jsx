import React from 'react'
import '../../page/Home/Home.css'
import About from '../../container/About/About'
import Contact from '../../container/Contact/Contact'
import Skills from '../../container/Skills/Skills'
import Homee from '../../component/Home/Home'

const Home = () => {
  return (
    <div className='Home'>
        <Homee/>
        <About/>
        <Skills/>
        <Contact/>
        
    </div>
  )
}

export default Home;