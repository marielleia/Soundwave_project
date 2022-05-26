import React from 'react';
import Landingpagegirl from '../images/landing-page-girl.png'
import "./ImageHero.css"

function ImageHero() {
  return (
    <header>
    <div className="ImageHero">
        <img src={Landingpagegirl} className= "chica" alt="landing-page-girl"/>
    </div>
    </header>
  );
}
export default ImageHero;