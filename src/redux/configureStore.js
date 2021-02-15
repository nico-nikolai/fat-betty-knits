import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Catalog } from './catalog';
import { Blogs } from './blogs';
import { Reviews } from './reviews';
import { Descriptions } from './descriptions';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            catalog: Catalog,
            blogs: Blogs,
            reviews: Reviews,
            descriptions: Descriptions
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}