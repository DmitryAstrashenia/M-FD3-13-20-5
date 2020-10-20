"use strict";
import React from "react";
import "./MobileClients.css";
import { myEvents } from "./events";
import Client from "./Client";
import PropTypes from "prop-types";
import { editArr } from "./module/editArr";

class MobileClients extends React.PureComponent {
  static propTypes = {
    clients: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        fam: PropTypes.string.isRequired,
        im: PropTypes.string.isRequired,
        otch: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      })
    ),
  };

  state = {
    clients: this.props.clients,
    statusActive: null,
    statusBlocked: null,
    edit: null,
  };

  filterArr = (id, arr) => {
    let newClients = arr.filter((e) => e.id != id);
    return newClients;
  };

  deleteUser = (id) => {
    this.setState({
      clients: this.filterArr(id, this.state.clients),
    });
  };

  btnViewAllUser = () => {
    if (!this.state.statusActive != null || !this.state.statusBlocked != null) {
      this.setState({
        statusActive: null,
        statusBlocked: null,
        edit: null,
      });
    }
  };

  btnViewActiveUser = () => {
    if (this.state.statusActive != 1) {
      this.setState({
        statusActive: 1,
        statusBlocked: null,
        edit: null,
      });
    }
  };

  btnViewBlockedUser = () => {
    if (this.state.statusBlocked != 1) {
      this.setState({
        statusActive: null,
        statusBlocked: 1,
        edit: null,
      });
    }
  };

  btnAddUser = () => {
    let maxId = 0;
    this.state.clients.forEach((e) => {
      if (e.id > maxId) {
        maxId = e.id;
      }
    });
    let newClients = [...this.state.clients];
    let newClient = {
      id: 5 + maxId,
      fam: String(""),
      im: String(""),
      otch: String(""),
      balance: this.state.statusBlocked ? -1 : 1,
    };
    newClients.push(newClient);

    this.setState({
      clients: newClients,
      edit: true,
    });
  };

  saveClicked = (newClient) => {
    let newClients = [...this.state.clients];
    this.setState({
      clients: editArr(newClients, newClient),
      edit: null,
    });
  };

  componentDidMount = () => {
    myEvents.addListener("answerDeleteClicked", this.deleteUser);
    myEvents.addListener("answerSaveClickedFromEditClient", this.saveClicked);
  };

  componentWillUnmount = () => {
    myEvents.removeListener("answerDeleteClicked", this.deleteUser);
    myEvents.removeListener(
      "answerSaveClickedFromEditClient",
      this.saveClicked
    );
  };

  render() {
    console.log("renderMobileClients");
    let newClients = [];
    let clientsCode = [];
    if (this.state.statusActive) {
      newClients = this.state.clients.filter((client) => client.balance >= 0);
      clientsCode = newClients.map((client) => (
        <Client key={client.id} client={client} edit={this.state.edit} />
      ));
    } else if (this.state.statusBlocked) {
      newClients = this.state.clients.filter((client) => client.balance < 0);
      clientsCode = newClients.map((client) => (
        <Client key={client.id} client={client} edit={this.state.edit} />
      ));
    } else {
      clientsCode = this.state.clients.map((client) => (
        <Client key={client.id} client={client} edit={this.state.edit} />
      ));
    }
    return (
      <div className={"mobileClients"}>
        <input
          type="button"
          id="btnViewAllUser"
          value="Все"
          onClick={this.btnViewAllUser}
        />
        <input
          type="button"
          id="btnViewActiveUser"
          value="Активные"
          onClick={this.btnViewActiveUser}
        />
        <input
          type="button"
          id="btnViewBlockedUser"
          value="Заблокированные"
          onClick={this.btnViewBlockedUser}
        />
        <hr />
        <hr />
        <table>
          <thead>
            <tr>
              <th>Фамилия</th>
              <th>Имя</th>
              <th>Отчество</th>
              <th>Баланс</th>
              <th>Статус</th>
              <th>Редактировать</th>
              <th>Удалить</th>
            </tr>
          </thead>
          <tbody>{clientsCode}</tbody>
        </table>
        <hr />
        <input
          type="button"
          id={"answerAddClicked"}
          value="Добавить клиента"
          onClick={this.btnAddUser}
        />
      </div>
    );
  }
}

export default MobileClients;
