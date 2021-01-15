import React, { Component } from 'react';
import Header from './Header';
import Home from './Home';
import { OurStory } from './OurStory';
import Contact from './Contact';
// import Shop from './Shop';
import Blogs from './Blogs';
// import BlogInfo from './BlogInfo';
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
              <Home />
            )
          }

          return (
              <div>
                <Header />
                <Switch>
                  <Route path="/home" component={HomePage} />
                  <Route exact path="/our-story" component={OurStory} />
                  <Route exact path="/contact" component={Contact} />
                  <Route exact path='/blogs' render={() => <Blogs blogs={this.state.blogs} />} />
                  <Redirect to="/home" />
                </Switch>
                <Footer />
              </div>
          )
      }
}
export default Dashboard;