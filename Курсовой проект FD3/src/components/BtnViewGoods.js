"use strict";

import React from "react";
import { myEvents } from "./module/events";

class BtnViewGoods extends React.Component {
  btnAllGoods = () => {
    myEvents.emit("btnAllGoods");
  };

  btnInStorage = () => {
    myEvents.emit("btnInStorage");
  };

  btnNotInStorage = () => {
    myEvents.emit("btnNotInStorage");
  };

  render() {
    return (
      <div>
        <input
          type="button"
          value="Все"
          onClick={this.btnAllGoods}
          className="btn allgoods"
        />
        <input
          type="button"
          value="В наличии"
          onClick={this.btnInStorage}
          className="btn"
        />
        <input
          type="button"
          value="Отсутствуют"
          onClick={this.btnNotInStorage}
          className="btn notInStorage"
        />
      </div>
    );
  }
}

export default BtnViewGoods;
