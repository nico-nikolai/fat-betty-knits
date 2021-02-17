import * as ActionTypes from './ActionTypes';

// export const Cart = (state = {errMess: null, items: []}, action) => {
//     switch(action.type) {
//         default:
//             return state;
//     }
// }

import { CATALOG } from '../shared/catalog';

const initState = {
    items: CATALOG,
    addedItems: [],
    total: 0
}

const Cart = (state = initState, action) => {
    if(action.type === ActionTypes.ADD_TO_CART) {
        
        let addedItem = state.items.find(item => item.id === action.id)
        let existed_item = state.addedItems.find(item => action.id === item.id)
        console.log(addedItem)
        if (existed_item) {
            addedItem.quantity += 1
            return {...state, total: state.total + addedItem.price}
        } else {
            addedItem.quantity = 1
            let newTotal = state.total + addedItem.price
            return {...state, addedItems: [...state.addedItems, addedItem], total: newTotal}
        }
    } else {

        return state;
    }
}

export default Cart;

// export const Cart = (state = CATALOG, action) => {
//     switch (action.type) {
//         default:
//             return state;
//     }
// }