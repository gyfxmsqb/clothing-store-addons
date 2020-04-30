import { CartActionTypes } from "./cart.types"
import { addItemToCart, removeItemFromCart } from "./cart.utils"

const INITIAL_STATE = {
    //this is the state, to call hidden, you use state.hidden
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }

        //Second case when adding items to the cart
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)//if the 

            }


        //to remove the item 
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                //here is what you want the reducer do ,here is the action you wnat it to take
                cartItems: removeItemFromCart(state.cartItems, action.payload)

            }

        //to clear out the item 
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                //here is what you want the reducer do ,here is the action you wnat it to take
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                )

            }

        default:
            return state
    }
}

export default cartReducer