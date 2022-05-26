import React from 'react';
import "./Footer.css";
import FooterButton from "./FooterButton";
import Facebook from "../images/facebook.svg";
import Twitter from "../images/twitter.svg";

function Footer() {
  return (
    <footer>
        <div className='contacto'>
          <FooterButton buttonText={"About"}/>
          <FooterButton buttonText={"Contact Us"}/>
        </div>
        <div className='social-media'>
          <img src={Twitter} className= "twitter" alt="twitter"/><h6>Twitter</h6>
          <img src={Facebook} className= "facebook" alt="facebook"/><h6>Facebook</h6>
        </div>
    </footer>
  );
}

export default Footer;