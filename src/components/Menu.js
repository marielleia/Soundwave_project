import React from "react";
import { Navbar, Nav, Container} from "react-bootstrap";
import Logo from "../images/logo.png";
import "./Menu.css";

function Menu() {
  return (
  <nav>
    <Navbar expand="lg"  bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href=".SoundWave"><img className= "logo" alt="soundwave logo" src={Logo}/> SoundWave 
        </Navbar.Brand>
          <Nav className="nav-link">
            <Nav.Link href=".discover">Discover</Nav.Link> 
            <Nav.Link href=".join">Join</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  </nav>
  );
}

export default Menu;