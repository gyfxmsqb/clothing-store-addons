import React, { Component } from 'react'
import "./directory.scss"
import MenuItem from '../menu-item/menu-item'
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect"
import {selectDirectorySections} from "../../redux/directory/directory.selector"

const Directory = ({sections}) => {

    return (
        <div className="directory-menu">

            {
                sections.map(section => (

                    <MenuItem
                        key={section.id}
                        title={section.title}
                        imageUrl={section.imageUrl}
                        size={section.size}
                        linkUrl={section.linkUrl}
                    />

                ))
            }
        </div>
    )

}



const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections // from selector.js
    })

export default connect(mapStateToProps)(Directory)