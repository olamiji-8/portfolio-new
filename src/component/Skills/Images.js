import React from "react";
import '../../component/Skills/Images.css'
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
    <div className="Image">
         <div className="img">
          <img src={dart} alt=''/>
          <h3>Dart</h3>
          </div>
        <div className="img">
          <img src={flutter} alt=''/>
          <h3>Flutter</h3>
          </div>
        <div className="img">
          <img src={python} alt=''/>
          <h3>Python</h3>
          </div>
        <div className="img">
          <img src={react} alt=''/>
          <h3>React</h3>
          </div>
        <div className="img">
          <img src={firebase} alt=''/>
          <h3>Firebase</h3>
          </div>
        <div className="img">
          <img src={html} alt=''/>
          <h3>Html</h3>
          </div>
        <div className="img">
          <img src={css} alt=''/>
          <h3>Css</h3>
          </div>
        <div className="img">
          <img src={js} alt=''/>
          <h3>Javascript</h3>
          </div>
       
    </div>
  )
}

export default Images

