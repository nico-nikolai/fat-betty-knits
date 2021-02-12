import { createStore, combineReducers } from 'redux';
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
        })
    );

    return store;
}