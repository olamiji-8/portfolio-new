import React from "react";
// import '../../component/Skills/Images.css'
import dart from '../../../src/assets/dart.png';
import firebase from '../../../src/assets/firebase.png';
import flutter from '../../../src/assets/flutter.png';
import python from '../../../src/assets/python.png';
import react from '../../../src/assets/react.png';
import html from '../../../src/assets/html.png';
import css from '../../../src/assets/css.png';
import js from '../../../src/assets/js.png';


const Images = () => {
  return (
    <div className="row justify-content-center mt-4">
         <div className="col-md-2 col-4">
          <img src={dart} alt='' width="30%" />
          <h3>Dart</h3>
          </div>
        <div className="col-md-2 col-4">
          <img src={flutter} alt='' width="30%" />
          <h3>Flutter</h3>
          </div>
        <div className="col-md-2 col-4">
          <img src={python} alt='' width="30%" />
          <h3>Python</h3>
          </div>
        <div className="col-md-2 col-4">
          <img src={react} alt='' width="30%" />
          <h3>React</h3>
          </div>
        <div className="col-md-2 col-4">
          <img src={firebase} alt='' width="30%" />
          <h3>Firebase</h3>
          </div>
        <div className="col-md-2 col-4">
          <img src={html} alt='' width="30%" />
          <h3>Html</h3>
          </div>
        <div className="col-md-2 col-4">
          <img src={css} alt='' width="30%" />
          <h3>Css</h3>
          </div>
        <div className="col-md-2 col-4">
          <img src={js} alt='' width="30%" />
          <h3>Javascript</h3>
          </div>
       
    </div>
  )
}

export default Images

