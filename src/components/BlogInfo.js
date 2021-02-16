import React from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Card, CardImg, CardBody, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';


    function RenderBlog({blog}) {
        console.log(blog)
        return (
            <div className="col-sm-4">
                <Card>
                    <CardImg top src={baseUrl + "/" + blog.image} alt={blog.name} />
                    <CardBody>
                        <CardText>{blog.description}</CardText>
                        <Button>Read On!</Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
    function BlogInfo({blog}) {
        if (blog) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                                <BreadcrumbItem><Link to="/blogs">Blogs</Link></BreadcrumbItem>
                                <BreadcrumbItem active>{blog.name}</BreadcrumbItem>
                            </Breadcrumb>
                            <h2 className="d-flex justify-content-center">{blog.name}</h2>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <RenderBlog blog={blog}/>
                    </div>
                </div>
            )
        }
        return <div/>
    }

export default BlogInfo;