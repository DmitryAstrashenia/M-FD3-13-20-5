"use strict";
import React from "react";
import "./DoubleButton.css";

const DoubleButton = (props) => {
  const clickButton1 = () => {
    props.cbPressed(props.caption1);
  };

  const clickButton2 = () => {
    props.cbPressed(props.caption2);
  };
  const button = (
    <div>
      <input type="button" value={props.caption1} onClick={clickButton1} />
      <span>{props.children}</span>
      <input type="button" value={props.caption2} onClick={clickButton2} />
    </div>
  );

  return button;
};

export default DoubleButton;
