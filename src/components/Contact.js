import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Label,
  Col,
  Row
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm } from "react-redux-form";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      agree: false, 
      touched: {
          firstName: false,
          lastName: false,
          email: false
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log("Current state is: " + JSON.stringify(values));
  }

  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/home">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>Contact Us</BreadcrumbItem>
            </Breadcrumb>
            <h2 className="d-flex justify-content-center">Contact Us</h2>
            <hr />
          </div>
        </div>

        <div className="row row-content">
          <div className="col-sm-6">
            <h5 className="offset-2">Our Address</h5>
            <address className="offset-2">
              1234 Street Road
              <br />
              Albuquerque, NM 12345
              <br />
              U.S.A.
            </address>
          </div>
          <div className="col-sm">
            <a role="button" className="btn btn-link" href="tel:+15555555555">
              <i className="fa fa-phone" /> 1-555-555-5555
            </a>
            <br />
            <a
              role="button"
              className="btn btn-link"
              href="mailto:hbaysinger09@gmail.com"
            >
              <i className="fa fa-envelope-o" /> hbaysinger09@gmail.com
            </a>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h2>Get in Touch!</h2>
            <hr />
          </div>
          <div className="col-md-10">
            <LocalForm onSubmit={values => this.handleSubmit(values)}>
            <Row className="form-group">
                <Label htmlFor="firstName" md={2}>
                  First Name
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".firstName"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="lastName" md={2}>
                  Last Name
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".lastName"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="email" md={2}>
                  Email
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 4, offset: 2 }}>
                  <div className="form-check">
                    <Label check>
                      <Control.checkbox
                        model=".agree"
                        className="form-check-input"
                        name="agree"
                      />{" "}
                      <strong>May we contact you?</strong>
                    </Label>
                  </div>
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Sign Up
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
