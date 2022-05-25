import React from 'react';
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
        <svg src={Twitter}Twitter/>
        <svg src={Facebook}Facebook/>
        </div>
    </footer>
  );
}

export default Footer;