import React from 'react'
import "./collection.scss"
import CollectionItem from '../../components/collection-item/collection-item'
import directoryReducer from '../../redux/directory/directory.reducer'
import { createStructuredSelector } from "reselect"
import { selectCollection } from "../../redux/shop/shop.selector"
import { connect } from 'react-redux'

const CollectionPage = ({ match, collection }) => {

    console.log("collection is ", collection)
    return (

        <div className="collection-page">
            <h2 className="title">{collection.title}</h2>

            <div className="items">

            { collection.items.map (item=> (
                <CollectionItem key={item.id} item={item} />
            ))

            }
            </div>

        </div>
    )
}

//if it is wrapped in the second layer, you can use 2 pramas
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)
