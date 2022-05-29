import React from "react";
import ImageHero from "../components/ImageHero.js";
import HomepageText from "../components/HomepageText.js";
import "./Portada.css"

function Portada() {
    return (
          <>
              <span className="circle1"></span>
              <span className="circle2"></span>
              <span className="circle3"></span>
              <ImageHero/>
              <HomepageText/>
          </>
    );
  }
  
  export default Portada;