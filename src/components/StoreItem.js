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
  Col,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(+val);
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
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleSubmit(values) {
    console.log("Current state is: " + JSON.stringify(values));
  }

  render() {
    return (
      <div>
      
      <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
        <ModalHeader toggle={this.toggleModal}>Leave a Review</ModalHeader>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="rating" md={2}>
                  Rating
                </Label>
                <Col md={10}>
                  <Control.select
                    model=".rating"
                    id="rating"
                    name="rating"
                    placeholder="Please rate 1-5 stars"
                    className="form-control"
                    validators={{
                      required
                    }}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Control.select>
                  <Errors
                    className="text-danger"
                    model=".rating"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Required"
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col md={10}>
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
                      maxLength: "Must be at least 15 characters",
                    }}
                  />
                </Col>
              </Row>
            </LocalForm>
      </Modal>

      </div>
    );
  }
}

function RenderItem({ item, onClick }) {
  console.log(item);
  return (
    <div className="col-sm-6 m-1">
      <Card>
        <CardImg top src={"/" + item.image} alt={item.name} />
        <CardBody>
          <CardText>{item.description}</CardText>
          <Button color="success">Add To Cart</Button>{' '}
          <Button color="primary">Leave a Review</Button>
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
          </div>
        </div>
          <div className="container">
            <div className="row">
            <PostReview />
            </div>
          </div>
      </React.Fragment>
    );
  }
  return <div />;
}

export default StoreItem;
