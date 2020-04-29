import {createSelector} from "reselect"

//input selector
const selectCart = state => state.cart

export const selectCartItmes = createSelector(
    [selectCart],
    cart =>cart.cartItems
)

export const selectCartItemCount = createSelector(
    [selectCartItmes],
    cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) => 
        accumulatedQuantity + cartItem.quantity,
        0) 
)