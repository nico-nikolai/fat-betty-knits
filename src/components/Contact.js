import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  FormFeedback
} from "reactstrap";
import { Link } from "react-router-dom";

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

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  validate(firstName, lastName, email) {

    const errors = {
        firstName: '',
        lastName: '',
        email: ''
    };

    if (this.state.touched.firstName) {
        if (firstName.length < 2) {
            errors.firstName = "First name must be at least 2 characters.";
        } else if (firstName.length > 15) {
            errors.firstName = "First name must be 15 or less characters.";
        }
    }

    if (this.state.touched.lastName) {
        if (lastName.length < 2) {
            errors.lastName = "Last name must be at least 2 characters.";
        } else if (lastName.length > 15) {
            errors.lastName = "Last name must be 15 or less characters.";
        }
    }

    if (this.state.touched.email && !email.includes('@')) {
        errors.email = 'Email should contain a @';
    }
console.log(errors)
    return errors;
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    console.log("Current state is: " + JSON.stringify(this.state));
    event.preventDefault();
  }

  handleBlur = (field) => () => {
    this.setState({
        touched: {...this.state.touched, [field]: true }
    });
  }

  render() {

    const errors = this.validate(this.state.firstName, this.state.lastName, this.state.email);

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
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label htmlFor="firstName" md={2}>
                  First Name
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    value={this.state.firstName}
                    invalid={errors.firstName}
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur("firstName")}
                  />
                  <FormFeedback>{errors.firstName}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="lastName" md={2}>
                  Last Name
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    value={this.state.lastName}
                    invalid={errors.lastName}
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur("lastName")}
                  />
                  <FormFeedback>{errors.lastName}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="email" md={2}>
                  Email
                </Label>
                <Col md={10}>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    invalid={errors.email}
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur("email")}
                  />
                  <FormFeedback>{errors.email}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 4, offset: 2 }}>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        name="agree"
                        checked={this.state.agree}
                        onChange={this.handleInputChange}
                      />{" "}
                      <strong>May we contact you?</strong>
                    </Label>
                  </FormGroup>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Sign Up
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
