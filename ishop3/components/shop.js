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

  edit = (code) => {
    this.setState({
      editProduct: code,
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
            deleteCard={this.deleteCard}
            mark={this.mark}
            viewProduct={this.state.viewProduct}
            editProduct={this.state.editProduct}
          />
        );
      }
    });

    return this.state.viewProduct ? (
      <div className="Shop">
        <h2 className="sectionName"> {this.props.sectionName} </h2>{" "}
        <div className="GoodsCardsArr"> {goodsCardsArr} </div>{" "}
        <input type="button" value="add" id="add" />
        <div className="GoodsCardsArr"> {goodsCard} </div>{" "}
      </div>
    ) : (
      <div className="Shop">
        <h2 className="sectionName"> {this.props.sectionName} </h2>{" "}
        <div className="GoodsCardsArr"> {goodsCardsArr} </div>{" "}
        <input type="button" value="add" id="add" />
      </div>
    );
  }
}

export default Shop;
