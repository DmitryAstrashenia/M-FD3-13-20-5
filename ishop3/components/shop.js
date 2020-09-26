"use strict";
import "./shop.css";
import React from "react";
import GoodsList from "./goodsList";
import PropTypes from "prop-types";

class Shop extends React.Component {
  static defaultProps = {
    question: "Товара нет на складе!",
  };

  state = {
    goods: this.props.goods,
    markedProductCode: null,
    viewProduct: null,
    editProduct: null,
    disabledProduct: null,
  };

  deleteCard = (code) => {
    if (confirm("Уверены, что хотите удалить?")) {
      let newGoods = [];
      this.state.goods.forEach((e) => {
        if (e.vendorCode != code) {
          newGoods.push(e);
        }
      });
      this.setState({
        goods: newGoods,
      });
    }
  };

  addCard = () => {
    let newGoods = this.state.goods;
    let maxVendorCode = 0;
    this.state.goods.forEach((e) => {
      if (e.vendorCode > maxVendorCode) {
        maxVendorCode = e.vendorCode;
      }
    });
    let newProduct = {
      vendorCode: ++maxVendorCode,
      name: "Наименование",
      price: 0,
      img:
        "https://lh3.googleusercontent.com/proxy/utahQcE5e2pfkiKbEzRwtINapgoWhjMLPahw0MiWTwja4Uq7UXR5nS36okujH3vg0T0FIOEVuHGWgaJ61Kxvnh1vHjjOGXg0sQ4",
      number: 0,
    };
    newGoods.push(newProduct);
    this.setState({
      goods: newGoods,
    });
  };

  makeСhanges = (id, name, img, price, number) => {
    this.state.goods.forEach((e) => {
      if (e.vendorCode === id) {
        (e.name = name), (e.img = img), (e.price = price), (e.number = number);
      }
    });
  };

  mark = (code) => {
    this.setState({
      markedProductCode: code,
    });
  };

  view = (code) => {
    this.setState({
      viewProduct: code,
    });
  };

  edit = (code, status) => {
    this.setState({
      editProduct: code,
      disabledProduct: status,
    });
  };

  render() {
    let goodsCardsArr = this.state.goods.map((el) => (
      <GoodsList
        key={el.vendorCode}
        code={el.vendorCode}
        name={el.name}
        img={el.img}
        price={el.price}
        number={el.number}
        deleteCard={this.deleteCard}
        mark={this.mark}
        marked={this.state.markedProductCode}
        view={this.view}
        edit={this.edit}
        disabledProduct={this.state.disabledProduct}
      />
    ));

    let goodsCard = this.state.goods.map((el) => {
      if (el.vendorCode === this.state.viewProduct) {
        return (
          <GoodsList
            key={el.vendorCode}
            code={el.vendorCode}
            name={el.name}
            img={el.img}
            price={el.price}
            number={el.number}
            viewProduct={this.state.viewProduct}
            editProduct={this.state.editProduct}
            edit={this.edit}
            disabledProduct={this.state.disabledProduct}
            makeСhanges={this.makeСhanges}
          />
        );
      }
    });

    return this.state.viewProduct ? (
      <div className="Shop">
        <h2 className="sectionName"> {this.props.sectionName} </h2>
        <div className="GoodsCardsArr"> {goodsCardsArr} </div>
        <input type="button" value="add" id="add" onClick={this.addCard} />
        <div className="GoodsCard"> {goodsCard} </div>
      </div>
    ) : (
      <div className="Shop">
        <h2 className="sectionName"> {this.props.sectionName} </h2>
        <div className="GoodsCardsArr"> {goodsCardsArr} </div>
        <input type="button" value="add" id="add" onClick={this.addCard} />
      </div>
    );
  }
}

export default Shop;
