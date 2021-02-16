import React from "react";
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';

function RenderBlogItem({ blog }) {
  return (
    <Card>
      <Link to={`/blogs/${blog.id}`}>
        <CardImg width="100%" src={baseUrl + blog.image} alt={blog.name} />
        <CardImgOverlay>
          <CardTitle>{blog.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

function Blogs(props) {

    const blogEntry = props.blogs.map((blog) => {
      return <div key={blog.id} className="col-sm m-1">
                <RenderBlogItem blog={blog} />
             </div>;
    });
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Breadcrumb>
              <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
              <BreadcrumbItem active>Blogs</BreadcrumbItem>
            </Breadcrumb>
            <h2 className="d-flex justify-content-center">Select a Blog</h2>
            <hr />
          </div>
        </div>
        <div className="row">{blogEntry}</div>
      </div>
    );
  }


export default Blogs;
