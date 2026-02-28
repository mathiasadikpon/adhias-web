import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink as RouterNavLink, Link } from "react-router-dom";
import Logo from "/images/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggle = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <Navbar dark color="primary" expand="md" sticky="top">
      {/* IMPORTANT: Use Link instead of href to avoid page reload */}
      <NavbarBrand
        tag={Link}
        to="/"
        className="ms-3 d-flex align-items-center"
        onClick={closeMenu}
      >
        <img src={Logo} alt="Logo" className="me-2" width="50" />
        <h5 className="mb-0">Mathias Adikpon</h5>
      </NavbarBrand>

      <NavbarToggler onClick={toggle} />

      <Collapse isOpen={menuOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <RouterNavLink
              to="/"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active fw-bold" : "")
              }
              onClick={closeMenu}
            >
              Home
            </RouterNavLink>
          </NavItem>

          <NavItem>
            <RouterNavLink
              to="/about"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active fw-bold" : "")
              }
              onClick={closeMenu}
            >
              About
            </RouterNavLink>
          </NavItem>

          <NavItem>
            <RouterNavLink
              to="/projects"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active fw-bold" : "")
              }
              onClick={closeMenu}
            >
              Projects
            </RouterNavLink>
          </NavItem>

          <NavItem>
            <RouterNavLink
              to="/certificates"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active fw-bold" : "")
              }
              onClick={closeMenu}
            >
              Certificates
            </RouterNavLink>
          </NavItem>

          <NavItem>
            <RouterNavLink
              to="/contact"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active fw-bold" : "")
              }
              onClick={closeMenu}
            >
              Contact
            </RouterNavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
