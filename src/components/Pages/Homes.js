import React from "react";
import {withRouter} from 'react-router';

import { LightTheme, BaseProvider, styled } from "baseui";

import Carasoul from "../Carasoul";
import WhyUs from "../WhyUs";
import WhoWeARE from "../WhoWeARE";
import WhatWeDo from "../WhatWeDo";
import Review from "../Review";

function Homes() {
  const MainFlexDiv = styled("div", {
    width: "100%",
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
    <MainFlexDiv>
      <Content>
        <Carasoul />
        <WhyUs />
        <WhoWeARE />
        <WhatWeDo />
        <Review />
      </Content>
    </MainFlexDiv>
  );
}

export default withRouter(Homes);
