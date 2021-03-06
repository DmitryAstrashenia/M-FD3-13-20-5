"use strict";
import "./ViewGoodsCard.css";
import React from "react";
import PropTypes from "prop-types";

class ViewGoodsCard extends React.Component {
  static defaultProps = {
    question: "Просмотр товара недоступен!",
  };

  render() {
    return (
      <ul key={this.props.vendorCode} className="CardView">
        <li className="Name">
          <h3> {this.props.name} </h3>
        </li>
        <li className="img">
          <img src={this.props.img} alt="img_pump" />
        </li>
        <li className="price">
          <h4> {"Цена: " + this.props.price + "BYN"} </h4>
        </li>
        <li className="number">
          {"Кол-во на складе:" + this.props.number + "шт."}
        </li>
      </ul>
    );
  }
}

export default ViewGoodsCard;
