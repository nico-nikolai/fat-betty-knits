import React, { Component } from 'react';

class Blogs extends Component {

    render() {
        const blogEntry = this.props.blogs.map(blog => {
            return (
                <div className="col">
                <img src={blog.image} alt={blog.name}/>
                    <h1>{blog.name}</h1>
                    <p>{blog.description}</p>
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