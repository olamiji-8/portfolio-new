
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
    title:"ZeroGrid",
    img:Enaira ,
    content:"This is a website created during E-naira hackathon,to improve the usage of E-naira"
  },
  {
    title:"ZeroGrid",
    img:Enaira ,
    content:"This is a website created during E-naira hackathon,to improve the usage of E-naira"
  },
  {
    title:"ZeroGrid",
    img:Enaira ,
    content:"This is a website created during E-naira hackathon,to improve the usage of E-naira"
  },
  {
    title:"ZeroGrid",
    img:Enaira ,
    content:"This is a website created during E-naira hackathon,to improve the usage of E-naira"
  },
]




  return (
    // <div className='projects'>
    //     <div className='timage'>
    //       <img src={Enaira} alt=''/>
    //       <h3>ZeroGrid</h3>
    //       <h5>This is a website created during E-naira hackathon,to improve the usage of E-naira</h5>
    //       </div>
    //       <div className='timage'>
    //       <img src={portfolio} alt=''/>
    //       <h3>Portfolio</h3>
    //       <h5>This is a web application with all information about me and my projet.</h5>
    //       </div>
    //       <div className='timage'>
    //       <img src={blog} alt=''/>
    //       <h3>Blog</h3>
    //       <h5 className='move'>This is a blog website, where articles are posted.</h5>
    //       </div>
    //       <div className='timage'>
    //       <img src={Airbnb} alt=''/>
    //       <h3>Clone-Airbnb</h3>
    //       <h5 className='move' >This is a clone Airbnb project</h5>
    //       </div>
    // </div>
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