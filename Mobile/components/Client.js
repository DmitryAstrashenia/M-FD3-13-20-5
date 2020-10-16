"use strict";
import React from "react";
import "./MobileClients.css";
import { myEvents } from "./events";
import EditClient from "./EditClient";

class Client extends React.PureComponent {
  state = {
    edit: this.props.edit,
  };

  answerDeleteClicked = () => {
    myEvents.emit("answerDeleteClicked", this.props.client.id);
  };

  answerEditClicked = () => {
    this.setState({
      edit: 1,
    });
  };

  answerSaveClicked = () => {
    this.setState({
      edit: null,
    });
  };

  componentDidMount = () => {
    myEvents.addListener("answerSaveClicked", this.answerSaveClicked);
  };

  componentWillUnmount = () => {
    myEvents.removeListener("answerSaveClicked", this.answerSaveClicked);
  };

  render() {
    console.log("renderClient", this.props.client.id);

    let viewClient;
    if (this.state.edit) {
      viewClient = <EditClient client={this.props.client} />;
    } else {
      viewClient = (
        <tr>
          <td>{this.props.client.fam}</td>
          <td>{this.props.client.im}</td>
          <td>{this.props.client.otch}</td>
          <td>{this.props.client.balance}</td>
          <td
            className={
              this.props.client.balance > 0
                ? "backgroundColorGreen"
                : "backgroundColorRed"
            }
          >
            {this.props.client.balance > 0 ? "active" : "blocked"}
          </td>
          <td>
            <input
              type="button"
              value="Редактировать"
              onClick={this.answerEditClicked}
            />
          </td>
          <td>
            <input
              type="button"
              value="Удалить"
              onClick={this.answerDeleteClicked}
            />
          </td>
        </tr>
      );
    }
    return viewClient;
  }
}

export default Client;
