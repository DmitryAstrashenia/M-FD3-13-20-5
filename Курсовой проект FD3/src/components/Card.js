"use scrict";

import React from "react";
import { myEvents } from "./module/events";
import "./Card.css";


class Card extends React.Component {
  static defaultProps = {
    question: "Просмотр товара недоступен!",
  };


  currentRef = React.createRef();

  btnBuyUser = () => {
    myEvents.emit("addToCartOrder", this.props.id);
    myEvents.emit("amountGoodsInCart");
    { this.flyToCart() }
  };

  btnModalWindow = () => {
    myEvents.emit("ModalWindow", this.props.id);
  }

  flyToCart = () => {
    let cart = document.querySelector("#cart");
    let imgclone = this.currentRef.current.cloneNode();
    let body = document.querySelector("body");
    body.appendChild(imgclone);
    imgclone.animate([
      {
        left: this.currentRef.current.getBoundingClientRect().left + pageXOffset + "px",
        top: this.currentRef.current.getBoundingClientRect().top + pageYOffset + "px",
        width: "150px",
        height: "150px",
        position: "absolute",
      },
      {
        left: cart.getBoundingClientRect().left + pageXOffset + cart.getBoundingClientRect().width / 2 + "px",
        top: cart.getBoundingClientRect().top + pageYOffset + cart.getBoundingClientRect().height / 2 + "px",
        width: 0,
        height: 0,
        position: "absolute",
      }
    ], 500);

    cart.animate([
      { opacity: 1 },
      { opacity: 0.2 },
      { opacity: 1 }
    ], 500)

    setTimeout(() => imgclone.remove(), 500)
  }

  render() {
    console.log("Card")
    let pieces = this.props.data["pieces"];
    return (
      <ol className="preview position">
        <li><h5>{this.props.data["name"]}</h5></li>
        <li><img src={this.props.data["img"]} ref={this.currentRef} /></li>
        <li><h6>Цена: {this.props.data["price"]}BYN</h6></li>
        <li className="price_chart" onClick={this.btnModalWindow}>График цен</li>
        {pieces > 0 ? <li className="pieces green">Кол-во на складе:{pieces}</li> : <li className="pieces red">Товар отсутствует</li>}
        {pieces > 0 ? <li><button type="button" onClick={this.btnBuyUser} >Купить</button></li> : <li><button type="button" onClick={this.btnBuyUser} className="not_active" disabled="disabled" >Купить</button></li>}
      </ol>
    )
  }
}

export default Card;

