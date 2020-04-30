import React from 'react'
import "./checkout-item.scss"

export const CheckoutItem = ({ cartItem }) => (
    
    
    // you can use this to destruct  { cartItem: {name, imageUlr, quantity, price} }
    <div className="checkout-item">
        <div className="image-container">
            <img alt="item" src={cartItem.imageUrl}/>
        </div>
        <span className="name">{cartItem.name}</span>
        <span className="quantity">{cartItem.quantity}</span>
        <span className="price">{cartItem.price}</span>
        <div className="remove-button ">
            <span> &#10005; </span>
        </div>
    </div>
)