"use strict";
import "./Shop.css";
import React from "react";
import GoodsList from "./GoodsList";
import ViewGoodsCard from "./ViewGoodsCard";
import EditGoodsCard from "./EditGoodsCard";
import NewCard from "./NewCard";

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
    newProduct: null,
    display: null,
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

  cleanCard = () => {
    this.setState({
      newProduct: true,
      disabledProduct: "disabled",
      markedProductCode: null,
      display: "none",
    });
  };

  addCard = (vendorCode, name, img, price, number) => {
    let newGoods = this.state.goods;
    let newCard = { vendorCode, name, img, price, number };
    newGoods.push(newCard);
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
      newProduct: null,
      display: null,
    });
  };

  render() {
    let goodsCardsArr = this.state.goods.map((el) => {
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
          marked={this.state.markedProductCode}
          view={this.view}
          edit={this.edit}
          disabledProduct={this.state.disabledProduct}
        />
      );
    });

    let goodsCard = this.state.newProduct ? (
      <NewCard
        goods={this.state.goods}
        edit={this.edit}
        addCard={this.addCard}
      />
    ) : (
      this.state.goods.map((el) => {
        if (el.vendorCode === this.state.viewProduct) {
          if (
            this.state.viewProduct != null &&
            this.state.editProduct != null
          ) {
            return (
              <EditGoodsCard
                id={el.vendorCode}
                key={el.vendorCode}
                name={el.name}
                img={el.img}
                price={el.price}
                number={el.number}
                edit={this.edit}
                makeСhanges={this.makeСhanges}
              />
            );
          } else {
            return (
              <ViewGoodsCard
                key={el.vendorCode}
                name={el.name}
                img={el.img}
                price={el.price}
                number={el.number}
              />
            );
          }
        }
      })
    );

    return this.state.viewProduct || this.state.newProduct ? (
      <div className="Shop">
        <h2 className="sectionName"> {this.props.sectionName} </h2>
        <div className="GoodsCardsArr"> {goodsCardsArr} </div>
        <input
          type="button"
          value="Добавить"
          id="add"
          style={{ display: this.state.display }}
          onClick={this.cleanCard}
        />
        <div className="GoodsCard"> {goodsCard} </div>
      </div>
    ) : (
      <div className="Shop">
        <h2 className="sectionName"> {this.props.sectionName} </h2>
        <div className="GoodsCardsArr"> {goodsCardsArr} </div>
        <input
          type="button"
          value="Добавить"
          id="add"
          style={{ display: this.state.display }}
          onClick={this.cleanCard}
        />
      </div>
    );
  }
}

export default Shop;
