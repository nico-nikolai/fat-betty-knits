import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addReview = (itemId, rating, text, firstName, lastName, email) => ({
    type: ActionTypes.ADD_REVIEW,
    payload: {
        itemId,
        rating,
        text,
        firstName,
        lastName,
        email
    }
});

export const fetchStore = () => dispatch => {

    dispatch(storeLoading());

    return fetch(baseUrl + 'catalog')
        .then(response => response.json())
        .then(items => dispatch(addItems(items)));
};

export const storeLoading = () => ({
    type: ActionTypes.STORE_LOADING
});

export const storeFailed = errMess => ({
    type: ActionTypes.STORE_FAILED,
    payload: errMess
});

export const addItems = items => ({
    type: ActionTypes.ADD_STORE,
    payload: items
});

export const fetchReviews = () => dispatch => {
    return fetch(baseUrl + 'reviews')
        .then(response => response.json())
        .then(reviews => dispatch(addReviews(reviews)));
}

export const reviewsFailed = errMess => ({
    type: ActionTypes.REVIEWS_FAILED,
    payload: errMess
});

export const addReviews = reviews => ({
    type: ActionTypes.ADD_REVIEWS,
    payload: reviews
});

export const fetchBlogs = () => dispatch => {

    dispatch(blogsLoading());

    return fetch(baseUrl + 'blogs')
        .then(response => response.json())
        .then(blogs => dispatch(addBlogs(blogs)));
};

export const blogsLoading = () => ({
    type: ActionTypes.BLOGS_LOADING
});

export const blogsFailed = errMess => ({
    type: ActionTypes.BLOGS_FAILED,
    payload: errMess
});

export const addBlogs = blogs => ({
    type: ActionTypes.ADD_BLOGS,
    payload: blogs
});
