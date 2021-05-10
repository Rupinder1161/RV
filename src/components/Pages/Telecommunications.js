import React from "react";
import { styled } from "baseui";

import WhyUs from "../WhyUs";



function Telecommunications() {
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
    alignItems:"center",
  });
  return (
    <MainFlexDiv>
      <Content>
      <WhyUs/>
      </Content>
    </MainFlexDiv>
  );
}

export default Telecommunications;
