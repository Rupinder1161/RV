import React from "react";
import { styled } from "baseui";

function WhyUs() {
  const MainDiv = styled("div", {
    width: "100%",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  });
  const CenterDiv = styled("div", {
    width: "1312px",
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingTop:"100px",
    paddingBottom:"100px"
  });

  const CenterTextHeading = styled("div", {
    width: "638px",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    marginTop: "0px",
    marginBottom: "0px",
    color: "black",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: "32px",
    lineHeight: "40px",
    textAlign: "center",
  });


  const CenterText = styled("div", {
    width: "638px",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    marginTop: "0px",
    marginBottom: "0px",
    color: "rgba(84, 84, 84, 1)",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: "16px",
    lineHeight: "24px",
    marginTop:"18px",
    textAlign: "center",
  });

  return (
    <MainDiv>
      <CenterDiv>
          <CenterTextHeading>Our Great Range of Products</CenterTextHeading>
        <CenterText>
          The products we offer are not only at the highest of quality but at
          competitive prices too. While most suppliers require their partners to
          showcase their products in a showroom, we used this opportunity to
          create a mobile showroom. By cutting down our overhead costs, we
          deliver you lower prices!
        </CenterText>
      </CenterDiv>
    </MainDiv>
  );
}

export default WhyUs;
