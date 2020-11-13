"use scrict";

import React from "react";
import { myEvents } from "./module/events";
import { Route } from "react-router-dom";
import transformArr from "./function/transformArr";
import bdPumpMotor from "../../bdPumpMotor";
import CardWithPaginator from "./Cards";
import ModalWindow from "./ModalWindow";
import deepEqual from "deep-equal";
import Card from "./Card";
import Ups from "../pages/Ups";
import BtnViewGoods from "./BtnViewGoods";
import "./ViewCardsGoods.css";
import { default as isoFetch } from "isomorphic-fetch";
import Cards from "./Cards";

class ViewCardsGoods extends React.PureComponent {
  constructor(props) {
    super(props);
    this.loadData();
  }

  itemData = bdPumpMotor.find((e) => e.item == this.props.match.params.item);

  state = {
    data: null,
    link: this.itemData.link,
    name: this.itemData.name,
    url: this.itemData.url,
    item: this.itemData.item,
    modalWindowId: null,
    error: false,
  };

  cartOrder = {};
  goods = {};
  allGoods = {};

  handleClick = (event) => {
    this.setState({
      currentPage: Number(event.target.id),
    });
  };

  loadData = () => {
    isoFetch(this.state.url)
      .then((data) => {
        if (data.status !== 200) {
          console.log("Что - то пошло не так: " + data.status);
          return;
        }
        data.json().then((data) => {
          data = data["feed"]["entry"];
          this.goods = transformArr(data);
          localStorage.setItem(
            `goods_${this.state.item}`,
            JSON.stringify(this.goods)
          );
          for (let key of Object.keys(this.goods)) {
            if (!this.allGoods.hasOwnProperty(key))
              this.allGoods[key] = this.goods[key];
          }
          localStorage.setItem("allGoods", JSON.stringify(this.allGoods));
          
          this.setState({
            data: this.goods,
            error: false,
          });
        });
      })
      .catch((error) => {
        this.setState({
          error: true,
        });
        console.error("Ошибка! Причина: " + error);
      });
  };

  addToCartOrder = (id) => {
    if (this.cartOrder[id]) {
      this.cartOrder[id]++;
    } else {
      this.cartOrder[id] = 1;
    }
    localStorage.setItem("cartOrder", JSON.stringify(this.cartOrder));
  };

  viewModalWindow = (id) => {
    this.setState({
      modalWindowId: id,
    });
  };
  closeModalWindow = () => {
    this.setState({
      modalWindowId: null,
    });
  };

  btnAllGoods = () => {
    let isEqual = deepEqual(this.state.data, this.data);
    if (!isEqual) {
      this.setState({
        data: this.goods,
      });
    }
  };

  btnInStorage = () => {
    let keys = Object.keys(this.goods);
    let newData = {};
    keys.forEach((key) => {
      if (this.goods[key].pieces > 0) {
        newData[key] = this.goods[key];
      }
    });
    let isEqual = deepEqual(this.state.data, newData);
    if (!isEqual) {
      this.setState({
        data: newData,
      });
    }
  };

  btnNotInStorage = () => {
    let keys = Object.keys(this.goods);
    let newData = {};
    keys.forEach((key) => {
      if (this.goods[key].pieces == 0) {
        newData[key] = this.goods[key];
      }
    });
    let isEqual = deepEqual(this.state.data, newData);
    if (!isEqual) {
      this.setState({
        data: newData,
      });
    }
  };

  componentDidMount = () => {
    myEvents.addListener("addToCartOrder", this.addToCartOrder);
    myEvents.addListener("ModalWindow", this.viewModalWindow);
    myEvents.addListener("btnClose", this.closeModalWindow);
    myEvents.addListener("btnAllGoods", this.btnAllGoods);
    myEvents.addListener("btnInStorage", this.btnInStorage);
    myEvents.addListener("btnNotInStorage", this.btnNotInStorage);
  };

  componentWillUnmount = () => {
    myEvents.removeListener("addToCartOrder", this.addToCartOrder);
    myEvents.removeListener("ModalWindow", this.viewModalWindow);
    myEvents.removeListener("btnClose", this.closeModalWindow);
    myEvents.removeListener("btnAllGoods", this.btnAllGoods);
    myEvents.removeListener("btnInStorage", this.btnInStorage);
    myEvents.removeListener("btnNotInStorage", this.btnNotInStorage);
  };

  render() {
    if (JSON.parse(localStorage.getItem("cartOrder"))) {
      this.cartOrder = JSON.parse(localStorage.getItem("cartOrder"));
    }
    if (JSON.parse(localStorage.getItem("allGoods"))) {
      this.allGoods = JSON.parse(localStorage.getItem("allGoods"));
    }

    if (!this.state.data && !this.state.error) {
      console.log("Cards-" + this.state.name + " spinner");
      return (
        <div>
          <img
            src="/..//src/img/Spinner.svg"
            alt="loading"
            className="loading"
          />
        </div>
      );
    }
    if (this.state.error) {
      return <Ups />;
    }

    let keys = Object.keys(this.state.data);
    let products = keys.map((key) => {
      return <Card key={key} id={key} data={this.state.data[key]} />;
    });

    console.log("ViewCardsGoods-" + this.state.name);
    return (
      <div>
        {this.state.modalWindowId && (
          <ModalWindow id={this.state.modalWindowId} />
        )}
        <div className="Products">
          <h2>{this.state.name}</h2>

          <Route
            path={`/` + this.state.link + `/` + this.state.item + `/:item`}
            render={(props) => (
              <Cards
                {...props}
                products={products}
                link={this.state.link}
                item={this.state.item}
              />
            )}
          />
        </div>
      </div>
    );
  }
}

export default ViewCardsGoods;
