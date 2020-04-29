import {CartActionTypes} from "./cart.types"
import { addItemToCart } from "./cart.utils"

const INITIAL_STATE = {
    //this is the state, to call hidden, you use state.hidden
    hidden: true,
    cartItems:[]
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
                    cartItems: addItemToCart(state.cartItems, action.payload)

                }

        default:
            return state
    }
}

export default cartReducer