import * as ActionTypes from './ActionTypes';
import { CATALOG } from '../shared/catalog';

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

    setTimeout(() => {
        dispatch(addItems(CATALOG));
    }, 2000);
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