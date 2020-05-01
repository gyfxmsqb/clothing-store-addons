import React, { Component } from "react"
import CollectonOverview from "../../components/collection-overview/collection-overview"
import { Route } from "react-router-dom"
import CollectionPage from "../collection/collection"

const ShopPage = ({match}) => {

    console.log("match.path", match.path)
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectonOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />

     
        </div> 
    )
}

export default ShopPage
