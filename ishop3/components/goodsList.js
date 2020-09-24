import "./goodsList.css";
import React from "react";
import PropTypes from "prop-types";

class GoodsList extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
  };

  answerClicked = () => {
    this.props.deleteCard(this.props.code);
  };

  answerMark = () => {
    this.props.mark(this.props.code);
    this.props.view(this.props.code);
  };

  answerEdit = () => {
    this.props.edit(this.props.code);
  };

  render() {
    let classNames = ["Card"];
    if (this.props.marked === this.props.code) {
      classNames.push("mark");
    }
    if (this.props.viewProduct != null && this.props.editProduct === null) {
      return (
        <ul key={this.props.vendorCode} className={classNames.join(" ")}>
          <li className="Name">
            <h3> {this.props.name} </h3>
          </li>
          <li className="Img">
            <img src={this.props.img} alt="img_pump" />
          </li>
          <li className="Price">
            <h4>{"Цена: " + this.props.price + "BYN"}</h4>
          </li>
          <li className="Number">
            {"Кол-во на складе:" + this.props.number + "шт."}
          </li>
        </ul>
      );
    }
    if (this.props.viewProduct != null && this.props.editProduct != null) {
      return (
        <ul key={this.props.vendorCode} className={classNames.join(" ")}>
          <li className="Name">
            <input type="text" defaultValue={this.props.name} />
          </li>
          <li className="ImgEdit">
            <input type="text" defaultValue={this.props.img} />
          </li>
          <li className="PriceEdit">
            <input
              type="text"
              defaultValue={"Цена: " + this.props.price + "BYN"}
            />
          </li>
          <li className="NumberEdit">
            <input
              type="text"
              defaultValue={"Кол-во на складе:" + this.props.number + "шт."}
            />
          </li>
          <button className="ButtonEdit">{"Сохранить"}</button>
          <button className="ButtonEdit">{"Закрыть"}</button>
        </ul>
      );
    } else {
      return (
        <ul
          key={this.props.vendorCode}
          className={classNames.join(" ")}
          onClick={this.answerMark}
        >
          <li>
            <input
              type="button"
              className="btn-close"
              value="x"
              id="delete"
              onClick={this.answerClicked}
            />
          </li>
          <li>
            <input
              type="button"
              className="edit far fa-edit"
              value="&#xf044;"
              id="edit"
              onClick={this.answerEdit}
            />
          </li>
          <li className="Name">
            <h3> {this.props.name} </h3>
          </li>
          <li className="Img">
            <img src={this.props.img} alt="img_pump" />
          </li>
          <li className="Price">
            <h4>{"Цена: " + this.props.price + "BYN"}</h4>
          </li>
          <li className="Number">
            {"Кол-во на складе:" + this.props.number + "шт."}
          </li>
          <button className="Button">{"Купить"}</button>
        </ul>
      );
    }
  }
}

export default GoodsList;
