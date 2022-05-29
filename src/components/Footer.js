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
          <img src={Twitter} className="twitter" alt="twitter"/><FooterButton buttonText={"Twitter"}/>
          <img src={Facebook} className="facebook" alt="facebook"/><FooterButton buttonText={"Facebook"}/>
        </div>
    </footer>
  );
}
export default Footer;