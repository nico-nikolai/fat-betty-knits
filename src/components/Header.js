import React, { Component } from "react";
import {
  Collapse,
  Jumbotron,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  NavbarToggler,
} from "reactstrap";
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
            <NavbarBrand href="/">
                Navigation
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink href="#">
                    <i className="fa fa-home fa-lg" />
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <i className="fa fa-book fa-lg" />
                    Our Story
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <FontAwesomeIcon icon={ faStore } />
                    <i className="fa fa-store fa-lg" />
                    Shop
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <FontAwesomeIcon icon={ faBlog } />
                    <i className="fa fa-blog fa-lg" />
                    Blog
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
