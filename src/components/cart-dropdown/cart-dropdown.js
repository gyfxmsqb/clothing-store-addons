import React from 'react'
import "./cart-dropdown.scss"
import { CustomButton } from '../custom-button/custom-button'
import CartItem from '../cart-item/cart-item'
import { connect } from 'react-redux'


const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">

        <div className="cart-items">

            {
                cartItems.map(cartItem=> (
                    <CartItem key = {cartItem.id} item = {cartItem}/>

                ))


            }

        </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)


// //here is to fetch the data from redux 
// const mapStateToProps = ({
//     //cart from root-reducer cartItems from cartReducer second carItems are the props 
//     cart: { cartItems } }) => ({
//         cartItems
//     })
const mapStateToProps = state => ({
    cartItems: state.cart.cartItems
    })


export default connect(mapStateToProps)(CartDropdown)

