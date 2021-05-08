import React from "react";
import { styled } from "baseui";


function Carasoul() {
  const MainDiv = styled("div", {
    width: "100%",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  });
  const CenterDiv = styled("div", {
    width: "1312px",
    height: "600px",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  });

  const CenterImg = styled("img", {
    width: "100%",
    height: "600px",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    zIndex:10,
    position:"absolute",
  });
  const CenterTextDiv = styled("div", {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "600px",
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    fontWeight: "900",
    fontSize: "50px",
    zIndex:100
  });

  const CenterText = styled("p", {
    width: "468px",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    marginTop: "0px",
    marginBottom: "0px",
    color: "white",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "1200",
    fontSize: "42px",
    lineHeight: "45px",
    textAlign: "center",
    
  });
   
  const ContactUsButton = styled("button", {
    width: "206px",
    height:"50px",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
    marginTop: "50px",
    marginBottom: "0px",
    color: "white",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "24px",
    textAlign: "center",
    border:"none",
    borderRadius:"50px"
    
  });




  return (
    <MainDiv>
      <CenterImg src="https://www.neocomm.tech/images/services/top-1920.jpg" />
      <CenterDiv>
        <CenterTextDiv>
          <CenterText  >New Zealand’s Premium Telecommunication's Specialists</CenterText  >
          <ContactUsButton>Contact us</ContactUsButton>
        </CenterTextDiv>
      </CenterDiv>
    </MainDiv>
  );
}

export default Carasoul;
