import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

function RenderBlogItem({ blog }) {
  return (
    <Card>
      <CardImg width="100%" src={blog.image} alt={blog.name} />
      <CardImgOverlay>
        <CardTitle>{blog.name}</CardTitle>
      </CardImgOverlay>
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
        <div className="row">{blogEntry}</div>
      </div>
    );
  }


export default Blogs;
