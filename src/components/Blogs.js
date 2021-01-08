import React, { Component } from 'react';
import { Button, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Blogs extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedBlog: null
        }
    }

    onBlogSelect(card) {
        this.setState({selectedBlog: card})
    }

    renderSelectedBlog(blog) {
        if (blog) {
            return (
                <Card>
                    <CardImg top src={blog.image} alt={blog.name} />
                    <CardBody>
                        <CardTitle>{blog.name}</CardTitle>
                        <CardText>{blog.description}</CardText>
                        <Button>Read More</Button>
                    </CardBody>
                </Card>
            )
        }
        return <div />
    }

    render() {
        const blogEntry = this.props.blogs.map(blog => {
            return (
                <div className="col-sm-5 m-1">
                    <Card onClick={() => {this.onBlogSelect(blog)}}>
                        <CardImg width="100%" src={blog.image} alt={blog.name} />
                        <CardImgOverlay>
                            <CardTitle>{blog.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        })
        return (
            <div className="container">
                <div className="row">
                    {blogEntry}
                </div>
                <div className="row">
                    <div className="col m-1">
                        {this.renderSelectedBlog(this.state.selectedBlog)}
                    </div>
                </div>
            </div>
        )
    }
}

export default Blogs;