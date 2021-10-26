import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
      
<section>
 <div className="header">
  <Navbar collapseOnSelect expand="lg">
  <Container>
  <Navbar.Brand className="siteLogo">
      <NavLink className="logo" to="/"><span className="fas fa-hamburger"></span> Meal House</NavLink>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <NavLink className="menusOfMenubar" to="/home">Home</NavLink>
      {/* <NavLink className="menusOfMenubar" to="/blogs">Blogs</NavLink> */}
      <NavLink className="menusOfMenubar" to="/about">About Us</NavLink>
      <NavLink className="menusOfMenubar" to="/contact">Contact Us</NavLink>
    </Nav>
    <Nav>
      <NavLink to="/cart">
         <span className="fas fa-shopping-cart meni-icon"></span>
      </NavLink>
      <NavLink to="/wishlist">
        <span className="fas fa-heart meni-icon"></span>
      </NavLink>
      <NavLink to="/myacoount">
        <span className="fas fa-user meni-icon"></span>
      </NavLink>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</div>
</section>
    );
};

export default Header;