"use scrict";

import React from "react";
import { NavLink } from "react-router-dom";
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

  render() {
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
                    <a href="engineering_hydraulic_systems">
                      Проектирование гидросистем
                    </a>
                  </li>
                  <li>
                    <a href="engineering_power_pack">
                      Проектирование гидростанций
                    </a>
                  </li>
                  <li>
                    <a href="production_power_pack">
                      Производство гидростанций
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a>Сервис гидравлики</a>
                <ul>
                  <li>
                    <a href="hydraulics_diagnostics">Диагностика и ремонт</a>
                  </li>
                  <li>
                    <a href="service_center">Сервисный центр</a>
                  </li>
                  <li>
                    <a href="hydrofication">Гидрофикация</a>
                  </li>
                </ul>
              </li>

              <li>
                <a>Продажа</a>
                <ul>
                  <li>
                    <a href="pump_motor">Гидронасосы, гидромоторы</a>
                  </li>
                  <li>
                    <a href="valve">Гидроклапаны</a>
                  </li>
                  <li>
                    <a href="directional_valve">Гидрораспределители</a>
                  </li>
                  <li>
                    <a href="hydraulics_accessories">
                      Аксессуары для гидравлики
                    </a>
                  </li>
                  <li>
                    <a href="accumulator">Гидроаккумуляторы</a>
                  </li>
                  <li>
                    <a href="radiators">Теплообменники</a>
                  </li>
                  <li>
                    <a href="filters">Фильтры</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="about" activeClassName="active">
              О компании
            </NavLink>
          </li>
          <li>
            <NavLink to="gallery" activeClassName="active">
              Галерея
            </NavLink>
          </li>
          <li>
            <NavLink to="suppliers" activeClassName="active">
              Поставщики
            </NavLink>
          </li>
          <li>
            <NavLink to="contacts" activeClassName="active">
              Контакты
            </NavLink>
          </li>
          <li>
            <a className="mainmenu__link" href="shopping_cart">
              Корзина
              <span id="pieses_goods" style={this.displayNone}></span>
            </a>
          </li>
        </ul>
        <a href="#" className="icon" onClick={this.openMenu}>
          <i className="fa fa-bars"></i>
        </a>
      </nav>
    );
  }
}

export default Navigator;
