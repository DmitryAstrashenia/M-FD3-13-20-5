"use scrict";

import React from "react";
import "..//css/Contacts.css";

class Contact extends React.Component {
  branchArr = [
    {
      city: "Брест",
      adress: "224001 г. Брест, ул. О.Кошевого, 3",
      tgor: "+375 162 45-22-22",
      tmts: "+375 29 777-77-77",
      tvel: "+375 44 666-66-66",
    },

    {
      city: "Витебск",
      adress: "210038 г. Витебск, ул. Терешковой, 10",
      tgor: "+375 212 67-22-22",
      tmts: "+375 29 777-77-77",
      tvel: "+375 44 666-66-66",
    },

    {
      city: "Гомель",
      adress: "246067, г. Гомель, ул. Борисенко, 4, корп. 2",
      tgor: "+375 232 43-22-22",
      tmts: "+375 29 777-77-77",
      tvel: "+375 44 666-66-66",
    },

    {
      city: "Гродно",
      adress: "230001, г.Гродно, ул. Сокольская, 53",
      tgor: "+375 152 53-22-22",
      tmts: "+375 29 777-77-77",
      tvel: "+375 44 666-66-66",
    },

    {
      city: "Могилев",
      adress: "212008, г. Могилев, 4-й переулок Мечникова, 3",
      tgor: "+375 222 72-22-22",
      tmts: "+375 29 777-77-77",
      tvel: "+375 44 666-66-66",
    },

    {
      city: "Барановичи",
      adress: "225413, г. Барановичи, ул. Слонимское шоссе, 52",
      tgor: "+375 163 41-22-22",
      tmts: "+375 29 777-77-77",
      tvel: "+375 44 666-66-66",
    },

    {
      city: "Солигорск",
      adress: "Солигорский район, д.Кулаки, ул. Центральная, 55а",
      tgor: "+375 174 22-22-22",
      tmts: "+375 29 777-77-77",
      tvel: "+375 44 666-66-66",
    },

    {
      city: "Бобруйск",
      adress: "213800, г. Бобруйск, военный городок №2, Ленгородок, пом. 2/247",
      tgor: "+375 225 22-22-22",
      tmts: "+375 29 777-77-77",
      tvel: "+375 44 666-66-66",
    },

    {
      city: "Борисов",
      adress: "222120, г. Борисов, ул. Демина, 6ж",
      tgor: "+375 177 942-955",
      tmts: "+375 29 777-77-77",
      tvel: "+375 44 666-66-66",
    },

    {
      city: "Жлобин",
      adress: "247210, г.Жлобин, ул. Шоссейная, 136",
      tgor: "+375 2334 222-22",
      tmts: "+375 29 777-77-77",
      tvel: "+375 44 666-66-66",
    },

    {
      city: "Кричев",
      adress: "213500, г.Кричев ул. Бирюзова д.12",
      tgor: "+375 2241 22-22",
      tmts: "+375 29 777-77-77",
      tvel: "+375 44 666-66-66",
    },

    {
      city: "Лида",
      adress: "231300, г. Лида, ул. Химиков, 5А корп.2",
      tgor: "+375 154 22-22-22",
      tmts: "+375 29 777-77-77",
      tvel: "+375 44 666-66-66",
    },

    {
      city: "Мозырь",
      adress: "247760 г.Мозырь, ул. Иваненко, 8А",
      tgor: "+375 236 36-22-22",
      tmts: "+375 29 777-77-77",
      tvel: "+375 44 666-66-66",
    },

    {
      city: "Молодечно",
      adress: "222310, г.Молодечно, ул. Виленская, 35",
      tgor: "+375 176 72-22-22",
      tmts: "+375 29 777-77-77",
      tvel: "+375 44 666-66-66",
    },

    {
      city: "Орша",
      adress: "211391, г.Орша, ул. Белинского, 4",
      tgor: "+375 2161 5-22-22",
      tmts: "+375 29 777-77-77",
      tvel: "+375 44 666-66-66",
    },

    {
      city: "Пинск",
      adress: "225710, г.Пинск, ул. Индустриальная, 4Е",
      tgor: "+375 165 22-22-22",
      tmts: "+375 29 777-77-77",
      tvel: "+375 44 666-66-66",
    },

    {
      city: "Полоцк",
      adress: "211401, г.Полоцк, проезд Октябрьский, 9",
      tgor: "+375 214 70-22-22",
      tmts: "+375 29 777-77-77",
      tvel: "+375 44 666-66-66",
    },

    {
      city: "Слоним",
      adress: "231795, г.Слоним ул. Советская, 58 В",
      tgor: "+375 1562 22-22",
      tmts: "+375 29 777-77-77",
      tvel: "+375 44 666-66-66",
    },
  ];

