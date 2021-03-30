import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { animateScroll } from 'react-scroll';
import "./DvirWebNavbar.css";

type DvirWebNavbarProps = {
  className?: string;
};

const toggleHome = () =>
{
  animateScroll.scrollToTop();
};

const DvirWebNavbar: React.FC<DvirWebNavbarProps> = ({ className }) => {
  return (
    <Navbar variant="dark" bg="dark" sticky="top" expand="lg" className="Navi">
      <Navbar.Brand className="navHome" onClick={toggleHome}>Dvir Shahala</Navbar.Brand>
      <Navbar.Collapse id="justify-content-end">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link>About</Nav.Link>
          <Nav.Link>Skills</Nav.Link>
          <Nav.Link>Protfolio</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default DvirWebNavbar;
