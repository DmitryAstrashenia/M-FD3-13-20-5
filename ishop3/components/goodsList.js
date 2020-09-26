import "./goodsList.css";
import React from "react";
import PropTypes from "prop-types";
import ViewGoodsCard from "./viewGoodsCard";
import EditGoodsCard from "./editGoodsCard";

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
    if (this.props.disabledProduct === null) {
      this.props.mark(this.props.code);
      this.props.view(this.props.code);
    }
  };

  answerEdit = () => {
    this.props.edit(this.props.code, "disabled");
  };

  render() {
    let classNames = ["Card"];
    if (this.props.marked === this.props.code) {
      classNames.push("mark");
    }

    if (this.props.viewProduct != null && this.props.editProduct === null) {
      return (
        <ViewGoodsCard
          vendorCode={this.props.vendorCode}
          name={this.props.name}
          img={this.props.img}
          price={this.props.price}
          number={this.props.number}
        />
      );
    }

    if (this.props.viewProduct != null && this.props.editProduct != null) {
      return (
        <EditGoodsCard
          id={this.props.code}
          vendorCode={this.props.code}
          name={this.props.name}
          img={this.props.img}
          price={this.props.price}
          number={this.props.number}
          disabledProduct={this.props.disabledProduct}
          edit={this.props.edit}
          makeСhanges={this.props.makeСhanges}
        />
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
              disabled={this.props.disabledProduct}
              onClick={this.answerClicked}
            />
          </li>
          <li>
            <input
              type="button"
              className="edit far fa-edit"
              value="&#xf044;"
              id="edit"
              disabled={this.props.disabledProduct}
              onClick={this.answerEdit}
            />
          </li>
          <li className="name">
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
          <button className="button"> {"Купить"} </button>
        </ul>
      );
    }
  }
}

export default GoodsList;
