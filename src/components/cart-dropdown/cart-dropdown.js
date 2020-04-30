import React from 'react'
import "./cart-dropdown.scss"
import { CustomButton } from '../custom-button/custom-button'
import CartItem from '../cart-item/cart-item'
import { connect } from 'react-redux'
import { selectCartItmes, selectHidden } from '../../redux/cart/cart.selector'
import { createStructuredSelector } from "reselect"
import { withRouter } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart.action'




const CartDropdown = ({ cartItems, history, dispatch}) => (
    <div className="cart-dropdown">


        <div className="cart-items">

            {cartItems.length ?
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
                :
                <span className="empty-message">Your cart is empty</span>

            }

        </div>
        <CustomButton onClick = {() => {
            history.push("/checkout")
            //send data to redux
            dispatch(toggleCartHidden())
            
            }}>
            GO TO CHECKOUT</CustomButton>
    </div>
)


// //here is to fetch the data from redux 
// const mapStateToProps = ({
//     //cart from root-reducer cartItems from cartReducer second carItems are the props 
//     cart: { cartItems } }) => ({
//         cartItems
//     })

// state is the root0reducer, cart is reducer cartItems is the return in the reducer || or you can look at the next state in your console to see how it is strucutred 
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItmes,
    hidden: selectHidden
})


export default withRouter(connect(mapStateToProps)(CartDropdown))

