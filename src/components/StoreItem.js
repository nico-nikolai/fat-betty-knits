import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  CardImg,
  CardBody,
  CardText,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  FormFeedback
} from "reactstrap";
import { Link } from "react-router-dom";

class PostReview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      agree: false,
      review: "",
      touched: {
        firstName: false,
        lastName: false,
        email: false,
      }
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  validate(firstName, lastName, email) {
    const errors = {
      firstName: "",
      lastName: "",
      email: "",
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

    if (this.state.touched.email && !email.includes("@")) {
      errors.email = "Email should contain a @";
    }
    return errors;
  }

  handleBlur = (field) => () => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

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

  render() {
    const errors = this.validate(
      this.state.firstName,
      this.state.lastName,
      this.state.email
    );

    return (
      <div className="container">
        <div className="row row-content">
          <div className="col-12">
            <h2>Leave a Review</h2>
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
                    type="text"
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
                      <strong>Agree to Contact From Us</strong>
                    </Label>
                  </FormGroup>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="review" md={2}>
                  Your Review
                </Label>
                <Col md={10}>
                  <Input
                    type="textarea"
                    id="review"
                    name="review"
                    rows="10"
                    value={this.state.review}
                    onChange={this.handleInputChange}
                  ></Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Post Review
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

function RenderItem({ item }) {
  console.log(item);
  return (
    <div className="col-sm-6 m-1">
      <Card>
        <CardImg top src={"/" + item.image} alt={item.name} />
        <CardBody>
          <CardText>{item.description}</CardText>
          <Button>Add To Cart</Button>
        </CardBody>
      </Card>
    </div>
  );
}

function RenderDescription({ description }) {
  console.log(description);
  return (
    <div className="col-sm">
      {description.text}
      <br />
      <br />
      {description.measurements}
      <br />
      <br />
      {description.material}
      <br />
      <br />
      {description.shipping}
      <br />
      <br />
      {description.description}
    </div>
  );
}
function StoreItem({ item, description }) {
  if (item) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/home">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Link to="/store">Store</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{item.name}</BreadcrumbItem>
            </Breadcrumb>
            <h2 className="d-flex justify-content-center">{item.name}</h2>
            <hr />
          </div>
        </div>
        <div className="row">
          <RenderItem item={item} />
          <RenderDescription description={description} />
          <PostReview />
        </div>
      </div>
    );
  }
  return <div />;
}

export default StoreItem;
