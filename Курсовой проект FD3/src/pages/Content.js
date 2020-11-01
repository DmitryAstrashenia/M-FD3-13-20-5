"use scrict";

import React from "react";
import HomePage from "..//Content/HomePage";
import About from "..//Content/About";
import Gallery from "..//Content/Gallery";
import Suppliers from "../Content/Suppliers";
import Contact from "../Content/Contact";
import "..//css/Content.css";
import { Route, Redirect } from "react-router-dom";

class Content extends React.Component {
  render() {
    return (
      <div className="Content">
        <Route path="/" exact component={HomePage} />
        <Route path="/index.html" component={HomePage} />
        <Route path="/about" component={About} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/suppliers" component={Suppliers} />
        <Route path="/contacts" component={Contact} />
      </div>
    );
  }
}

export default Content;
