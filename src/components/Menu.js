import React from "react";
import "./Menu.css"
import Logo from "../images/logo.png";
import { Navbar, Nav, Container} from "react-bootstrap";


function Menu() {
  return (
  <nav>
    <Navbar sticky="top" expand="lg"  bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#SoundWave"><img className= "logo" src={Logo}/> SoundWave 
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