"use strict";
import React from "react";
import "./DoubleButton.css";

const DoubleButton = (props) => {
  const button = (
    <div>
      <input type="button" value={props.caption1} onClick={props.cbPressed} />
      <span>{props.children}</span>
      <input type="button" value={props.caption2} onClick={props.cbPressed} />
    </div>
  );

  return button;
};

export default DoubleButton;
