import React from "react";
import ImageHero from "../components/ImageHero.js";
import HomepageText from "../components/HomepageText.js";
import "./Portada.css"

function Portada() {
    return (
      <section id= 'portada'>
              <span className="circle1"></span>
              <span className="circle2"></span>
              <div className="main-portada">
                <ImageHero/>
                <HomepageText/>
              </div>
              <span className="circle3"></span>
      </section>
    );
  }
  
  export default Portada;