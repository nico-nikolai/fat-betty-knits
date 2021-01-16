import React from 'react';
import { Button, Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';



    function RenderBlog({blog}) {
        console.log(blog)
        return (
            <div className="col-sm m-1">
                <Card>
                    <CardImg top src={blog.image} alt={blog.name} />
                    <CardBody>
                        <CardTitle>{blog.name}</CardTitle>
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
                        <RenderBlog blog={blog}/>
                    </div>
                </div>
            )
        }
        return <div/>
    }

export default BlogInfo;