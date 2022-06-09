import React from "react";
import { Navbar, Nav, Container} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import Logo from "../images/logo.png";
import "./Menu.css";

function Menu() {
  return (
  <nav>
    <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="navbar" href="#portada">
            <img className= "logo" alt="soundwave logo" src={Logo}/> <span>SoundWave</span>
          </Navbar.Brand>
            <Nav className="nav-link">
              <Nav.Link href="#discover">Discover</Nav.Link> 
              <Nav.Link href="#join">Join</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
  </nav>
  );
}

export default Menu;