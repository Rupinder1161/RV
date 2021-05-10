import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider, styled } from "baseui";
import { Client as Styletron } from "styletron-engine-atomic";
import "./mern.css";

import Navbar from "./components/navbar.component";
import Footer from "./components/Footer";

// content import
import Carasoul from "./components/Carasoul";
import WhyUs from "./components/WhyUs";
import WhoWeARE from "./components/WhoWeARE";
import WhatWeDo from "./components/WhatWeDo";
import Review from "./components/Review";
import Homes from "./components/Pages/Homes";
import Telecommunications from "./components/Pages/Telecommunications";
// content import

const engine = new Styletron();

export class Mern extends Component {
  render() {
    const MainFlexDiv = styled("div", {
      width: "100%",
      minHeight: "100vh",
      display: "flex",
      flexFlow: "column",
      justifyContent: "space-between",
    });
    const Content = styled("div", {
      width: "100%",
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "center",
    });

    return (
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
          <Router>
            <Switch>
              <MainFlexDiv>
                <Navbar />
                <Content>
                  <Route exact path="/" component={withRouter(Homes)} />
                  <Route path="/t" component={withRouter(Telecommunications)} />

                  {/* <Route path="/create" component={CreateExercise} />
            <Route path="/user" component={CreateUser} /> */}
                </Content>
                <Footer />
              </MainFlexDiv>
            </Switch>
          </Router>
        </BaseProvider>
      </StyletronProvider>
    );
  }
}

export default Mern;
