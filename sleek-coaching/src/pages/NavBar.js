// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
// NavBar.js or your component file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const NavBar = ({ navbarRef, cartSize }) => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      fixed="top"
      className="navbar-solid-color"
      ref={navbarRef}
    >
      <Navbar.Brand as={Link} to="/">
        <img
          src={'/images/logo-image.jpg'}
          alt="Logo"
          height="60"
          className="rounded-circle"
          style={{ objectFit: 'cover' }}
        />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link className="nav-link" to="/">
            Home
          </Link>

          <Link className="nav-link" to="/main">
            1:1 ONLINE COACHING
          </Link>

          <NavDropdown title="Programs" id="basic-nav-dropdown">
            <Link className="dropdown-item text-center" to="/programs/bulking">
              Bulking
            </Link>
            <Link className="dropdown-item text-center" to="/programs/cutting">
              Cutting
            </Link>
            <Link className="dropdown-item text-center" to="/programs/meal-plan">
              Meal Plan
            </Link>
            <Link className="dropdown-item text-center" to="/programs/workout-library">
              Workout Library
            </Link>
          </NavDropdown>

          <Link className="nav-link" to="/about">
            ABOUT
          </Link>

          {/* Display the cart information in the navbar */}
          <Link className="nav-link" to="/cart">
  <FontAwesomeIcon icon={faShoppingCart} /> Cart ({cartSize})
</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
