"use strict";
import React from "react";
import { myEvents } from "./events";

class EditClient extends React.PureComponent {
  constructor(props) {
    super(props);
    this.newTextRefFam = null;
    this.newTextRefIm = null;
    this.newTextRefOtch = null;
    this.newTextRefBalance = null;
  }

  setNewTextRefFam = (ref) => {
    this.newTextRefFam = ref;
  };

  setNewTextRefIm = (ref) => {
    this.newTextRefIm = ref;
  };

  setNewTextRefOtch = (ref) => {
    this.newTextRefOtch = ref;
  };

  setNewTextRefBalance = (ref) => {
    this.newTextRefBalance = ref;
  };

  btnDeleteUser = () => {
    myEvents.emit("answerDeleteClicked", this.props.client.id);
  };

  btnSaveUser = () => {
    if (this.newTextRefFam) {
      let newClient = {};
      newClient.id = this.props.client.id;
      newClient.fam = this.newTextRefFam.value;
      newClient.im = this.newTextRefIm.value;
      newClient.otch = this.newTextRefOtch.value;
      newClient.balance = Number(this.newTextRefBalance.value);

      myEvents.emit("answerSaveClickedFromEditClient", newClient);
    } else {
      console.log("DOM-элемент не найден");
    }
  };

  render() {
    return (
      <tr>
        <td>
          <input
            type="text"
            defaultValue={this.props.client.fam}
            className="edit"
            ref={this.setNewTextRefFam}
          />
        </td>
        <td>
          <input
            type="text"
            defaultValue={this.props.client.im}
            className="edit"
            ref={this.setNewTextRefIm}
          />
        </td>
        <td>
          <input
            type="text"
            defaultValue={this.props.client.otch}
            className="edit"
            ref={this.setNewTextRefOtch}
          />
        </td>
        <td>
          <input
            type="text"
            defaultValue={this.props.client.balance}
            className="edit"
            ref={this.setNewTextRefBalance}
          />
        </td>
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
            id={this.props.client.id + `_save`}
            value="Сохранить"
            onClick={this.btnSaveUser}
          />
        </td>
        <td>
          <input type="button" value="Удалить" onClick={this.btnDeleteUser} />
        </td>
      </tr>
    );
  }
}

export default EditClient;
