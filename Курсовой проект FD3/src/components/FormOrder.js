"use scrict";

import React from "react";
import validate from "./function/validate";
import { default as isoFetch } from "isomorphic-fetch";
import "./FormOrder.css";

class FormOrder extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
  }

  soloValidate = (e) => {
    let input = document.querySelector(`#${e.target.id}`);
    let div = document.querySelector(`.${e.target.id}Err`);
    if (validate(e.target.id, e.target.value)) {
      input.classList.remove("err");
      div.classList.add("invisible");
    } else {
      input.classList.add("err");
      div.classList.remove("invisible");
    }
  };

  allValidate = () => {
    let form = document.querySelector("#form_cart");
    let inputs = form.querySelectorAll("input");
    let access = true;
    inputs.forEach((element) => {
      if (!validate(element.id, element.value)) {
        let div = document.querySelector(`.${element.id}Err`);
        element.classList.add("err");
        div.classList.remove("invisible");
        access = false;
      }
    });

    if (access) {
      this.setOrder();
    } else {
      document.querySelector(".err").focus();
    }
  };

  setOrder = () => {
    let cartOrder = JSON.parse(localStorage.getItem("cartOrder"));
    let allGoods = JSON.parse(localStorage.getItem("allGoods"));
    let emailArr = {};
    for (let key in cartOrder) {
      let temp = {};
      temp.name = allGoods[key]["name"];
      temp.pieces = cartOrder[key];
      temp.price = allGoods[key]["price"];
      temp.articul = allGoods[key]["articul"];
      emailArr[key] = temp;
    }
    if (
      JSON.parse(localStorage.getItem("cartOrder")) &&
      Object.keys(JSON.parse(localStorage.getItem("cartOrder"))).length
    ) {
      let data = {
        text: document.getElementById("customer-text").value,
        cart: emailArr,
      };
      let form = document.querySelector("#form_cart");
      let inputs = form.querySelectorAll("input");
      inputs.forEach((element) => {
        data[element.id] = element.value;
      });
      isoFetch("../../mail/mail.php", {
        method: "POST",
        body: JSON.stringify(data),
      }).then(function (res) {
        if (res) {
          inputs.forEach((element) => {
            element.value = "";
          });
          alert("Заказ отправлен");
        } else {
          alert("Ошибка заказа");
        }
      });
    } else {
      alert("Корзина пуста!");
    }
  };

  render() {
    return (
      <div className="wpapper_feedback">
        <h2 className="center">Форма заказа</h2>
        <p className="center">
          Для заказа заполните форму и нажмите отправить:
        </p>
        <form id="form_cart" className="feedback" onSubmit={this.handleSubmit}>
          <div className="feedback-group ">
            <label className="feedback-label">
              <span>Имя:</span>
              <input
                className="feedback-input"
                type="text"
                id="user"
                placeholder="Введите Ваше имя"
                onChange={this.soloValidate}
              />
              <div className="err-message userErr invisible">Введите ФИО</div>
              <i className="far fa-user"></i>
            </label>

            <label className="feedback-label">
              <span>Email:</span>
              <input
                className="feedback-input"
                type="email"
                id="email"
                placeholder="Введите адрес Вашей почты"
                onChange={this.soloValidate}
              />
              <div className="err-message emailErr invisible">
                Введите почту для связи
              </div>
              <i className="far fa-envelope" />
            </label>

            <label className="feedback-label">
              <span>Телефон:</span>
              <input
                className="feedback-input"
                type="tel"
                id="tel"
                placeholder="Введите номер телефона"
                onChange={this.soloValidate}
              />
              <div className="err-message telErr invisible">
                Введите номер телефона
              </div>
              <i className="fas fa-mobile-alt" />
            </label>
            <label className="feedback-label">
              <span>Комментарий:</span>
              <textarea
                className="feedback-textarea"
                id="customer-text"
                placeholder="Здравствуйте, БПИ!"
              />
              <i className="fas fa-pen-alt" />
            </label>
            <button
              className="feedback-button"
              type="button"
              onClick={this.allValidate}
            >
              Отправить
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default FormOrder;
