import React from "react";
// import '../../component/Skills/Images.css'

import firebase from '../../../src/assets/firebase.png';
import react from '../../../src/assets/react.png';
import html from '../../../src/assets/html.png';
import css from '../../../src/assets/css.png';
import js from '../../../src/assets/js.png';


const Images = () => {
  return (
    <div className="row justify-content-center mt-4">
        
       
        
        <div className="col-md-2 col-4">
          <img src={react} alt='' width="30%" className="Image"/>
          <h3>React</h3>
          </div>
        <div className="col-md-2 col-4">
          <img src={firebase} alt='' width="30%" className="Image" style={{marginTop:"-10%"}}/>
          <h3>Firebase</h3>
          </div>
        <div className="col-md-2 col-4">
          <img src={html} alt='' width="30%" className="Image"/>
          <h3>Html</h3>
          </div>
        <div className="col-md-2 col-4">
          <img src={css} alt='' width="30%" className=""/>
          <h3>Css</h3>
          </div>
        <div className="col-md-2 col-4">
          <img src={js} alt='' width="30%"  className=""/>
          <h3>Javascript</h3>
          </div>
       
    </div>
  )
}

export default Images

