import React from "react";
import '../../component/Skills/Images.css'

import firebase from '../../../src/assets/firebase.png';
import react from '../../../src/assets/react.png';
import html from '../../../src/assets/html.png';
import css from '../../../src/assets/css.png';
import js from '../../../src/assets/js.png';
import Node from '../../../src/assets/node js.png';
import Express from '../../../src/assets/express js.png';
import MongoDB from '../../../src/assets/mongodb.png';


const Images = () => {
  return (
    <div className="row justify-content-center mt-4">
        
       
        
        <div className="col-md-2 col-2">
          <img src={react} alt='' width="20%" className="Image"/>
          <h3 className="icon_sx">React</h3>
          </div>
        <div className="col-md-2 col-2">
          <img src={firebase} alt='' width="20%" className="Image" style={{marginTop:"-10%"}}/>
          <h3 className="icon_sx">Firebase</h3>
          </div>
        <div className="col-md-2 col-2">
          <img src={html} alt='' width="20%" className="Image"/>
          <h3 className="icon_sx">Html</h3>
          </div>
        <div className="col-md-2 col-2">
          <img src={css} alt='' width="20%" className=""/>
          <h3 className="icon_sx">Css</h3>
          </div>
        <div className="col-md-2 col-2">
          <img src={js} alt='' width="20%"  className=""/>
          <h3 className="icon_sx">Javascript</h3>
          </div>
          <div className="col-md-2 col-2">
          <img src={Node} alt='' width="20%"  className=""/>
          <h3 className="icon_sx">Node JS</h3>
          </div>
          <div className="col-md-2 col-2">
          <img src={Express} alt='' width="20%"  className=""/>
          <h3 className="icon_sx">Express JS</h3>
          </div>
          <div className="col-md-2 col-2">
          <img src={MongoDB} alt='' width="20%"  className=""/>
          <h3 className="icon_sx">MongoDB</h3>
          </div>
       
    </div>
  )
}

export default Images

