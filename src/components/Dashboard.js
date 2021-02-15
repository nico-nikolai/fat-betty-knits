import React, { Component } from 'react';
import Header from './Header';
import Home from './Home';
import { OurStory } from './OurStory';
import Contact from './Contact';
import Store from './Store';
import Blogs from './Blogs';
import BlogInfo from './BlogInfo';
import StoreItem from './StoreItem';
import Footer from './Footer';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { addReview, fetchStore } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    catalog: state.catalog,
    blogs: state.blogs,
    descriptions: state.descriptions,
    reviews: state.reviews
  }
}

const mapDispatchToProps = {
  addReview: (itemId, rating, text, firstName, lastName, email) => (addReview(itemId, rating, text, firstName, lastName, email)),
  fetchStore: () => (fetchStore()),
  resetFeedbackForm: () => (actions.reset('feedbackForm'))
};
class Dashboard extends Component {

  componentDidMount() {
    this.props.fetchStore();
  }

      render() {

          const HomePage = () => {
            return (
              <Home 
                catalog={this.props.catalog.items.filter(catalog => catalog.featured)[0]}
                storeLoading={this.props.catalog.isLoading}
                storeErrMess={this.props.catalog.errMess}
                catalogTwo={this.props.catalog.items.filter(catalog => catalog.featured)[1]}
                blogs={this.props.blogs.filter(blog => blog.featured)[0]}
              />
            )
          }

          const BlogWithId = ({match}) => {
            return (
              <BlogInfo blog={this.props.blogs.filter(blog => blog.id === +match.params.blogId)[0]} />
            )
          }

          const StoreWithId = ({match}) => {
            return (
              <StoreItem 
                item={this.props.catalog.items.filter(item => item.id === +match.params.itemId)[0]}
                isLoading={this.props.catalog.isLoading}
                errMess={this.props.catalog.errMess}
                description={this.props.descriptions.filter(description => description.id === +match.params.itemId)[0]}
                reviews={this.props.reviews.filter(review => review.itemId === +match.params.itemId)}
                addReview={this.props.addReview}
              />
            )
          }

          return (
              <div>
                <Header />
                <Switch>
                  <Route path="/home" component={HomePage} />
                  <Route exact path="/our-story" component={OurStory} />
                  <Route exact path="/store" render={() => <Store catalog={this.props.catalog} />} />
                  <Route exact path='/blogs' render={() => <Blogs blogs={this.props.blogs} />} />
                  <Route path='/blogs/:blogId' component={BlogWithId} />
                  <Route path='/store/:itemId' component={StoreWithId} />
                  <Route exact path="/contact" render={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm}/> } />
                  <Redirect to="/home" />
                </Switch>
                <Footer />
              </div>
          )
      }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));