import React, { Component } from "react"
import CollectionPreview from "../../components/collection-preview/collection-preview"
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect"
import { selectCollections } from "../../redux/shop/shop.selector"
import FormInput from "../../components/form-input/form-input"

const ShopPage = ({ collections }) => {

    return (
        <div className="shop-page">
            {
                collections.map(({ title, id, routeName, items }) => (
                    <CollectionPreview key={id} title={title} items={items} />
                ))
            }

            {/* <CollectionPreview title="hats" items={SHOP_DATA} /> */}
        </div>
    )

}


const mapStateToProps = createStructuredSelector({
    collections: selectCollections // from selector.js
})

export default connect(mapStateToProps)(ShopPage)
