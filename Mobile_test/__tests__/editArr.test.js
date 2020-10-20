"use strict";
import { editArr } from "../components/module/editArr";

let clients = [
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

let newClients = [
  { id: 101, fam: "Иванов", im: "Иван", otch: "Иванович", balance: 200 },
  { id: 105, fam: "Сидоров", im: "Сидор", otch: "Сидорович", balance: 250 },
  {
    id: 110,
    fam: "Астрашеня",
    im: "Дмитрий",
    otch: "Анатольевич",
    balance: 180,
  },
  {
    id: 120,
    fam: "Григорьев",
    im: "Григорий",
    otch: "Григорьевич",
    balance: -220,
  },
];

let newClient = {
  id: 110,
  fam: "Астрашеня",
  im: "Дмитрий",
  otch: "Анатольевич",
  balance: 180,
};

test("проверка редактирования массива", () => {
  expect(editArr(clients, newClient)).toEqual(
    expect.arrayContaining(newClients)
  );
});
