import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Catalog } from './catalog';
import { Blogs } from './blogs';
import { Reviews } from './reviews';
import { Descriptions } from './descriptions';
import { InitialFeedback } from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            catalog: Catalog,
            blogs: Blogs,
            reviews: Reviews,
            descriptions: Descriptions,
            ...createForms({
                feedbackForm: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}