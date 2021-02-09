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
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

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
      },
      isModalOpen: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleReviewModal = this.toggleReviewModal.bind(this);
  }

  toggleReviewModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleSubmit(values) {
    console.log("Current state is: " + JSON.stringify(values));
    alert("Current state is: " + JSON.stringify(values));
  }

  render() {
    return (
      <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col">
            <Button color="success">Add To Cart  <i className="fa fa-shopping-cart fa-lg" /></Button>{''}
          </div>
          <div className="col">
            <Button color="primary" onClick={this.toggleReviewModal}>Leave a Review  <i className="fa fa-comments fa-lg"/></Button>
          </div>
        </div>
      </div>
      <Modal isOpen={this.state.isModalOpen} toggle={this.toggleReviewModal}>
        <ModalHeader toggle={this.toggleReviewModal}>Leave a Review</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <div className="form-group">
                <Label htmlFor="rating">
                  Please Rate from 1-5
                </Label>
                <Control.select
                  model=".rating"
                  id="rating"
                  name="rating"
                  className="form-control"
                >
                  <option value="">1-5</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Control.select>
              </div>
              <div className="form-group">
                <Control.text
                  model=".firstName"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(2),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".firstName"
                  show="touched"
                  component="div"
                  messages={{
                    required: "Required",
                    minLength: "Must be at least 2 characters",
                    maxLength: "Must be 15 characters or less",
                  }}
                />
              </div>
              <div className="form-group">
                <Control.text
                  model=".lastName"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(2),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".lastName"
                  show="touched"
                  component="div"
                  messages={{
                    required: "Required",
                    minLength: "Must be at least 2 characters",
                    maxLength: "Must be 15 characters or less",
                  }}
                />
              </div>
              <div className="form-group">
                  <Control.text
                    model=".email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email"
                    validators={{
                      required,
                      validEmail,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".email"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Required",
                      validEmail: "Invalid email address"
                    }}
                  />
              </div>
              <div className="form-group">
                <Control.textarea
                  model=".review"
                  id="review"
                  name="review"
                  placeholder="Your Review"
                  rows="6"
                  className="form-control"
                />
              </div>
              <Button type="submit" value="submit" color="primary" onClick={this.toggleReviewModal}>Post Review</Button>
            </LocalForm>
          </ModalBody>
        </Modal>
      </React.Fragment>
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
      <React.Fragment>
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
      </React.Fragment>
    );
  }
  return <div />;
}

export default StoreItem;
