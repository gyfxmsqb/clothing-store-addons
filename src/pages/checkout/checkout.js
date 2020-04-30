import React from 'react'
import "./checkout.scss"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { selectCartItmes, selectCartTotal } from '../../redux/cart/cart.selector'
import { CheckoutItem } from '../../components/checkout-item/checkout-item'
import CartItem from '../../components/cart-item/cart-item'


export const CheckoutPage = ({ cartItems, total }) => (
    <div className="checkout-page">
        <div className="checkout-header">

            <div className="header-block">
                <span >Product</span>
            </div>
            <div className="header-block">
                <span >Description</span>
            </div>
            <div className="header-block">
                <span >Quantity</span>
            </div>
            <div className="header-block">
                <span >Price: {total} </span>
            </div>
            <div className="header-block">
                <span >Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem}  />

                // <div>{cartItem.name}</div>

            ))
        }
        <div className="total">
            <span>${total}</span>

        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItmes,
    total: selectCartTotal
})
export default connect(mapStateToProps)(CheckoutPage)
