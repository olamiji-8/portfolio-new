
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
    content:"This is a web application with all information about me and my projet."
  },
  {
    title:"Clone-Airbnb",
    img:Airbnb ,
    content:"This is a clone Airbnb project"
  },
  {
    title:"Blog",
    img:blog ,
    content:"This is a blog website, where articles are posted."
  },
  {
    title:"ZeroGrid",
    img:Enaira ,
    content:"This is a website created during E-naira hackathon,to improve the usage of E-naira"
  },
]




  return (
    
    <>
    <div className='container'>


    <Row xs={1} md={3} className="g-4">
      {project.map(({title, img, content}, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
               {content}
              </Card.Text>
              <a href='#'>Link here</a>
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