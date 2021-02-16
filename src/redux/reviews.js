import * as ActionTypes from './ActionTypes';

export const Reviews = (state = { errMess: null, reviews: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_REVIEWS:
            return {...state, errMess: null, reviews: action.payload};
        case ActionTypes.REVIEWS_FAILED:
            return {...state, errMess: action.payload};
        case ActionTypes.ADD_REVIEW:
            const review = action.payload;
            review.id = state.reviews.length;
            review.date = new Date().toISOString();
            return {...state, reviews: state.reviews.concat(review)};
        default:
            return state;
    }
};