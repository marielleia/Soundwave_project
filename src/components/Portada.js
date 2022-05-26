import React from "react";
import ImageHero from "../components/ImageHero.js";
import HomepageText from "../components/HomepageText.js";
import "./Portada.css"

function Portada() {
    return (
          <section className="Portada">
            
              <span class="circle1"></span>
              <span class="circle2"></span>
              <span class="circle3"></span>

              <div className="imageHero">
                <ImageHero/>
              </div>

              <div className="homeText">
                <HomepageText/>
              </div>

          </section>
    );
  }
  
  export default Portada;