"use scrict";

import React from "react";
import { myEvents } from "./module/events";

class ProductInCart extends React.PureComponent {
  btnPlusItem = () => {
    myEvents.emit("plusItem", this.props.id);
  };

  btnMinusItem = () => {
    myEvents.emit("minusItem", this.props.id);
  };

  btnDeleteItem = () => {
    myEvents.emit("deleteItem", this.props.id);
  };

  render() {
    console.log("CartProduct-Продукт в корзине " + this.props.id);
    return (
      <li>
        <div>
          <img src={this.props.allGoods[this.props.id]["img"]} />
          <p>{this.props.allGoods[this.props.id]["name"]}</p>
        </div>
        <div>
          <button type="button" onClick={this.btnMinusItem} className="minus">
            -
          </button>
          <p>{this.props.cartOrder}шт.</p>
          <button type="button" onClick={this.btnPlusItem}>
            +
          </button>
        </div>
        <div>
          <p>
            {this.props.allGoods[this.props.id]["price"] * this.props.cartOrder}
            BYN
          </p>
          <button type="button" onClick={this.btnDeleteItem}>
            x
          </button>
        </div>
      </li>
    );
  }
}

export default ProductInCart;
