"use strict";

import React from "react";
import renderer from "react-test-renderer";
import MobileClients from "../components/MobileClients";

let clientsArr = [
  { id: 101, fam: "Иванов", im: "Иван", otch: "Иванович", balance: 200 },
  { id: 105, fam: "Сидоров", im: "Сидор", otch: "Сидорович", balance: 250 },
  { id: 110, fam: "Петров", im: "Пётр", otch: "Петрович", balance: 180 },
  {
    id: 120,
    fam: "Григорьев",
    im: "Григорий",
    otch: "Григорьевич",
    balance: -220,
  },
];

test("работа MobileClients.answerEditClicked", () => {
  const component = renderer.create(
    <MobileClients
      clients={clientsArr}
      statusActiveClicked={null}
      statusBlockedClicked={null}
      edit={null}
    />
  );

  let componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();

  let buttonElemEdit = component.root.find(
    (el) => el.props.id == Number(101) + "_edit"
  );

  buttonElemEdit.props.onClick();

  componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();

  buttonElemEdit = component.root.find(
    (el) => el.props.id == Number(101) + "_save"
  );

  buttonElemEdit.props.onClick();

  componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();
});
