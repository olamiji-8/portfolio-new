import React from 'react'
import About from '../../container/About/About'
import Contact from '../../container/Contact/Contact'
import Skills from '../../container/Skills/Skills'
import Homee from '../../component/Home/Home'
import Work from '../../container/Work/Work'

const Home = () => {
  return (
    <div>
        <Homee/>
        <About/>
        <Work/>
        <Skills/>
        {/* <Contact/> */}
        
    </div>
  )
}

export default Home;