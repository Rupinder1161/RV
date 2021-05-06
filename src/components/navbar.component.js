import React, { Component } from "react";
import { Link } from "react-router-dom";
import { styled } from "baseui";

import "./navbar.css";

export default class Navbar extends Component {
  render() {
    const H1 = styled("div", {
      color: "black",
      fontSize: "20px",
    });

    return (
      <div className="mainDiv">
        <div class="navbar">
          <H1>R & V </H1>
        </div>
      </div>
    );
  }
}
