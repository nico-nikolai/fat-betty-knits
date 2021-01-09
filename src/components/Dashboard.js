import React, { Component } from 'react';
import Header from './Header';
import { OurStory } from './OurStory';
// import Shop from './Shop';
import Blogs from './Blogs';
import BlogInfo from './BlogInfo';
import { CATALOG } from '../shared/catalog';
import { BLOGS } from '../shared/blogs';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          catalog: CATALOG,
          blogs: BLOGS,
          selectedBlog: null
        }
      }

    onBlogSelect(blogId) {
      this.setState({selectedBlog: blogId})
  }

      render() {
          return (
              <div>
                <Header />
                <OurStory />
                <Blogs blogs={this.state.blogs} onClick={blogId => this.onBlogSelect(blogId)}/>
                <BlogInfo blog={this.state.blogs.filter(blog => blog.id === this.state.selectedBlog)[0]}/>
              </div>
          )
      }
}
export default Dashboard;