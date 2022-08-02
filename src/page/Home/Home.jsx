import React from 'react'
import NavBar from '../../component/NavBar/NavBar'
import About from '../../container/About/About'
import Logo from '../../Logo'

const Home = () => {
  return (
    <div>
        <Logo/>
        <NavBar/>
        <div>
            <h5>LET'S BUILD SOMETHING TOGETHER</h5>
            <h3>Hi, I'm Olamiji</h3>
            <h3>A Frontend Web Developer</h3>
            <h5>I’m focused on building responsive Frontend web applications while learning & exploring other technologies.</h5>

        </div>
        <About/>
    </div>
  )
}

export default Home