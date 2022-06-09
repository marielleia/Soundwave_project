import React from "react";
import Landingpagegirl from "../images/landing-page-girl.png";
import HomepageText from "./HomepageText.js";
import "./Main.css";

function Main() {
    return (
      <section id= 'portada'>
              <span className="circle1"></span>
              <span className="circle2"></span>
              <div className="main-portada">
                <img src={Landingpagegirl} className= "chica" alt="landing-page-girl"/>
                <HomepageText/>
              </div>
              <span className="circle3"></span>
      </section>
    );
  }
  
  export default Main;