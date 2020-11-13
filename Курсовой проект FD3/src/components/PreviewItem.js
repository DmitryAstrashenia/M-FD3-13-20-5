"use scrict";

import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types"

class PreviewItem extends React.Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
    };

    render() {
        return (
            <NavLink to={this.props.link} className="preview">
                <img src={this.props.src} alt={this.props.name} />
                <span className="info">{this.props.name}</span>
            </NavLink>
        )
    }
}

export default PreviewItem;
