"use scrict";

import React from "react";
import "..//css/Footer.css";

class Footer extends React.Component {
  render() {
    let today = new Date();
    let year = today.getFullYear();
    return (
      <footer>
        <p>
          {year}
          <a id="signin-button">&copy;</a>
          <a
            href="https://docs.google.com/spreadsheets/d/1O-3EId-cgt_W8keu3oAdDINPjUf-QvYzNhwoBiDaNLg/edit?usp=sharing"
            target="_blank"
          >
            ОOО
          </a>
          &laquo;БПИ&raquo;
        </p>
      </footer>
    );
  }
}

export default Footer;
