"use strict";
import React from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import "..//css/Header.css";

class Header extends React.Component {
  colorBlack = {
    color: "black",
  };

  render() {
    const settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <header>
        <div className="header_slider">
          <div className="slider">
            <Slider {...settings}>
              <div>
                <img
                  src={
                    "../src/img/header_slider/hydraulic-accumulators-slide_1200_300_80.jpg"
                  }
                  alt="1"
                />
              </div>
              <div>
                <img
                  src={
                    "../src/img/header_slider/hydraulic-hose-slide_1200_300_80.jpg"
                  }
                  alt="2"
                />
              </div>
              <div>
                <img
                  src={
                    "../src/img/header_slider/hydraulic-power-pack-slide_1200_300_80.jpg"
                  }
                  alt="3"
                />
              </div>
            </Slider>
          </div>
        </div>
        <div className="header_left_section">
          <div className="headerLogo">
            <h1>
              <NavLink to="/" activeClassName="">
                БПИ
              </NavLink>
            </h1>
          </div>
          <div className="header__activity_company">
            <h3>Промышленная гидравлика</h3>
            <p>Инжиниринг, сервис, продажи</p>
          </div>

          <div className="header__working_hours">
            <p>
              <strong>Время работы:</strong>
            </p>
            <p>
              8 <sup>00</sup>&ndash;16 <sup>45</sup>
            </p>
            <p>Суббота, воскресенье: выходной</p>
          </div>

          <div className="header__address_company">
            <p>г. Минск, ул. Бехтерева, 5</p>

            <p>
              <a href="tel:+375172222222">
                +375 17 <strong>222-22-22</strong>
                <img src="./src/img/index/t-gor.png" alt="t-gor" />
              </a>
            </p>

            <p>
              <a href="tel:+375297777777">
                +375 29 <strong>777-77-77</strong>
                <img src="./src/img/index/t-mts2.png" alt="t-mts" />
              </a>
            </p>

            <p>
              <a href="tel:+375446666666">
                +375 44 <strong>666-66-66</strong>
                <img src="./src/img/index/t-vel2.png" alt="t-vel" />
              </a>
            </p>
            <p>
              <strong>
                <a href="mailto:hydro@bpi.by" style={this.colorBlack}>
                  hydro@bpi.by
                  <img src="./src/img/index/email.png" alt="email" />
                </a>
              </strong>
            </p>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
