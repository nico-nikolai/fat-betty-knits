import React, { Component } from 'react';
import Header from './Header';
import Home from './Home';
import { OurStory } from './OurStory';
import Contact from './Contact';
import Store from './Store';
import Blogs from './Blogs';
import BlogInfo from './BlogInfo';
import Footer from './Footer';
import { CATALOG } from '../shared/catalog';
import { BLOGS } from '../shared/blogs';
import { Switch, Route, Redirect } from 'react-router-dom';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          catalog: CATALOG,
          blogs: BLOGS,
        }
      }

      render() {

          const HomePage = () => {
            return (
              <Home 
                catalog={this.state.catalog.filter(catalog => catalog.featured)[0]}
                catalogTwo={this.state.catalog.filter(catalog => catalog.featured)[1]}
                blogs={this.state.blogs.filter(blog => blog.featured)[0]}
              />
            )
          }

          const BlogWithId = ({match}) => {
            return (
              <BlogInfo blog={this.state.blogs.filter(blog => blog.id === +match.params.blogId)[0]} />
            )
          }

          return (
              <div>
                <Header />
                <Switch>
                  <Route path="/home" component={HomePage} />
                  <Route exact path="/our-story" component={OurStory} />
                  <Route exact path="/store" render={() => <Store catalog={this.state.catalog} />} />
                  <Route exact path='/blogs' render={() => <Blogs blogs={this.state.blogs} />} />
                  <Route path='/blogs/:blogId' component={BlogWithId} />
                  <Route exact path="/contact" component={Contact} />
                  <Redirect to="/home" />
                </Switch>
                <Footer />
              </div>
          )
      }
}
export default Dashboard;