import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  CardImg,
  CardBody,
  CardText,
  Label,
  Col,
  Row
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm } from "react-redux-form";

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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log("Current state is: " + JSON.stringify(values));
  }

  render() {

    return (
      <div className="container">
        <div className="row row-content">
          <div className="col-12">
            <h2>Leave a Review</h2>
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
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    className="form-control"
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
                      <strong>Agree to Contact From Us</strong>
                    </Label>
                  </div>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="review" md={2}>
                  Your Review
                </Label>
                <Col md={10}>
                  <Control.textarea
                    model=".review"
                    id="review"
                    name="review"
                    rows="10"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Post Review
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
