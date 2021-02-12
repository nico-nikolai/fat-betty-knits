import * as ActionTypes from './ActionTypes';

export const addReview = (itemId, rating, firstName, lastName, email, text) => ({
    type: ActionTypes.ADD_REVIEW,
    payload: {
        itemId,
        rating,
        firstName,
        lastName,
        email,
        text
    }
})