  makeIframe = () => {
    return {
      __html: ` <div class="map_desktop">
      <div style="position:relative;overflow:hidden;">
        <a
          href="https://yandex.by/maps?utm_medium=mapframe&utm_source=maps"
          style="color:#eee;font-size:12px;position:absolute;top:0px;"
        >
          Яндекс.Карты
        </a>
        <a
          href="https://yandex.by/maps/?from=api-maps&ll=28.619122%2C53.327270&mode=usermaps&origin=jsapi_2_1_76&um=constructor%3A48b4f276b95f02eaf24988110802732eb866d8db85119aceda749b720515c833&utm_medium=mapframe&utm_source=maps&z=6"
          style="color:#eee;font-size:12px;position:absolute;top:14px;"
        >
          Яндекс.Карты — поиск мест и адресов, городской транспорт
        </a>
        <iframe
          src="https://yandex.by/map-widget/v1/-/CCQhQJFcdD"
          width="450"
          height="400"
          frameborder="1"
          allowfullscreen="true"
          style="position:relative; border:none;"
        ></iframe>
      </div>
    </div>

    <div class="map_mob">
      <div style="position:relative;overflow:hidden;">
        <a
          href="https://yandex.by/maps?utm_medium=mapframe&utm_source=maps"
          style="color:#eee;font-size:12px;position:absolute;top:0px;"
        >
          Яндекс.Карты
        </a>
        <a
          href="https://yandex.by/maps/?from=api-maps&ll=28.619122%2C53.327270&mode=usermaps&origin=jsapi_2_1_76&um=constructor%3A48b4f276b95f02eaf24988110802732eb866d8db85119aceda749b720515c833&utm_medium=mapframe&utm_source=maps&z=6"
          style="color:#eee;font-size:12px;position:absolute;top:14px;"
        >
          Яндекс.Карты — поиск мест и адресов, городской транспорт
        </a>
        <iframe
          src="https://yandex.by/map-widget/v1/-/CCQhQJFcdD"
          width="320"
          height="400"
          frameborder="1"
          allowfullscreen="true"
          style="position:relative; border:none;"
        ></iframe>
      </div>
    </div>`,
    };
  };

  render() {
    let branchArrText = [];
    console.log("Contact")
    this.branchArr.forEach((element, index) => {
      let branchJSX = (
        <div className="branch" key={index}>
          <h3>{element.city}</h3>
          <p>{element.adress}</p>
          <p>Телефоны:</p>
          <p>
            {element.tgor}
            <img src="src/img/index/t-gor.png" alt="t-gor" />
          </p>
          <p>
            {element.tmts}
            <img src="src/img/index/t-mts2.png" alt="t-mts" />
          </p>
          <p>
            {element.tvel}
            <img src="src/img/index/t-vel2.png" alt="t-vel" />
          </p>
          <p>
            <strong>Время работы:</strong>
          </p>
          <p>
            8 <sup>00</sup>&ndash;16 <sup>45</sup>{" "}
          </p>
          <p>Суббота, воскресенье: выходной</p>
        </div>
      );
      branchArrText.push(branchJSX);
    });

    return (
      <div className="Contacts">
        <h2>Контакты</h2>
        <div className="wrapper_contacts">
          <div className="main_office">
            <h3>Головной офис</h3>
            <p>220026, г.Минск ул. Бехтерева, 5</p>
            <p>Телефоны:</p>
            <p>
              +375 17 222-22-22{" "}
              <img src="src/img/index/t-gor.png" alt="t-gor" />
            </p>
            <p>
              +375 29 777-77-77{" "}
              <img src="src/img/index/t-mts2.png" alt="t-mts" />
            </p>
            <p>
              +375 44 666-66-66{" "}
              <img src="src/img/index/t-vel2.png" alt="t-vel" />
            </p>
            <p>
              <a href="mailto:hydro@bpi.by">hydro@bpi.by </a>
              <img src="src/img/index/email.png" alt="email" />
            </p>
            <p>
              <strong>Время работы:</strong>
            </p>
            <p>
              8 <sup>00</sup>&ndash;16 <sup>45</sup>{" "}
            </p>
            <p>Суббота, воскресенье: выходной</p>
          </div>
          <div className="map">
            <div dangerouslySetInnerHTML={this.makeIframe()} />
          </div>

          {branchArrText}

          <div className="wpapper_feedback">
            <h2>Отправить запрос</h2>
            <p>Отправьте запрос, используя предложенную ниже форму:</p>
            <form action="#" name="feedback" className="feedback">
              <div className="feedback-group ">
                <label className="feedback-label">
                  <span>Имя:</span>
                  <input
                    className="feedback-input"
                    type="text"
                    placeholder="Введите Ваше имя"
                  />
                  <i className="far fa-user" />
                </label>

                <label className="feedback-label">
                  <span>Email:</span>
                  <input
                    className="feedback-input"
                    type="email"
                    placeholder="Введите адрес Вашей почты"
                  />
                  <i className="far fa-envelope" />
                </label>

                <label className="feedback-label">
                  <span>Телефон:</span>
                  <input
                    className="feedback-input"
                    type="tel"
                    placeholder="Введите номер телефона"
                  />
                  <i className="fas fa-mobile-alt" />
                </label>

                <label className="feedback-label">
                  <span>Филиал:</span>
                  <i className="fas fa-house-damage" />
                  <select className="feedback-input">
                    <option value="1">Минск</option>
                    <option value="2">Брест</option>
                    <option value="3">Витебск</option>
                    <option value="4">Гомель</option>
                    <option value="5">Гродно</option>
                    <option value="6">Могилев</option>
                    <option value="7">Барановичи</option>
                    <option value="8">Солигорск</option>
                    <option value="9">Бобруйск</option>
                    <option value="10">Борисов</option>
                    <option value="11">Жлобин</option>
                    <option value="12">Кричев</option>
                    <option value="13">Лида</option>
                    <option value="14">Мозырь</option>
                    <option value="15">Молодечно</option>
                    <option value="16">Орша</option>
                    <option value="17">Пинск</option>
                    <option value="18">Полоцк</option>
                    <option value="19">Слоним</option>
                  </select>
                </label>
                <label className="feedback-label">
                  <span>Сообщение:</span>
                  <textarea
                    className="feedback-textarea"
                    placeholder="Здравствуйте, БПИ! 
    меня интересует... 
    хочу купить, но хотел бы уточнить...
    ( оставьте запрос в удобной для вас форме )"
                  ></textarea>
                  <i className="fas fa-pen-alt" />
                </label>
                <label className="feedback-label">
                  <input className="feedback-button" type="submit" />
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
