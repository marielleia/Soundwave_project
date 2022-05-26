import React from "react";
import "./Menu.css"
import MenuButton from "./MenuButton";
import Logo from "../images/logo.png";

function Menu() {
  return (
        <nav className= "nav-bar">
            <div className="logo-bar">
                <img className= "logo" src={Logo}/>
                <h4>Soundwave</h4>
            </div>

            <div className="nav-buttons">
                <MenuButton buttonText={"Discover"}/>
                <MenuButton buttonText={"Join"}/>
            </div>
        </nav>
  );
}

export default Menu;