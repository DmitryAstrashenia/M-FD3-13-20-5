"use strict";
import React from "react";
import "./RainbowFrame.css";

const RainbowFrame = (props) => {
  let border;
  props.colors.map((e, item) => {
    if (!item) {
      border = (
        <div
          style={{
            border: "5px " + e + " solid",
            padding: "10px",
            textAlign: "center",
          }}
        >
          {props.children}
        </div>
      );
    } else {
      border = (
        <div style={{ border: "5px " + e + " solid", padding: "10px" }}>
          {border}
        </div>
      );
    }
  });
  return <div className="RainbowFrame">{border}</div>;
};

export default RainbowFrame;
