"use strict";
import React from "react";
import "./WithRainbowFrame.css";

const withRainbowFrame = (color) => {
  return (Comp) => {
    return (props) => {
      let border;
      color.forEach((e, item) => {
        if (!item) {
          border = (
            <div
              style={{
                border: "5px " + e + " solid",
                padding: "10px",
                textAlign: "center",
              }}
            >
              <Comp {...props} />
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
      return <div className="withRainbowFrame">{border}</div>;
    };
  };
};

export default withRainbowFrame;
