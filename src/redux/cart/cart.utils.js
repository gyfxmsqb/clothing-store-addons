
//function to group the same items together
export const addItemToCart = (cartItems, cartItemToAdd) => {

    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    ) 

    if (existingCartItem) {
        //.map wil return a new array to trigger react to re-render
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
            ? {...cartItem, quantity:  cartItem.quantity + 1}
            : cartItem
            )
    } 

        return[...cartItems, {...cartItemToAdd, quantity: 1}]
    


}