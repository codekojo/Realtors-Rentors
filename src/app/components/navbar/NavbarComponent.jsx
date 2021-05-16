import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import Logo from "../../assets/img/logo.png";
import "./Navbar.css";

function NavbarComponent() {
  return (
    <Navbar collapseOnSelect bg="dark" fixed expand="lg" className="px-5">
      <Navbar.Brand href="#home">
        <img src={Logo} alt="Logo of Cake Cakey Cake" className="imgx" />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <HiOutlineMenuAlt3 />
      </Navbar.Toggle>

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="#" className="link">
            Home
          </Nav.Link>
          <Nav.Link href="#about" className="link">
            About
          </Nav.Link>
          <Nav.Link href="#featured" className="link">
            Featured
          </Nav.Link>
          <Nav.Link href="#services" className="link">
            Services
          </Nav.Link>
          <Nav.Link href="#gallery" className="link">
            Gallery
          </Nav.Link>
          <Nav.Link href="#tour" className="link">
            Tour
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>

      <div className="d-none d-lg-flex align-items-baseline">
        <p className="text-white mx-4 my-2 link">
          <span className="mx-2 icon-btn p-1">
            <FaPhoneAlt color="#61e786" />
          </span>
          + 123-450-766
        </p>
        <a href="#book" className="px-2 py-1 links text-white text-uppercase">
          Book Now
        </a>
      </div>
    </Navbar>
  );
}

export default NavbarComponent;
