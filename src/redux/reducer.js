import { BLOGS } from '../shared/blogs';
import { CATALOG } from '../shared/catalog';
import { DESCRIPTIONS } from '../shared/descriptions';

export const initialState = {
    catalog: CATALOG,
    blogs: BLOGS,
    descriptions: DESCRIPTIONS
}

export const Reducer = (state = initialState, action) => {
    return state;
}