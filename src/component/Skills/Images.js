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
        <img src={dart} alt='' className="icons"/>
        <img src={flutter} alt='' className="icons"/>
        <img src={python} alt='' className="icons"/>
        <img src={react} alt='' className="icons"/>
        <img src={firebase} alt='' className="icons"/>
        <img src={html} alt='' className="icons"/>
        <img src={css} alt='' className="icons"/>
        <img src={js} alt='' className="icons"/>

       
    </div>
  )
}

export default Images

