"use strict";
import React from "react";
import "./MobileClients";
import { myEvents } from "./events";
import Client from "./Client";
import PropTypes from "prop-types";

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

  answerDeleteClicked = (id) => {
    let newClients = this.state.clients.filter((e) => e.id != id);
    this.setState({
      clients: newClients,
      edit: null,
    });
  };

  answerAllClicked = () => {
    if (
      this.state.statusActiveClicked != null ||
      this.state.statusBlockedClicked != null
    ) {
      this.setState({
        statusActiveClicked: null,
        statusBlockedClicked: null,
        edit: null,
      });
    }
  };

  answerActiveClicked = () => {
    if (this.state.statusActiveClicked != 1) {
      this.setState({
        statusActiveClicked: 1,
        statusBlockedClicked: null,
        edit: null,
      });
    }
  };

  answerBlockedClicked = () => {
    if (this.state.statusBlockedClicked != 1) {
      this.setState({
        statusActiveClicked: null,
        statusBlockedClicked: 1,
        edit: null,
      });
    }
  };

  answerAddClicked = () => {
    let maxId = 0;
    this.state.clients.forEach((e) => {
      if (e.id > maxId) {
        maxId = e.id;
      }
    });
    let newClients = [...this.state.clients];
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
  };

  answerSaveClicked = (id, fam, im, otch, balance) => {
    let newClients = [...this.state.clients];
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
    let newClients = [];
    let clientsCode = [];
    if (this.state.statusActiveClicked) {
      newClients = this.state.clients.filter((client) => client.balance >= 0);
      clientsCode = newClients.map((client) => (
        <Client key={client.id} client={client} edit={this.state.edit} />
      ));
    } else if (this.state.statusBlockedClicked) {
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
