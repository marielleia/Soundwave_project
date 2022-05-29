import React from 'react';
import "./Footer.css";
import FooterButton from "./FooterButton";
import Facebook from "../images/facebook.svg";
import Twitter from "../images/twitter.svg";

function Footer() {
  return (
    <>
      <div className='contacto'>
          <FooterButton className="about" buttonText={"About Us"}/>
          <FooterButton className="contact" buttonText={"Contact"}/>
        </div>
      <div className='social-media'>
          <div className='twit'>
            <img src={Twitter} className="twitter" alt="twitter"/><FooterButton buttonText={"Twitter"}/>
          </div>
          <div className='faceb'>
            <img src={Facebook} className="facebook" alt="facebook"/><FooterButton buttonText={"Facebook"}/>
          </div>
      </div>
    </>
  );
}
export default Footer;