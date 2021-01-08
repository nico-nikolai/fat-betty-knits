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
      isNavOpen: !this.state.isNaveOpen,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Jumbotron fluid>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>Fat Betty Knits</h1>
              </div>
            </div>
          </div>
        </Jumbotron>
        <Navbar dark sticky="top" expand="md">
          <div className="container">
            <NavbarBrand className="mr-auto" href="/">
              <img
                src="/assets/images/fbk-logo.webp"
                height="100"
                width="100"
                alt="Fat Betty Knits Logo"
              />
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
                    <i className="fa fa-home fa-lg" />
                    Our Story
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <i className="fa fa-home fa-lg" />
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <i className="fa fa-home fa-lg" />
                    Home
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
