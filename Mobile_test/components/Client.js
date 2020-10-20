"use strict";
import React from "react";
import { myEvents } from "./events";
import EditClient from "./EditClient";

class Client extends React.PureComponent {
  state = {
    edit: this.props.edit,
  };

  btnDeleteUser = () => {
    myEvents.emit("answerDeleteClicked", this.props.client.id);
  };

  btnEditUser = () => {
    this.setState({
      edit: true,
    });
  };

  saveClicked = () => {
    this.setState({
      edit: null,
    });
  };

  componentDidMount = () => {
    myEvents.addListener("answerSaveClickedFromEditClient", this.saveClicked);
  };

  componentWillUnmount = () => {
    myEvents.removeListener(
      "answerSaveClickedFromEditClient",
      this.saveClicked
    );
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
              id={this.props.client.id + `_edit`}
              value="Редактировать"
              onClick={this.btnEditUser}
            />
          </td>
          <td>
            <input
              type="button"
              id={this.props.client.id + `_delete`}
              value="Удалить"
              onClick={this.btnDeleteUser}
            />
          </td>
        </tr>
      );
    }
    return viewClient;
  }
}

export default Client;
