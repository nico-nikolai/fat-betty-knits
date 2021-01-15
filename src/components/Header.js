import React, { Component } from "react";
import {
  Collapse,
  Jumbotron,
  Nav,
  Navbar,
  NavItem,
  NavbarToggler,
} from "reactstrap";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore, faBlog } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <>
        <Jumbotron fluid>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>Fat Betty Knits</h1>
                <img
                src="/assets/images/fbk-logo.webp"
                height="200"
                width="200"
                alt="Fat Betty Knits Logo"
              />
              </div>
            </div>
          </div>
        </Jumbotron>
        <Navbar dark sticky="top" expand="md">
          <div className="container">

            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar className="navbar-brand-center">
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <i className="fa fa-home fa-lg" />
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/our-story">
                    <i className="fa fa-book fa-lg" />
                    Our Story
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/store">
                    <FontAwesomeIcon icon={ faStore } />
                    <i className="fa fa-store fa-lg" />
                    Store
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/blogs">
                    <FontAwesomeIcon icon={ faBlog } />
                    <i className="fa fa-blog fa-lg" />
                    Blog
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contact">
                    <i className="fa fa-address-book fa-lg" />
                    Contact Us
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </>
    );
  }
}

export default Header;
