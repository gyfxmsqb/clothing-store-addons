import React from 'react'
import "./collection-overview.scss"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import CollectionPreview from '../collection-preview/collection-preview'
import {selectCollectionsForPreview} from "../../redux/shop/shop.selector"
const CollectonOverview = ({collections}) => (

    <div className="collection-overview">

        {
            collections.map(({ title, id, routeName, items }) => (
                <CollectionPreview key={id} title={title} items={items} />
            ))
        }


    </div>
)

const mapStateToProps = createStructuredSelector({

    //maps can not be used on objects, can only be used on array so we need to change the objects to array
    collections: selectCollectionsForPreview // from selector.js
})


export default connect(mapStateToProps)(CollectonOverview)
