import React, { Component } from 'react';
import { Button, Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

class BlogInfo extends Component {

    renderBlog(blog) {
        return (
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={blog.image} alt={blog.name} />
                        <CardBody>
                            <CardTitle>{blog.name}</CardTitle>
                            <CardText>{blog.description}</CardText>
                            <Button>Read More</Button>
                        </CardBody>
                </Card>
            </div>
        )
    }
    render() {
        if (this.props.blog) {
            return (
                <div className="container">
                    <div className="row">
                        {this.renderBlog(this.props.blog)}
                    </div>
                </div>
            )
        }
        return <div/>
    }
}

export default BlogInfo;