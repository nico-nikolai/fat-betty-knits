import React from 'react';
import { Button, Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

    function RenderBlog({blog}) {
        return (
            <div className="col-sm m-1">
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
    function BlogInfo(props) {
        if (props.blog) {
            return (
                <div className="container">
                    <div className="row">
                        <RenderBlog blog={props.blog}/>
                    </div>
                </div>
            )
        }
        return <div/>
    }

export default BlogInfo;