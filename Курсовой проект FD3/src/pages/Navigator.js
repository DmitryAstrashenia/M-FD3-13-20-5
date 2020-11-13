"use scrict";

import React from "react";
import headerFixNav from "../components/function/headerFixNav"
import { NavLink } from "react-router-dom";
import { myEvents } from "../components/module/events";
import "..//css/Navigator.css";

class Navigator extends React.Component {
  openMenu = () => {
    let menu = document.querySelector("#nav");
    if (menu.className === "nav-hor") {
      menu.className += " open";
    } else {
      menu.className = "nav-hor";
    }
  };

  displayNone = {
    display: "none",
  };

  amountGoodsInCart = () => {
    if (JSON.parse(localStorage.getItem("cartOrder"))) {
      let cartOrder = JSON.parse(localStorage.getItem("cartOrder"));
      let piecesGoods = document.querySelector("#pieses_goods");
      if (Object.keys(cartOrder).length > 0) {
        piecesGoods.setAttribute("style", "display:inline-block");
        piecesGoods.innerHTML = Object.keys(cartOrder).length;
      } else {
        piecesGoods.setAttribute("style", "display:none");
      }
    }
  }

  componentDidMount = () => {
    myEvents.addListener("amountGoodsInCart", this.amountGoodsInCart);
    { this.amountGoodsInCart() }
    { headerFixNav() }
  };

  componentWillUnmount = () => {
    myEvents.removeListener("amountGoodsInCart", this.amountGoodsInCart);
    { this.amountGoodsInCart() }
    { headerFixNav() }
  };


  render() {
    console.log("Navigator")
    return (
      <nav className="nav-hor" id="nav">
        <ul>
          <li>
            <NavLink to="/" activeClassName="">
              На главную
            </NavLink>
          </li>
          <li className="drop_down">
            <a>
              <span>Услуги и товары</span>
            </a>
            <ul className="menu">
              <li>
                <a>Инжиниринг</a>
                <ul>
                  <li>
                    <NavLink
                      to="/engineering_hydraulic_systems"
                      activeClassName=""
                    >
                      Проектирование гидросистем
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/engineering_power_pack" activeClassName="">
                      Проектирование гидростанций
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/production_power_pack" activeClassName="">
                      Производство гидростанций
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li>
                <a>Сервис гидравлики</a>
                <ul>
                  <li>
                    <NavLink to="/hydraulics_diagnostics">Диагностика и ремонт</NavLink>
                  </li>
                  <li>
                    <NavLink to="/service_center">Сервисный центр</NavLink>
                  </li>
                  <li>
                    <NavLink to="/hydrofication">Гидрофикация</NavLink>
                  </li>
                </ul>
              </li>

              <li>
                <a>Продажа</a>
                <ul>
                  <li>
                    <NavLink to="/pump-motor">Гидронасосы, гидромоторы</NavLink>
                  </li>
                  <li>
                    <NavLink to="/valve">Гидроклапаны</NavLink>
                  </li>
                  <li>
                    <NavLink to="/directional_valve">Гидрораспределители</NavLink>
                  </li>
                  <li>
                    <NavLink to="/hydraulics_accessories">
                      Аксессуары для гидравлики
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/accumulator">Гидроаккумуляторы</NavLink>
                  </li>
                  <li>
                    <NavLink to="/radiators">Теплообменники</NavLink>
                  </li>
                  <li>
                    <NavLink to="/filters">Фильтры</NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              О компании
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" activeClassName="active">
              Галерея
            </NavLink>
          </li>
          <li>
            <NavLink to="/suppliers" activeClassName="active">
              Поставщики
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacts" activeClassName="active">
              Контакты
            </NavLink>
          </li>
          <li id="cart">
            <NavLink to="/shopping_cart">
              Корзина
              <span id="pieses_goods" style={this.displayNone}></span>
            </NavLink>
          </li>
        </ul>
        <NavLink to="#" className="icon" onClick={this.openMenu}>
          <i className="fa fa-bars"></i>
        </NavLink>
      </nav>
    );
  }
}

export default Navigator;
