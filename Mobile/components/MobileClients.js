"use strict";
import React from "react";
import "./MobileClients";
import { myEvents } from "./events";
import Client from "./Client";
import PropTypes from "prop-types";
import deepEqual from "deep-equal";

class MobileClients extends React.Component {
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
    statusActiveClicked: null,
    statusBlockedClicked: null,
    edit: null,
  };

  allClients = this.props.clients;

  answerDeleteClicked = (id) => {
    let newClients = this.allClients.filter((e) => e.id != id);
    this.setState({
      clients: newClients,
      edit: null,
    });
    this.allClients = newClients;
    if (this.state.statusActiveClicked) {
      this.answerActiveClicked();
    }
    if (this.state.statusBlockedClicked) {
      this.answerBlockedClicked();
    }
  };

  answerAllClicked = () => {
    let isEqual = deepEqual(this.allClients, this.state.clients);
    if (!isEqual) {
      this.setState({
        clients: this.allClients,
        statusActiveClicked: 0,
        statusBlockedClicked: 0,
        edit: null,
      });
    }
  };

  answerActiveClicked = () => {
    let newClients = this.allClients.filter((client) => client.balance >= 0);
    let isEqual = deepEqual(newClients, this.state.clients);
    if (!isEqual) {
      this.setState({
        clients: newClients,
        statusActiveClicked: 1,
        statusBlockedClicked: 0,
        edit: null,
      });
    }
  };

  answerBlockedClicked = () => {
    let newClients = this.allClients.filter((client) => client.balance <= 0);
    let isEqual = deepEqual(newClients, this.state.clients);
    if (!isEqual) {
      this.setState({
        clients: newClients,
        statusBlockedClicked: 1,
        statusActiveClicked: 0,
        edit: null,
      });
    }
  };

  answerAddClicked = () => {
    let maxId = 0;
    this.allClients.forEach((e) => {
      if (e.id > maxId) {
        maxId = e.id;
      }
    });
    let newClients = [...this.allClients];
    let newClient = {
      id: 5 + maxId,
      fam: null,
      im: null,
      otch: null,
      balance: this.state.statusBlockedClicked ? -1 : 1,
    };
    newClients.push(newClient);

    this.setState({
      clients: newClients,
      edit: 1,
    });
    this.allClients = newClients;
    if (this.state.statusActiveClicked) {
      this.answerActiveClicked();
    }
    if (this.state.statusBlockedClicked) {
      this.answerBlockedClicked();
    }
  };

  answerSaveClicked = (id, fam, im, otch, balance) => {
    let newClients = [...this.allClients];
    newClients.forEach((client, i) => {
      if (client.id == id) {
        let newClient = { ...client };
        newClient.fam = fam;
        newClient.im = im;
        newClient.otch = otch;
        newClient.balance = Number(balance);
        newClients[i] = newClient;
      }
    });
    this.setState({
      clients: newClients,
    });
    this.allClients = newClients;
    if (this.state.statusActiveClicked) {
      this.answerActiveClicked();
    }
    if (this.state.statusBlockedClicked) {
      this.answerBlockedClicked();
    }
  };

  componentDidMount = () => {
    myEvents.addListener("answerDeleteClicked", this.answerDeleteClicked);
    myEvents.addListener("answerSaveClicked", this.answerSaveClicked);
  };

  componentWillUnmount = () => {
    myEvents.removeListener("answerDeleteClicked", this.answerDeleteClicked);
    myEvents.removeListener("answerSaveClicked", this.answerSaveClicked);
  };

  render() {
    console.log("renderMobileClients");

    let clientsCode = this.state.clients.map((client) => (
      <Client key={client.id} client={client} edit={this.state.edit} />
    ));
    return (
      <div className={"MobileClients"}>
        <input type="button" value="Все" onClick={this.answerAllClicked} />
        <input
          type="button"
          value="Активные"
          onClick={this.answerActiveClicked}
        />
        <input
          type="button"
          value="Заблокированные"
          onClick={this.answerBlockedClicked}
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
          value="Добавить клиента"
          onClick={this.answerAddClicked}
        />
      </div>
    );
  }
}

export default MobileClients;
