"use strict";

import React from "react";
import ReactDOM from "react-dom";
import Shop from "./components/shop";

let sectionNameText = "Шестеренный насос Hydra-Pack";
let goodsArr = require("./goodsList.json");


ReactDOM.render(
  <Shop sectionName={sectionNameText} goods={goodsArr} />,
  document.getElementById("container")
);
