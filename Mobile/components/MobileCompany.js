"use strict";
import React from "react";
import PropTypes from "prop-types";

import "./MobileCompany.css";

class MobileCompany extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  state = {
    name: this.props.name,
  };

  setName1 = () => {
    this.setState({
      name: "Velcom",
    });
  };

  setName2 = () => {
    this.setState({
      name: "MTC",
    });
  };

  render() {
    console.log("renderMobileCompany");
    return (
      <div className="MobileCompany">
        <div className="SelectCompany">
          <input type="button" value="Velcom" onClick={this.setName1} />
          <input type="button" value="MTC" onClick={this.setName2} />
          <span>Компания: {this.state.name} </span>
        </div>
        <hr />
      </div>
    );
  }
}

export default MobileCompany;
