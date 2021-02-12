import * as ActionTypes from './ActionTypes';

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
})