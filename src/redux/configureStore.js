import { createStore, combineReducers } from 'redux';
import { Catalog } from './catalog';
import { Blogs } from './blogs';
import { Descriptions } from './descriptions';
import { Reviews } from './reviews';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            catalog: Catalog,
            blogs: Blogs,
            descriptions: Descriptions,
            reviews: Reviews
        })
    );
    return store;
}