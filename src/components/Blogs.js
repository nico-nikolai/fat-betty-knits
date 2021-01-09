import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

class Blogs extends Component {

    render() {
        const blogEntry = this.props.blogs.map(blog => {
            return (
                <div key={blog.id} className="col-sm-5 m-1">
                    <Card onClick={() => this.props.onClick(blog.id)}>
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
            </div>
        )
    }
}

export default Blogs;