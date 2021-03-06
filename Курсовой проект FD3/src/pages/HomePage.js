"use scrict";

import React from "react";
import { NavLink } from "react-router-dom";
import "..//css/HomePage.css";

class HomePage extends React.Component {
  textAlignCenter = {
    textAlign: "center",
  };
  render() {
    console.log("HomePage")
    return (
      <div className="HomePage">
        <div className="left_sidebar">
          <div className="engineering">
            <h3>Инжиниринг</h3>
            <ul>
              <li><NavLink to="/engineering_hydraulic_systems">Проектирование гидросистем</NavLink></li>
              <li><NavLink to="/engineering_power_pack">Проектирование гидростанций</NavLink></li>
              <li><NavLink to="/production_power_pack">Производство гидростанций</NavLink></li>
            </ul>
          </div>
          <div className="hydraulics_service">
            <h3>Сервис гидравлики</h3>
            <ul>
              <li><NavLink to="/hydraulics_diagnostics">Диагностика и ремонт</NavLink></li>
              <li><NavLink to="/service_center">Сервисный центр</NavLink></li>
              <li><NavLink to="/hydrofication">Гидрофикация</NavLink></li>
            </ul>
          </div>
          <div className="sale">
            <h3>Продажа</h3>
            <ul>
              <li><NavLink to="/pump-motor">Гидронасосы, гидромоторы</NavLink></li>
              <li><NavLink to="/valve">Гидроклапаны</NavLink></li>
              <li><NavLink to="/directional_valve">Гидрораспределители</NavLink></li>
              <li><NavLink to="/hydraulics_accessories">Аксессуары для гидравлики</NavLink></li>
              <li><NavLink to="/accumulator">Гидроаккумуляторы</NavLink></li>
              <li><NavLink to="/radiators">Теплообменники</NavLink></li>
              <li><NavLink to="/filters">Фильтры</NavLink></li>
            </ul>
          </div>
        </div>
        <div className="mobile_version">
          <h2>Компания &laquo;БПИ&raquo;</h2>
          <p>
            Мы рады приветствовать Вас на сайте компании &laquo;БПИ&raquo;. Наша
            компания имеет большой опыт в направлении промышленная гидравлика,
            мы разбираемся в том, что продаем и надеемся быть Вам полезными. Мы
            предлагает широкую номенклатуру гидравлических компонентов различных
            мировых производителей. Большое количество комплектующих находится
            на складе. Наши специалисты грамотно и качественно осуществляют
            подбор необходимых гидравлических компонентов по характеристикам,
            необходимых заказчику. Подбор аналогов других производителей.
          </p>
          <div>
            <h3>Основные направления деятельности нашей компании:</h3>
            <ul>
              <li>
                Выездная диагностика и ремонт гидроприводов любой сложности;
              </li>
              <li>Модернизация гидроприводов;</li>
              <li>Монтаж и демонтаж гидравлического оборудования;</li>
              <li>
                Изготовление и ремонт гидростанций по индивидуальным проектам;
              </li>
              <li>Изготовление и ремонт гидроцилиндров;</li>
              <li>Производство рукавов высокого давления;</li>
              <li>Ремонт, проверка и дозаправка гидропневмоаккумуляторов;</li>
              <li>Производство фильтровальных установок;</li>
              <li>Продажа воздушных, топливных и масляных фильтров;</li>
              <li>Продажа гидравлического оборудования и компонентов;</li>
            </ul>
          </div>
          <div>
            <h3>Наши преимущества:</h3>
            <ul>
              <li>Высококвалифицированный персонал;</li>
              <li>Профессиональный подход к каждому клиенту;</li>
              <li>Круглосуточная техническая помощь в Минске;</li>
              <li>Бесплатная консультация наших специалистов;</li>
              <li>Гарантия на все виды работ;</li>
            </ul>
          </div>
          <div className="clear"></div>
          <p>
            Мы предлагаем решение проблем в области обслуживания и ремонта
            гидравлики. Стремимся к долгосрочным партнерским отношениям.
          </p>
          <p className="slogan">
            Гарантируем высокое качество в кратчайшие сроки!!!
          </p>
        </div>
        <div className="desktop_version">
          <h2>Что МЫ можем сделать для Вашего бизнеса</h2>
          <div className="wrapper_card">
            <div className="card_about">
              <h3 style={this.textAlignCenter}>
                Компания БПИ специализируется на обслуживании и продаже
                гидравлических компонентов
              </h3>
              <p>
                Наша компания имеет большой опыт в направлении промышленная
                гидравлика, мы разбираемся в том, что продаем и надеемся быть
                Вам полезными. Мы предлагает широкую номенклатуру гидравлических
                компонентов различных мировых производителей. Большое количество
                комплектующих находится на складе. Наши специалисты грамотно и
                качественно осуществляют подбор необходимых гидравлических
                компонентов по характеристикам, необходимых заказчику. Подбор
                аналогов других производителей.
              </p>
            </div>
            <div className="card">
              <img src="src\img\card\9.jpg" alt="Проектирование гидросистем" />
              <div className="card_info">
                <p>Проектирование гидросистем</p>
                <span>
                  Компания БПИ предоставляет услуги по разработке
                  конструкторской документации на гидравлическое оборудование
                  любой сложности.
                </span>
                <NavLink to="engineering_hydraulic_systems" className="more">
                  Подробнее
                </NavLink>
              </div>
            </div>
            <div className="card">
              <img
                src="src\img\card\10.jpg"
                alt="Проектирование гидростанций"
              />
              <div className="card_info">
                <p>Проектирование гидростанций</p>
                <span>
                  Компания БПИ производит линейку гидравлических насосных
                  станций для применения в различных областях промышленности.
                </span>
                <NavLink to="engineering_power_pack" className="more">
                  Подробнее
                </NavLink>
              </div>
            </div>
            <div className="card">
              <img src="src\img\card\11.jpg" alt="Производство гидростанций" />
              <div className="card_info">
                <p>Производство гидростанций</p>
                <span>
                  C 2012 на базе БПИ было запущено производство гидростанций. За
                  неполные четыре года мы спроектировали, произвели и поставили
                  нашим клиентам более 800 гидростанций.
                </span>
                <NavLink to="production_power_pack" className="more">
                  Подробнее
                </NavLink>
              </div>
            </div>
            <div className="card">
              <img
                src="src\img\card\12.jpg"
                alt="Диагностика и ремонт гидравлики"
              />
              <div className="card_info">
                <p>Диагностика и ремонт гидравлики</p>
                <span>
                  Работа по диагностике производится в нашем сервисном центре
                  или непосредственно на месте поломки (территория заказчика).
                </span>
                <a href="hydraulics_diagnostics" className="more">
                  Подробнее
                </a>
              </div>
            </div>
            <div className="card">
              <img src="src\img\card\13.jpg" alt="Сервисный центр" />
              <div className="card_info">
                <p>Сервисный центр</p>
                <span>
                  Сервисный отдел компании БПИ был организован в 2012 году с
                  целью удовлетворения требований заказчиков по ремонту и
                  обслуживанию гидроагрегатов в гарантийный и послегарантийный
                  периоды.
                </span>
                <a href="service_center" className="more">
                  Подробнее
                </a>
              </div>
            </div>
            <div className="card">
              <img src="src\img\card\14.jpg" alt="Гидрофикация" />
              <div className="card_info">
                <p>Гидрофикация</p>
                <span>
                  Хотите расширить функциональные возможности вашей грузовой
                  автомобильной техники? Тогда вам подойдет предлагаемая нами
                  услуга «гидрофикация грузовых автомобилей
                </span>
                <a href="hydrofication" className="more">
                  Подробнее
                </a>
              </div>
            </div>
            <div className="card">
              <img src="src\img\card\2.jpg" alt="Гидронасосы и гидромоторы" />
              <div className="card_info">
                <p>Гидронасосы и гидромоторы</p>
                <span>
                  БПИ предлагает гидравлические насосы и моторы со склада и под
                  заказ различных видов и производителей.
                </span>
                <a href="pump_motor" className="more">
                  Подробнее
                </a>
              </div>
            </div>
            <div className="card">
              <img src="src\img\card\3.jpg" alt="Гидроклапаны" />
              <div className="card_info">
                <p>Гидроклапаны</p>
                <span>
                  Предохранительные клапана применяются в гидросистемах для
                  ограничения рабочего давления до определенной, заранее
                  заданной величины.
                </span>
                <a href="valve" className="more">
                  Подробнее
                </a>
              </div>
            </div>
            <div className="card">
              <img src="src\img\card\7.jpg" alt="Гидрораспределители" />
              <div className="card_info">
                <p>Гидрораспределители</p>
                <span>
                  Гидрораспределители служат для управления запуском, остановом
                  и изменением направления потока рабочей жидкости под
                  давлением.
                </span>
                <a href="directional_valve" className="more">
                  Подробнее
                </a>
              </div>
            </div>
            <div className="card">
              <img src="src\img\card\1.png" alt="Аксессуары для гидравлики" />
              <div className="card_info">
                <p>Аксессуары для гидравлики</p>
                <span>
                  Мы поставляем в комплексе гидравлические аксессуары без
                  которых гидросистема не может быть завершена
                </span>
                <a href="hydraulics_accessories" className="more">
                  Подробнее
                </a>
              </div>
            </div>
            <div className="card">
              <img src="src\img\card\8.png" alt="Гидроаккумуляторы" />
              <div className="card_info">
                <p>Гидроаккумуляторы</p>
                <span>
                  Гидроаккумуляторы -это устройства, которые сохраняют энергию в
                  виде жидкости, находящейся под давлением.
                </span>
                <a href="accumulator" className="more">
                  Подробнее
                </a>
              </div>
            </div>
            <div className="card">
              <img src="src\img\card\5.jpg" alt="Фильтры" />
              <div className="card_info">
                <p>Фильтры</p>
                <span>
                  Мы предлагаем со склада и под заказ фильтрэлементы
                  оригинальные и альтернативные
                </span>
                <a href="filters" className="more">
                  Подробнее
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
