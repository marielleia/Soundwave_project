import MenuButton from "./MenuButton";
import Logo from "../images/logo.png";

function Menu() {
  return (
        <nav className="logo">
            <img src={Logo}/>
            <h1>Soundwave</h1>
            <MenuButton buttonText={"Discover"}/>
            <MenuButton buttonText={"Join"}/>
        </nav>
  );
}

export default Menu;