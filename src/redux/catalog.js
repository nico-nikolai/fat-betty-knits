import * as ActionTypes from './ActionTypes';

export const Catalog = (state = {
        isLoading: true,
        errMess: null,
        items: []
    }, action) => {
        switch (action.type) {
            case ActionTypes.ADD_STORE:
                return {...state, isLoading: false, errMess: null, items: action.payload};
            case ActionTypes.STORE_LOADING:
                return {...state, isLoading: true, errMess: null, items: []};
            case ActionTypes.STORE_FAILED:
                return {...state, isLoading: false, errMess: action.payload};
            default:
                return state;
        }
};