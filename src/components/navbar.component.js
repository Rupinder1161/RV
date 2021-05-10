import React, { Component } from "react";
import { Link } from "react-router-dom";
import { styled } from "baseui";

import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import link from "react-router-dom";
import TopContact from "./TopContact";


import logo from "./assets/logo.png";



import "./navbar.css";

export default class Navbar extends Component {
  render() {
    const Linked = styled("p", {
      color: "black",
      fontSize: "14px",
      fontWeight:"700",
      lineHeight: "16px",
      color: "white",
      marginBottom: "0px",
      paddingRight: "20px",
      cursor: "pointer",
    });
    const Logo = styled("img", {
      width:"200px",
      height:"80px",
      color:"white",
      objectFit:"cover",
      objectPosition:"50% 50%"
    });
    return (
      <div className="mainDiv">
        <TopContact />
        <div className="navbar">
          <div className="Navbar_main">
            <Logo src={logo} alt="logo"/>
            <div className="LeftList">
              <Link to="/">
                <Linked>Home</Linked>
              </Link>
              <Link to="/t">
                <Linked>Telecomunications</Linked>
              </Link>
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
