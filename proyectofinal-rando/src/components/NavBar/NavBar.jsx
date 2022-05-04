import React from "react";
import CartWidget from "../CartWidget";
import logomotorola from './img/logomotorola.jpg';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './NavBar.css';


const NavBar = () => {


    return (
        <Navbar bg="light" variant="light">
    <Container>
    <Navbar bg="dark">
  <Container>
    <Navbar.Brand href="#home">
      <img
        src={logomotorola}
        width="30px"
        height="30px"
        className="d-inline-block align-top"
        alt="Motorola logo"
      />
    </Navbar.Brand>
  </Container>
  </Navbar>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
    <CartWidget />
  </Navbar>

    );
}

export default NavBar;