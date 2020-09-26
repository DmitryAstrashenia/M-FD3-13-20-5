"use strict";
import "./editGoodsCard.css";
import React from "react";

class EditGoodsCard extends React.Component {
  static defaultProps = {
    question: "Ой, что-то пошло не так!",
  };

  state = {
    id: this.props.id,
    name: this.props.name,
    img: this.props.img,
    price: this.props.price,
    number: this.props.number,
  };

  validate = () => {
    let access = true;
    for (let key in this.state) {
      if (key === "id") {
      } else {
        let input = document.getElementById(`${key}`);
        if (!this.state[key]) {
          access = false;
          input.classList.remove("invisible");
        } else if (!input.classList.contains("invisible")) {
          input.classList.add("invisible");
        }
      }
    }
    if (access) {
      document.getElementById("buttonSave").removeAttribute("disabled");
    } else {
      document.getElementById("buttonSave").setAttribute("disabled", "true");
    }
    return access;
  };

  answerName = (e) => {
    this.setState(
      {
        name: e.target.value,
      },
      this.validate
    );
  };

  answerImg = (e) => {
    this.setState(
      {
        img: e.target.value,
      },
      this.validate
    );
  };

  answerPrice = (e) => {
    this.setState(
      {
        price: Number(e.target.value),
      },
      this.validate
    );
  };

  answerNumber = (e) => {
    this.setState(
      {
        number: Number(e.target.value),
      },
      this.validate
    );
  };

  answerClosed = () => {
    if (!this.validate()) {
    } else {
      this.props.makeСhanges(
        this.state.id,
        this.state.name,
        this.state.img,
        this.state.price,
        this.state.number
      );
      this.props.edit(null, null);
    }
  };

  answerСanceling = () => {
    this.props.makeСhanges(
      this.props.id,
      this.props.name,
      this.props.img,
      this.props.price,
      this.props.number
    );
    this.props.edit(null, null);
  };

  render() {
    return (
      <ul key={this.props.vendorCode} className="CardEdit">
        <li className="nameEdit">
          <input
            type="text"
            defaultValue={this.props.name}
            onChange={this.answerName}
          />
        </li>
        <span id="name" className="messageErr invisible">
          Введите название
        </span>
        <li className="imgEdit">
          <input
            type="text"
            defaultValue={this.props.img}
            onChange={this.answerImg}
          />
        </li>
        <span id="img" className="messageErr invisible">
          Введите URL изображения
        </span>
        <li className="priceEdit">
          <input
            type="text"
            defaultValue={this.props.price}
            onChange={this.answerPrice}
          />
        </li>
        <span id="price" className="messageErr invisible">
          Укажите цену
        </span>
        <li className="numberEdit">
          <input
            type="text"
            defaultValue={this.props.number}
            onChange={this.answerNumber}
          />
        </li>
        <span id="number" className="messageErr invisible">
          Укажите к-во на складе
        </span>
        <li>
          <button
            id="buttonSave"
            className="buttonEdit"
            onClick={this.answerClosed}
          >
            {"Сохранить"}
          </button>
          <button className="buttonEdit" onClick={this.answerСanceling}>
            {"Закрыть"}
          </button>
        </li>
      </ul>
    );
  }
}

export default EditGoodsCard;
