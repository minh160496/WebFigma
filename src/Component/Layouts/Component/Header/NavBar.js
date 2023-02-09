import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import imgCyrcle from "@/assets/img/img-header/cyrcle-icon-header.svg";
import imgTriangle from "@/assets/img/img-header/triangle-right.svg";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <div to="/" className="d-flex align-items-center">
            <div className="d-flex">
              <img src={imgCyrcle} alt="logo" />
              <img src={imgTriangle} alt="logo" />
            </div>
            <h1 className="font-weight-700">Embrace</h1>
          </div>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">How it Works</Nav.Link>
            <Nav.Link href="#link">Our Work</Nav.Link>
            <Nav.Link href="#link">Pricing</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button variant="primary" className="btn-header">
          Try it now
        </Button>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
}

export default NavBar;
