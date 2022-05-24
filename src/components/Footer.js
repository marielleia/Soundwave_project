import FooterButton from "./FooterButton";
import Facebook from "../images/facebook.svg";
import Twitter from "../images/twitter.svg";

function Footer() {
  return (

    <footer>
        <FooterButton buttonText={"About"}/>
        <FooterButton buttonText={"Contact Us"}/>
        <svg src={Facebook}/>
        <svg src={Twitter}/>
    </footer>
  );
}

export default Footer;