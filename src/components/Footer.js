import React from "react";
import { styled } from "baseui";

function Footer() {
  const MainFooterDiv = styled("div", {
    width: "100%",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
  });

  const ConetentDiv = styled("div", {
    width: "1312px",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
  });

  return (
    <MainFooterDiv>
      <ConetentDiv>
        <h1>Footer</h1>
      </ConetentDiv>
    </MainFooterDiv>
  );
}

export default Footer;
