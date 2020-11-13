"use scrict";

import React from "react";
import "../css/ProductionPowerPack.css";

class ProductinPowerPack extends React.Component {
  render() {
    return (
      <div className="Production_power_pack">
        <div>
          <h2>Производство гидростанций</h2>
          <div className="wrapper_preview">
            <a href="/" className="preview">
              <img
                src="src/img/production_power_pack/min-150x150.png"
                alt="Минигидростанции"
              />
              <span className="info">Минигидростанции</span>
            </a>
            <a href="/" className="preview">
              <img
                src="src/img/production_power_pack/standart-150x150.jpg"
                alt="Стандартные гидростанции"
              />
              <span className="info">Стандартные гидростанции</span>
            </a>
            <a href="/" className="preview">
              <img
                src="src/img/production_power_pack/special-150x150.jpg"
                alt="Специальные гидравлические станции"
              />
              <span className="info">Специальные гидравлические станции</span>
            </a>
            <a href="/" className="preview">
              <img
                src="src/img/production_power_pack/487_big-150x150.jpg"
                alt="Реализованные проекты"
              />
              <span className="info">Реализованные проекты</span>
            </a>
          </div>
          <p>
            C 2012 на базе БПИ было запущено производство гидростанций. За
            неполные четыре года мы спроектировали, произвели и поставили нашим
            клиентам более 800 гидростанций.
          </p>
          <p>
            В подразделении имеется выездная бригада по ремонту гидростанций и
            обслуживанию гидротехники, что позволяет проводить ремонтные работы
            и обслуживание гидравлических станций и крупногабаритных механизмов
            непосредственно на территории заказчика. Филиалы нашей компании
            расположены в 19 городах Республики Беларусь (Витебск, Брест,
            Гродно, Гомель, Могилев, Молодечно, Барановичи, Мозырь, Пинск,
            Бобруйск, Полоцк, Солигорск ), что позволяет в максимально короткие
            сроки осуществлять доставку необходимых запасных частей нашим
            клиентам. БПИ будет радо видеть и Ваше предприятие среди наших
            клиентов и партнеров.
          </p>
          <h3>Маслостанция. Основные конструктивные элементы.</h3>
          <div className="gidrostancia">
            <img
              src="src/img/production_power_pack/gidrostancia.jpg"
              alt="гидростанция"
            />
            <ul>
              <li>Гидробак</li>
              <li>Насос шестеренный</li>
              <li>Электродвигатель</li>
              <li>Панель с гидравлической аппаратурой</li>
              <li>Входной фильтр</li>
              <li>Выходной фильтр</li>
              <li>Визуальный уровнемер</li>
            </ul>
          </div>
          <div className="clear"></div>
        </div>
      </div>
    );
  }
}

export default ProductinPowerPack;
