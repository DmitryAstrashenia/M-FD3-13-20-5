import "./NewCard.css";
import React from "react";

class NewCard extends React.Component {
  state = {
    goods: this.props.goods,
    name: null,
    img: null,
    price: null,
    number: null,
    disabled: "disabled",
  };

  validate = () => {
    let access = true;
    for (let key in this.state) {
      if (key === "goods" || key === "disabled") {
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
      this.setState({
        disabled: null,
      });
    } else {
      this.setState({
        disabled: "disabled",
      });
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

  answerNewCard = () => {
    let maxVendorCode = 0;
    this.state.goods.forEach((e) => {
      if (e.vendorCode > maxVendorCode) {
        maxVendorCode = e.vendorCode;
      }
    });
    let id = ++maxVendorCode;

    if (!this.validate()) {
    } else {
      this.props.addCard(
        id,
        this.state.name,
        this.state.img,
        this.state.price,
        this.state.number
      );
    }
    this.props.edit(null, null);
  };

  answerСanceling = () => {
    this.props.edit(null, null);
  };

  render() {
    return (
      <ul key={this.state.id} className="newCard">
        <li className="newName">
          <input type="text" defaultValue={null} onChange={this.answerName} />
        </li>
        <span id="name" className="messageErr">
          Введите название
        </span>
        <li className="newImg">
          <input type="text" defaultValue={null} onChange={this.answerImg} />
        </li>
        <span id="img" className="messageErr">
          Введите URL изображения
        </span>
        <li className="newPrice">
          <input type="text" defaultValue={null} onChange={this.answerPrice} />
        </li>
        <span id="price" className="messageErr">
          Укажите цену
        </span>
        <li className="newNumber">
          <input type="text" defaultValue={null} onChange={this.answerNumber} />
        </li>
        <span id="number" className="messageErr">
          Укажите к-во на складе
        </span>
        <li>
          <button
            id="addButton"
            className="newButton"
            disabled={this.state.disabled}
            onClick={this.answerNewCard}
          >
            {"Добавить"}
          </button>
          <button className="newButton" onClick={this.answerСanceling}>
            {"Закрыть"}
          </button>
        </li>
      </ul>
    );
  }
}

export default NewCard;
