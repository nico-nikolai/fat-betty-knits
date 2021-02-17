import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchStore = () => dispatch => {

    dispatch(storeLoading());

    return fetch(baseUrl + 'catalog')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(items => dispatch(addItems(items)))
        .catch(error => dispatch(storeFailed(error.message)));
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
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(reviews => dispatch(addReviews(reviews)))
        .catch(error => dispatch(reviewsFailed(error.message)));
}

export const reviewsFailed = errMess => ({
    type: ActionTypes.REVIEWS_FAILED,
    payload: errMess
});

export const addReviews = reviews => ({
    type: ActionTypes.ADD_REVIEWS,
    payload: reviews
});

export const addReview = review => ({
    type: ActionTypes.ADD_REVIEW,
    payload: review
})


export const postReview = (itemId, rating, text, firstName, lastName, email) => dispatch => {
    const newReview = {
        itemId,
        rating,
        text,
        firstName,
        lastName,
        email
    };
    newReview.date = new Date().toISOString();

    return fetch(baseUrl + 'reviews', {
            method: "POST",
            body: JSON.stringify(newReview),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                throw error;
            }
        )
        .then(response => response.json())
        .then(response => dispatch(addReview(response)))
        .catch(error => {
            console.log('post review', error.message);
            alert('Your review could not be posted\nError: ' + error.message);
        })
};

export const fetchBlogs = () => dispatch => {

    dispatch(blogsLoading());

    return fetch(baseUrl + 'blogs')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(blogs => dispatch(addBlogs(blogs)))
        .catch(error => dispatch(blogsFailed(error.message)));
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

export const addToCart = (id) => dispatch => {
    return {
        type: ActionTypes.ADD_TO_CART,
        id
    }
}