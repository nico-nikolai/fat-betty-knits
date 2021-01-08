import React, { Component } from 'react';
import Header from './Header';
import { OurStory } from './OurStory';
// import Shop from './Shop';
import Blogs from './Blogs';
import { CATALOG } from '../shared/catalog';
import { BLOGS } from '../shared/blogs';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          catalog: CATALOG,
          blogs: BLOGS
        }
      }

      render() {
          return (
              <div>
                <Header />
                <OurStory />
                <Blogs blogs={this.state.blogs}/>
              </div>
          )
      }
}
export default Dashboard;