import React from "react";
import "./Menu.css"
import MenuButton from "./MenuButton";
import Logo from "../images/logo.png";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
function Menu() {
  return (

  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home"><img className= "logo" src={Logo}/></Navbar.Brand>
  <Navbar.Brand href="#home"><h2>Soundwave</h2></Navbar.Brand>
    <Nav className="nav-link">
      <Nav.Link href=".discover">Discover</Nav.Link>
      <Nav.Link href=".join">Join</Nav.Link>
    </Nav>
  </Container>
</Navbar>
  );
}

export default Menu;