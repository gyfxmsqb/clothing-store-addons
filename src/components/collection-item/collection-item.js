import React from 'react'
import "./collection-item.scss"
import { CustomButton } from '../custom-button/custom-button'
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.action'


const CollectionItem = ({ item, addItem }) => {

    //when you deconstruct, you need to use the return 
    const {name, imageUrl, price} = item


    return (
        <div className="collection-item">
            <div
                className="image"
                style={{ backgroundImage: `url(${imageUrl})` }}
            />

            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>

            </div>
            <CustomButton onClick={()=>addItem(item)} inverted>ADD TO CART</CustomButton>

        </div>
    )
}


//here is the flow Click on the button --> fire addItem() -> action taked in the cart.action -> data added in the reducer -> fetchdata with mapStateToProps in the header 
const mapDispatchToProps = dispatch => ({
    //here addTtem is a function from action.js
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);

