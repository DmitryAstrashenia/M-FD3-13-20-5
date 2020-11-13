"use scrict";

import React, { Fragment } from "react";
import ProductInCart from "./ProductInCart";
import FormOrder from "./FormOrder";
import cartOrderReducer from "./function/cartOrderReducer";
import { createStore } from "redux";
import { myEvents } from "./module/events";
import "./Cart.css";

class Cart extends React.Component {
  store = createStore(cartOrderReducer);
  state = {
    cartOrder: this.store.getState(),
    allGoods: JSON.parse(localStorage.getItem("allGoods")),
  };

  plusItem = (id) => {
    this.store.dispatch({ type: "counter/incremented", id: id });
    localStorage.setItem("cartOrder", JSON.stringify(this.store.getState()));
    this.setState({
      cartOrder: this.store.getState(),
    });
    myEvents.emit("amountGoodsInCart");
  };

  minusItem = (id) => {
    this.store.dispatch({ type: "counter/decremented", id: id });
    if (this.store.getState()[id]) {
      localStorage.setItem("cartOrder", JSON.stringify(this.store.getState()));
      this.setState({
        cartOrder: this.store.getState(),
      });
      myEvents.emit("amountGoodsInCart");
    } else {
      this.deleteItem(id);
      myEvents.emit("amountGoodsInCart");
    }
  };

  deleteItem = (id) => {
    this.store.dispatch({ type: "counter/delete", id: id });
    localStorage.setItem("cartOrder", JSON.stringify(this.store.getState()));
    this.setState({
      cartOrder: this.store.getState(),
    });
    myEvents.emit("amountGoodsInCart");
  };

  componentDidMount = () => {
    myEvents.addListener("plusItem", this.plusItem);
    myEvents.addListener("minusItem", this.minusItem);
    myEvents.addListener("deleteItem", this.deleteItem);
  };

  componentWillUnmount = () => {
    myEvents.removeListener("plusItem", this.plusItem);
    myEvents.removeListener("minusItem", this.minusItem);
    myEvents.removeListener("deleteItem", this.deleteItem);
  };

  render() {
    console.log("Cart-Корзина");
    let products = [];
    let sum = 0;
    if (this.state.cartOrder) {
      let keys = Object.keys(this.state.cartOrder);
      products = keys.map((key) => {
        return (
          <ProductInCart
            key={key}
            id={key}
            allGoods={this.state.allGoods}
            cartOrder={this.state.cartOrder[key]}
          />
        );
      });
      keys.forEach((key) => {
        sum += this.state.allGoods[key]["price"] * this.state.cartOrder[key];
      });
    }

    if (
      this.state.cartOrder === null ||
      !Object.keys(this.state.cartOrder).length > 0
    ) {
      return (
        <div className="Cart">
          <p className="center">Корзина пуста!</p>
          <FormOrder />
        </div>
      );
    } else {
      return (
        <div className="Cart">
          <ul className="cartView">
            <li>
              <div>
                <p>Товар</p>
              </div>
              <div>
                <p>Количество</p>
              </div>
              <div>
                <p>Цена</p>
              </div>
            </li>
            {products}
            <li>
              <p className="total">Итого: {sum} BYN</p>
            </li>
          </ul>
          <FormOrder />
        </div>
      );
    }
  }
}

export default Cart;
