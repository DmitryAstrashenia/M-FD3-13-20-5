"use scrict";

import React from "react";
import HomePage from "./HomePage";
import About from "./About";
import Gallery from "./Gallery";
import Suppliers from "./Suppliers";
import Contact from "./Contact";
import EngineeringHydraulicSystems from "./EngineeringHydraulicSystems";
import EngineeringPowerPack from "./EngineeringPowerPack";
import ProductinPowerPack from "./ProductionPowerPack";
import PumpMotor from "./PumpMotor";
import Cards from "../components/ViewCardsGoods";
import Cart from "..//components/Cart";
import Ups from "../pages/Ups";
import "..//css/Content.css";
import { Route } from "react-router-dom";

class Content extends React.Component {
  render() {
    console.log("Content");
    return (
      <div className="Content">
        <Route path="/" exact component={HomePage} />
        <Route path="/index.html" component={HomePage} />
        <Route path="/about" component={About} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/suppliers" component={Suppliers} />
        <Route path="/contacts" component={Contact} />
        <Route
          path="/engineering_hydraulic_systems"
          component={EngineeringHydraulicSystems}
        />
        <Route
          path="/engineering_power_pack"
          component={EngineeringPowerPack}
        />
        <Route path="/production_power_pack" component={ProductinPowerPack} />
        <Route path="/pump-motor" exact component={PumpMotor} />
        <Route path="/pump-motor/:item" component={Cards} />
        <Route path="/shopping_cart" component={Cart} />
      </div>
    );
  }
}

export default Content;
