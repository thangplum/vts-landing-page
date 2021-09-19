import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import darkLogo from "../../assets/img/Logo_full_dark.svg";
import lightLogo from "../../assets/img/Logo_full_light.svg";
import { useLocation } from "react-router";
import './Header.css';
import { NavMobileIcon } from '../../assets/icons';

const homeStyle = {
  backgroundColor: 'transparent'
}

const normalStyle = {
  backgroundColor: 'white'
}

const navNormalFontStyle = {
  color: "#010042"
}

const Header = () => {
  const { pathname } = useLocation();
  return (
    <Navbar expand="lg" className="navbar-header" style={ pathname === '/' ? homeStyle : normalStyle }>
      <Navbar.Brand className="logo-container" href="/">
        <img src={ pathname === '/' ? lightLogo : darkLogo } alt="logo" className="navbar-logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav">
        <span><NavMobileIcon /></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link
            href="/"
            className="navbar-menu-select-link"
            style={ navNormalFontStyle }
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="/product"
            className="navbar-menu-select-link"
            style={ navNormalFontStyle }
          >
            Product
          </Nav.Link>
          <Nav.Link
            href="/about"
            className="navbar-menu-select-link"
            style={ navNormalFontStyle }
          >
            About Us
          </Nav.Link>
          <Nav.Link
            href="https://vietnamtechsociety.substack.com/"
            className="navbar-menu-select-link"
            style={ navNormalFontStyle }
          >
            Blog
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;