"use strict";

import React from "react";
import ReactDOM from "react-dom";
import Header from "./src/pages/Header.js";
import Navigator from "./src/pages/Navigator.js";
import Content from "./src/pages/Content.js";
import Footer from "./src/pages/Footer.js";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Navigator />
    <Content />
    <Footer />
  </BrowserRouter>,
  document.getElementById("container")
);
