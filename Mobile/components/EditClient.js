"use strict";
import React from "react";
import { myEvents } from "./events";

class EditClient extends React.PureComponent {
  newTextRefFam = null;
  newTextRefIm = null;
  newTextRefOtch = null;
  newTextRefBalance = null;

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

  answerDeleteClicked = () => {
    myEvents.emit("answerDeleteClicked", this.props.client.id);
  };

  answerSaveClicked = () => {
    myEvents.emit(
      "answerSaveClicked",
      this.props.client.id,
      this.newTextRefFam.value,
      this.newTextRefIm.value,
      this.newTextRefOtch.value,
      this.newTextRefBalance.value
    );
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
            value="Сохранить"
            onClick={this.answerSaveClicked}
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
}

export default EditClient;
