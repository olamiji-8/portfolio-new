
import React from 'react'
import Enaira from '../../assets/E-naira.png';
import portfolio  from'../../assets/portfolio.png';
import blog from'../../assets/blog.png';
import Airbnb from '../../assets/Airbnb.png';
// import './Imgas.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Imgas = () => {

const project = [
  {
    title:"Portfolio",
    img:portfolio ,
    content:"This is a web application with all information about me and my projet.",
    link:"http://portfolio-new-hazel.vercel.app/"
    
  },
  {
    title:"Clone-Airbnb",
    img:Airbnb ,
    content:"This is a clone Airbnb project",
    link:"https://clone-airbnb-pi.vercel.app/"
  },
  {
    title:"Blog",
    img:blog ,
    content:"This is a blog website, where articles are posted.",
    link:"https://blog-three-tan-43.vercel.app/"
  },
  // {
  //   title:"ZeroGrid",
  //   img:Enaira ,
  //   content:"This is a website created during E-naira hackathon,to improve the usage of E-naira",
  //   link:""
  // },
]




  return (
    
    <>
    <div className='container'>


    <Row xs={1} md={3} className="g-4">
      {project.map(({title, img, content,link}, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
               {content}
              </Card.Text>
              <a href={link}>Link here</a>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

    </div>
    
    </>
  )
}

export default Imgas