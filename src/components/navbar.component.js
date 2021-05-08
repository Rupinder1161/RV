import React, { Component } from "react";
import { Link } from "react-router-dom";
import { styled } from "baseui";

import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";

import TopContact from "./TopContact";

import "./navbar.css";

export default class Navbar extends Component {
  render() {
    const Linked = styled("p", {
      color: "black",
      fontSize: "14px",
      lineHeight: "16px",
      color: "organge",
      marginBottom: "0px",
      paddingRight: "20px",
    });
    return (
      <div className="mainDiv">
        <TopContact />
        <div className="navbar">
          <div className="Navbar_main">
            <div className="Logo">R & V</div>
            <div className="LeftList">
              <Linked>Home</Linked>
              <Linked>Telecomunications</Linked>
              <Linked>IT services</Linked>
              <Linked>Careers</Linked>
            </div>
            <div className="RightIcon">
              <PersonIcon
                style={{ paddingRight: "5px", height: "20px", width: "20px" }}
              />
              <h4>
                <Linked>Sign In</Linked>
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
