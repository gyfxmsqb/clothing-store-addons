import { CartActionTypes } from "./cart.types";


export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,

})


// add action to cart, this function just means that add the value ot payload to the array of the cart itmes
export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item

})
