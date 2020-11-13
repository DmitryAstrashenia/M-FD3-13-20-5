"use strict";

import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import BtnViewGoods from "./BtnViewGoods";
import Ups from "../pages/Ups";

class Cards extends React.Component {
  productsPerPage = 8;

  render() {
    let indexOfLastProducts =
      this.props.match.params.item * this.productsPerPage;
    let indexOfFirstProducts = indexOfLastProducts - this.productsPerPage;
    let currentProducts = this.props.products.slice(
      indexOfFirstProducts,
      indexOfLastProducts
    );

    let pageNumbers = [];
    for (
      let i = 1;
      i <= Math.ceil(this.props.products.length / this.productsPerPage);
      i++
    ) {
      pageNumbers.push(i);
    }

    if (pageNumbers.length < this.props.match.params.item) {
      return <Ups />;
    }

    let renderPageNumbers = pageNumbers.map((number, index) => {
      return (
        <li
          key={index}
          id={number}
          className={this.props.match.params.item === number ? "active" : null}
        >
          <NavLink
            to={`/` + this.props.link + `/` + this.props.item + `/` + number}
            activeClassName="active"
          >
            {number}
          </NavLink>
        </li>
      );
    });
    console.log("Cards", this.props.match.params.item);
    return (
      <div>
        <BtnViewGoods />
        <div className="wrapper_preview">{currentProducts}</div>
        {renderPageNumbers.length > 1 ? (
          <ul id="page-numbers">{renderPageNumbers}</ul>
        ) : null}
      </div>
    );
  }
}

export default Cards;
