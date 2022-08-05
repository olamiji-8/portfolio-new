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
        <img src={dart} alt=''/>
        <img src={flutter} alt=''/>
        <img src={python} alt=''/>
        <img src={react} alt=''/>
        <img src={firebase} alt=''/>
        <img src={html} alt=''/>
        <img src={css} alt=''/>
        <img src={js} alt=''/>

       
    </div>
  )
}

export default Images

