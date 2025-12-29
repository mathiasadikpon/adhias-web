import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png"; // add your logo here

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar dark color="primary" expand="md" sticky="top">
      <NavbarBrand href="/" className="ms-3 d-flex align-items-center">
        <img src={Logo} alt="Logo" className="me-2" width="50" />
        <h1 className="mb-0">Mathias <Adikpon></Adikpon></h1>
      </NavbarBrand>

      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />

      <Collapse isOpen={menuOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/projects">
              Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
