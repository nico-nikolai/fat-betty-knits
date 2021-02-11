import { BLOGS } from '../shared/blogs';
import { CATALOG } from '../shared/catalog';
import { DESCRIPTIONS } from '../shared/descriptions';
import { REVIEWS } from '../shared/reviews';

export const initialState = {
    catalog: CATALOG,
    blogs: BLOGS,
    descriptions: DESCRIPTIONS,
    reviews: REVIEWS
}

export const Reducer = (state = initialState, action) => {
    return state;
}