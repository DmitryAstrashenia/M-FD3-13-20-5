"use strict";

import React from "react";
import renderer from "react-test-renderer";
import Cart from "../src/components/Cart";

let cardOrder = { 10002: 2 };
let allGoods = {
  10001: {
    articul: "101",
    name: "20C6.2X006 ",
    img:
      "https://dimon713.ru/src/img/gear_pump_hydra_pack/Bezimyannij-150x150.png",
    price: "121",
    pieces: "0",
  },
  10002: {
    articul: "102",
    name: "20C8.2X006",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQECRVdCxETE-6-aAflOsCwbu6pVz35Tt40cg&usqp=CAU",
    price: "125",
    pieces: "5",
  },
  10003: {
    articul: "103",
    name: "20С12X006",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSWCPVCG1nbX23LZ-Vm4G6hUEM2Qnjjcw6tKQ&usqp=CAU",
    price: "180",
    pieces: "7",
  },
  10004: {
    articul: "104",
    name: "20С12X006",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxRvssQMHmGCy7eg_EtkKc3V59AZ05xXg9JA&usqp=CAU",
    price: "195",
    pieces: "0",
  },
  10005: {
    articul: "105",
    name: "20С12X007",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0cg5OlK3bFKZhxUVvT5WGS4H8HaRSVF9ICQ&usqp=CAU",
    price: "196",
    pieces: "2",
  },
  10006: {
    articul: "106",
    name: "20С12X008",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcStf6OmuyN1Zif_hGDVWvlQoNO0RJXxk8uLQw&usqp=CAU",
    price: "197",
    pieces: "10",
  },
  10007: {
    articul: "107",
    name: "20С12X009",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9aH7ASep3UscyxbDEFlnUuk73mZD4ec7vDQ&usqp=CAU",
    price: "198",
    pieces: "3",
  },
  10008: {
    articul: "108",
    name: "20С12X010",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTB3-lMQUnQ5ZTcJdDn3-Y-3j9ojcyl59WSJQ&usqp=CAU",
    price: "199",
    pieces: "3",
  },
  10009: {
    articul: "109",
    name: "20С12X011",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTB3-lMQUnQ5ZTcJdDn3-Y-3j9ojcyl59WSJQ&usqp=CAU",
    price: "200",
    pieces: "4",
  },
  10010: {
    articul: "110",
    name: "20С12X012",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9aH7ASep3UscyxbDEFlnUuk73mZD4ec7vDQ&usqp=CAU",
    price: "201",
    pieces: "8",
  },
  10011: {
    articul: "111",
    name: "20С12X013",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcStf6OmuyN1Zif_hGDVWvlQoNO0RJXxk8uLQw&usqp=CAU",
    price: "202",
    pieces: "0",
  },
  10012: {
    articul: "112",
    name: "20С12X014",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxRvssQMHmGCy7eg_EtkKc3V59AZ05xXg9JA&usqp=CAU",
    price: "203",
    pieces: "0",
  },
  10013: {
    articul: "113",
    name: "20С12X015",
    img:
      "https://dimon713.ru/src/img/gear_pump_hydra_pack/Bezimyannij-150x150.png",
    price: "204",
    pieces: "1",
  },
  10014: {
    articul: "114",
    name: "20С12X016",
    img:
      "https://dimon713.ru/src/img/gear_pump_hydra_pack/Bezimyannij-150x150.png",
    price: "205",
    pieces: "1",
  },
  10015: {
    articul: "115",
    name: "20С12X017",
    img:
      "https://dimon713.ru/src/img/gear_pump_hydra_pack/Bezimyannij-150x150.png",
    price: "206",
    pieces: "2",
  },
  10016: {
    articul: "116",
    name: "20С12X018",
    img:
      "https://dimon713.ru/src/img/gear_pump_hydra_pack/Bezimyannij-150x150.png",
    price: "207",
    pieces: "3",
  },
  10017: {
    articul: "117",
    name: "20С12X019",
    img:
      "https://dimon713.ru/src/img/gear_pump_hydra_pack/Bezimyannij-150x150.png",
    price: "208",
    pieces: "5",
  },
  10018: {
    articul: "118",
    name: "20С12X020",
    img:
      "https://dimon713.ru/src/img/gear_pump_hydra_pack/Bezimyannij-150x150.png",
    price: "209",
    pieces: "4",
  },
  10019: {
    articul: "119",
    name: "20С12X021",
    img:
      "https://dimon713.ru/src/img/gear_pump_hydra_pack/Bezimyannij-150x150.png",
    price: "210",
    pieces: "5",
  },
  10020: {
    articul: "120",
    name: "20С12X022",
    img:
      "https://dimon713.ru/src/img/gear_pump_hydra_pack/Bezimyannij-150x150.png",
    price: "211",
    pieces: "5",
  },
  10021: {
    articul: "121",
    name: "20С12X023",
    img:
      "https://dimon713.ru/src/img/gear_pump_hydra_pack/Bezimyannij-150x150.png",
    price: "212",
    pieces: "5",
  },
  10022: {
    articul: "122",
    name: "20С12X024",
    img:
      "https://dimon713.ru/src/img/gear_pump_hydra_pack/Bezimyannij-150x150.png",
    price: "213",
    pieces: "5",
  },
  10023: {
    articul: "123",
    name: "20С12X025",
    img:
      "https://dimon713.ru/src/img/gear_pump_hydra_pack/Bezimyannij-150x150.png",
    price: "214",
    pieces: "5",
  },
  10024: {
    articul: "124",
    name: "20С12X026",
    img:
      "https://dimon713.ru/src/img/gear_pump_hydra_pack/Bezimyannij-150x150.png",
    price: "215",
    pieces: "5",
  },
  10025: {
    articul: "125",
    name: "20С12X027",
    img:
      "https://dimon713.ru/src/img/gear_pump_hydra_pack/Bezimyannij-150x150.png",
    price: "216",
    pieces: "5",
  },
  10026: {
    articul: "126",
    name: "20С12X028",
    img:
      "https://dimon713.ru/src/img/gear_pump_hydra_pack/Bezimyannij-150x150.png",
    price: "217",
    pieces: "5",
  },
  10027: {
    articul: "127",
    name: "20С12X029",
    img:
      "https://dimon713.ru/src/img/gear_pump_hydra_pack/Bezimyannij-150x150.png",
    price: "218",
    pieces: "5",
  },
  10028: {
    articul: "128",
    name: "20С12X030",
    img:
      "https://dimon713.ru/src/img/gear_pump_hydra_pack/Bezimyannij-150x150.png",
    price: "219",
    pieces: "5",
  },
  10029: {
    articul: "129",
    name: "20С12X031",
    img:
      "https://dimon713.ru/src/img/gear_pump_hydra_pack/Bezimyannij-150x150.png",
    price: "220",
    pieces: "5",
  },
  10030: {
    articul: "130",
    name: "20С12X032",
    img:
      "https://dimon713.ru/src/img/gear_pump_hydra_pack/Bezimyannij-150x150.png",
    price: "221",
    pieces: "5",
  },
  10031: {
    articul: "131",
    name: "20С12X033",
    img:
      "https://dimon713.ru/src/img/gear_pump_hydra_pack/Bezimyannij-150x150.png",
    price: "222",
    pieces: "5",
  },
  10032: {
    articul: "132",
    name: "20С12X034",
    img:
      "https://dimon713.ru/src/img/gear_pump_hydra_pack/Bezimyannij-150x150.png",
    price: "223",
    pieces: "5",
  },
  10033: {
    articul: "133",
    name: "20С12X035",
    img:
      "https://dimon713.ru/src/img/gear_pump_hydra_pack/Bezimyannij-150x150.png",
    price: "224",
    pieces: "5",
  },
  10034: {
    articul: "134",
    name: "20С12X036",
    img:
      "https://dimon713.ru/src/img/gear_pump_hydra_pack/Bezimyannij-150x150.png",
    price: "225",
    pieces: "5",
  },
  10035: {
    articul: "135",
    name: "20С12X037",
    img:
      "https://dimon713.ru/src/img/gear_pump_hydra_pack/Bezimyannij-150x150.png",
    price: "226",
    pieces: "5",
  },
  10036: {
    articul: "136",
    name: "20С12X038",
    img:
      "https://dimon713.ru/src/img/gear_pump_hydra_pack/Bezimyannij-150x150.png",
    price: "227",
    pieces: "5",
  },
  10037: {
    articul: "137",
    name: "20С12X039",
    img:
      "https://dimon713.ru/src/img/gear_pump_hydra_pack/Bezimyannij-150x150.png",
    price: "228",
    pieces: "5",
  },
  10038: {
    articul: "138",
    name: "20С12X040",
    img:
      "https://dimon713.ru/src/img/gear_pump_hydra_pack/Bezimyannij-150x150.png",
    price: "229",
    pieces: "5",
  },
  10039: {
    articul: "139",
    name: "20С12X041",
    img:
      "https://dimon713.ru/src/img/gear_pump_hydra_pack/Bezimyannij-150x150.png",
    price: "230",
    pieces: "5",
  },
  10040: {
    articul: "140",
    name: "20С12X042",
    img:
      "https://dimon713.ru/src/img/gear_pump_hydra_pack/Bezimyannij-150x150.png",
    price: "231",
    pieces: "5",
  },
  10041: {
    articul: "141",
    name: "20С12X043",
    img:
      "https://dimon713.ru/src/img/gear_pump_hydra_pack/Bezimyannij-150x150.png",
    price: "232",
    pieces: "5",
  },
  10042: {
    articul: "142",
    name: "20С12X044",
    img:
      "https://dimon713.ru/src/img/gear_pump_hydra_pack/Bezimyannij-150x150.png",
    price: "233",
    pieces: "5",
  },
  10043: {
    articul: "143",
    name: "20С12X045",
    img:
      "https://dimon713.ru/src/img/gear_pump_hydra_pack/Bezimyannij-150x150.png",
    price: "234",
    pieces: "5",
  },
  10044: {
    articul: "144",
    name: "20С12X046",
    img:
      "https://dimon713.ru/src/img/gear_pump_hydra_pack/Bezimyannij-150x150.png",
    price: "235",
    pieces: "5",
  },
  10045: {
    articul: "145",
    name: "20С12X047",
    img:
      "https://dimon713.ru/src/img/gear_pump_hydra_pack/Bezimyannij-150x150.png",
    price: "236",
    pieces: "5",
  },
  10046: {
    articul: "146",
    name: "20С12X048",
    img:
      "https://dimon713.ru/src/img/gear_pump_hydra_pack/Bezimyannij-150x150.png",
    price: "237",
    pieces: "5",
  },
  10047: {
    articul: "147",
    name: "20С12X049",
    img:
      "https://dimon713.ru/src/img/gear_pump_hydra_pack/Bezimyannij-150x150.png",
    price: "238",
    pieces: "5",
  },
  10048: {
    articul: "148",
    name: "20С12X050",
    img:
      "https://dimon713.ru/src/img/gear_pump_hydra_pack/Bezimyannij-150x150.png",
    price: "239",
    pieces: "5",
  },
  20001: {
    articul: "201",
    name: "20C6.2X006 ",
    img:
      "https://dimon713.ru//src/img/pump_motor/828917111_w640_h640_a2fo_br6x_main__to_rgb.big-150x150.jpg",
    price: "120",
    pieces: "0",
  },
  20002: {
    articul: "202",
    name: "20C8.2X006",
    img:
      "https://dimon713.ru//src/img/pump_motor/828917111_w640_h640_a2fo_br6x_main__to_rgb.big-150x150.jpg",
    price: "125",
    pieces: "4",
  },
  20003: {
    articul: "203",
    name: "20C10X006",
    img:
      "https://dimon713.ru//src/img/pump_motor/828917111_w640_h640_a2fo_br6x_main__to_rgb.big-150x150.jpg",
    price: "170",
    pieces: "2",
  },
  20004: {
    articul: "204",
    name: "20C12X006",
    img:
      "https://dimon713.ru//src/img/pump_motor/828917111_w640_h640_a2fo_br6x_main__to_rgb.big-150x150.jpg",
    price: "175",
    pieces: "6",
  },
};

localStorage.setItem("cartOrder", JSON.stringify(cardOrder));
localStorage.setItem("allGoods", JSON.stringify(allGoods));

test("работа c корзиной/Cart", () => {
  const component = renderer.create(<Cart />);

  let componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();

  const buttonElem = component.root.findAll((el) => el.type == "button");

  buttonElem[0].props.onClick();
  expect(JSON.parse(localStorage.getItem("cartOrder"))).toEqual({ 10002: 1 });

  buttonElem[1].props.onClick();
  expect(JSON.parse(localStorage.getItem("cartOrder"))).toEqual({ 10002: 2 });

  buttonElem[2].props.onClick();
  expect(JSON.parse(localStorage.getItem("cartOrder"))).toEqual({});

  componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();
});
