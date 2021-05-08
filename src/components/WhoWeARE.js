import React from "react";
import { styled } from "baseui";

function WhoWeARE() {
  const MainDiv = styled("div", {
    width: "100%",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  });
  const CenterDiv = styled("div", {
    width: "1312px",
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingTop: "100px",
    paddingBottom: "100px",
    backgroundColor: "#f9f9f9",
  });

  const CenterTextHeading = styled("p", {
    width: "638px",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    marginTop: "0px",
    marginBottom: "0px",
    color: "#313b48",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: "32px",
    lineHeight: "40px",
    textAlign: "center",
  });

  const Grid = styled("div", {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridTemplateRows: "1fr",
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
    marginTop: "18px",
    textAlign: "center",
  });

  const GridSection = styled("div", {
    width: "100%",
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "flex-start",
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
    marginTop: "18px",
    textAlign: "center",
    paddingLeft:"30px",
    paddingRight:"30px",
  });

  const GridHeading = styled("p", {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    marginTop: "0px",
    marginBottom: "0px",
    color: "#606060",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "24px",
    lineHeight: "24px",
    textAlign: "center",
    textDecoration: "underline",
    textDecorationColor: "#297E3E",
  });

  const CenterText = styled("div", {
    width: "100%",
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
    marginTop: "18px",
    textAlign: "center",
  });
  return (
    <MainDiv>
      <CenterDiv>
        <CenterTextHeading> WHO WE ARE</CenterTextHeading>
        <Grid>
          <GridSection>
            <GridHeading>OUR COMMITMENT</GridHeading>
            <CenterText>
              NextGen Unicorn is committed to providing the technical services
              needed to meet our clients' needs and give you an Edge in the
              competitive market. We continuously learn and develop processes to
              meet the standards of the industry. We take responsibility for
              maintaining and delivering high-quality services to meet global
              standards.
            </CenterText>
          </GridSection>
          <GridSection>
            <GridHeading>DEDICATED SERVICE</GridHeading>
            <CenterText>
              NextGen Unicorn is committed to providing the technical services
              needed to meet our clients' needs and give you an Edge in the
              competitive market. We continuously learn and develop processes to
              meet the standards of the industry. We take responsibility for
              maintaining and delivering high-quality services to meet global
              standards.
            </CenterText>
          </GridSection>
          <GridSection>
            <GridHeading>CORPORATE RESPONSIBILITY</GridHeading>
            <CenterText>
              NextGen Unicorn is committed to providing the technical services
              needed to meet our clients' needs and give you an Edge in the
              competitive market. We continuously learn and develop processes to
              meet the standards of the industry. We take responsibility for
              maintaining and delivering high-quality services to meet global
              standards.
            </CenterText>
          </GridSection>
        </Grid>
      </CenterDiv>
    </MainDiv>
  );
}

export default WhoWeARE;
