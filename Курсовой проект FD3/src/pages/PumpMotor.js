"use scrict";

import React from "react";
import bdPumpMotor from "../../bdPumpMotor";
import PreviewItem from "../components/PreviewItem";
import "../css/PumpMotor.css";

class PumpMotor extends React.Component {
  render() {
    let viewCategory = bdPumpMotor.map((element, item) => {
      return <PreviewItem key={item} name={element.name} link={element.link + "/" + element.item + "/1"} src={element.src} />;
    });
    return (
      <div className="Pump_motor" >
        <div>
          <h2>Гидронасосы и гидромоторы</h2>
          <div className="wrapper_preview">
            {viewCategory}
          </div>
          <p>
            БПИ предлагает гидравлические насосы и моторы со склада и под заказ
            различных видов и производителей.
          </p>
          <ul>
            <li>Шестеренные по европейского стандарту Gr0, Gr1, Gr2, Gr3</li>
            <li>Шестеренные многосекционные, специальные</li>
            <li>Аксиально-поршневые нерегулируемые и регулируемые</li>
            <li>Пластинчатые и радиально-поршневые</li>
            <li>Героторные</li>
            <li>Ручные насосы</li>
          </ul>
          <p>
            Если не удается найти интересующее Вас изделие, позвоните в наш офис
            и наши инженеры подскажут где именно находится интересующий Вас
            раздел каталога.
          </p>
          <h3>Подбор гидравлического насоса</h3>
          <p>
            Также мы можем провести подбор аналога и замену гидравлического
            оборудования других производителей. Просто отправьте нам заявку с
            кодом изделия Вашего производителя, которое Вы хотели бы заменить, и
            наши инженеры оперативно свяжутся с Вами и предложат замену из нашей
            номенклатуры.
          </p>
        </div>
      </div>
    );
  }
}

export default PumpMotor;
