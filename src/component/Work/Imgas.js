
import React from 'react'
import Enaira from '../../assets/E-naira.png';
import portfolio  from'../../assets/portfolio.png';
import blog from'../../assets/blog.png';
import Airbnb from '../../assets/Airbnb.png';
import Eximous from '../../assets/Eximous.png';
import Cbt from '../../assets/Cbt.png';
import Memorial from '../../assets/memorial.png';
import Aipalbot from '../../assets/Aipalbot.png';

import Admin from '../../assets/admin.png';
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
    link:"http://portfolio-new-hazel.vercel.app/",
    git:"https://github.com/olamiji-8/portfolio-new.git"
    
  },
  {
    title:"Clone-Airbnb",
    img:Airbnb ,
    content:"This is a clone Airbnb project",
    link:"https://clone-airbnb-chi.vercel.app/",
    git:"https://github.com/olamiji-8/clone_airbnb.git"
  },
  {
    title:"Blog",
    img:blog ,
    content:"This is a blog website, where articles are posted.",
    link:"https://blog-three-tan-43.vercel.app/",
    git:"https://github.com/olamiji-8/blog.git"
  },
  {
    title:"Estate",
    img:Eximous ,
    content:"This is a project i was asked to do in school concerning a regenerative city",
    link:"https://eximious.vercel.app/",
    git:"https://github.com/olamiji-8/EXIMIOUS.git"
  },
  {
    title:"Cbt test",
    img:Cbt ,
    content:"This is a full stack web app(CRUD application) that i built after learning backend. I store all my questions on the database and answer then i did a call using the api i created in my frontend.",
    link:"https://cbt-project-client.vercel.app/",
    git:"https://github.com/olamiji-8/CBT_PROJECT_CLIENT.git"
  },
  {
    title:"Memorial",
    img:Memorial ,
    content:"Helping this organization in fixing bugs",
    link:"https://createtribute.com/",
    git:"https://github.com/codefixbug/CreateTributeFrontend.git"
  },
  {
    title:"Memorial",
    img:Admin ,
    content:"Working on admin dashboard",
    link:"https://admin.createtribute.com/",
    git:"https://github.com/codefixbug/CreateTributeAdmin.git"
  },
  {
    title:"Aipalbot",
    img:Aipalbot ,
    content:"This is a robotics company whereby we build web apps and adds some AI related ",
    link:"",
    git:"https://github.com/aipalbot/aipalbot.us.git"
  },
]




  return (
    
    <>
    <div className='container'>


    <Row xs={1} md={3} className="g-4">
      {project.map(({title, img, content,link,git}, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
               {content}
              </Card.Text>
              <a href={link}>Link here</a><br/>
              <a href={git}>Github Link</a>
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