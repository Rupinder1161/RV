import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { styled } from "baseui";
import { useStyletron } from "baseui";
import Slider from "react-slick";

const Review = ({ block }) => {
  const [css, theme] = useStyletron();
  const SLiderDiv = styled("div", () => ({
    width: "100%",
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#CDDCDD",
    left: "0px",
    paddingBottom: "0px",
    ":hover": {},
    "@media screen and (max-width: 880px)": {
      width: "360px",
      display: "flex",
      flexFlow: "column",
      alignItems: "center",
      backgroundColor: "white",
      left: "0px",
    },
  }));

  const Top = styled("div", () => ({
    width: "1312px",
    // height: "577px", // needed to be fixed
    display: "flex",
    flexFlow: "column",
    alignContent: "center",
    justifyContent: "flex-start",
    position: "relative",
    marginTop: "0px",
    backgroundColor: "#CDDCDD",
    paddingBottom: "50px",
    ":hover": {},
    "@media screen and (max-width: 880px)": {
      width: "100%",
      display: "flex",
      flexFlow: "column",
      alignContent: "flex-start",
      justifyContent: "flex-start",
      position: "relative",
      marginTop: "0px",
      backgroundColor: "rgba(205, 220, 221, 0.45)",
      paddingBottom: "40px",
    },
  }));
  const TOPTop = styled("div", () => ({
    width: "1312px",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    position: "relative",
    ":hover": {},
    "@media screen and (max-width: 880px)": {
      width: "360px",
      position: "relative",
      marginTop: "0px",
    },
  }));

  const TopClientDiv = styled("div", () => ({
    width: "309px",
    maxWidth: "309px",
    backgroundColor: "white",
    position: "relative",
    marginBottom: "10px",
    display: "flex",
    flexFlow: "row",
    justifyContent: "center",
    alignItems: "center",
    ":hover": {},
    "@media screen and (max-width: 880px)": {
      width: "328px",

      marginTop: "20px",
      marginBottom: "20px",
    },
  }));

  const TopClientInfpDiv = styled("div", () => ({
    width: "309px",
    minHeight: "180px",
    // maxHeight:"150px",
    paddingBottom: "20px",
    paddingTop: "10px",
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "center",
    justifyContent: "center",
    // position: "relative",
    ":hover": {},
    "@media screen and (max-width: 880px)": {
      width: "328px",
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "200px",
      position: "relative",
      marginTop: "0px",
    },
  }));

  const ClientInfoDiv = styled("div", () => ({
    width: "309px",
    backgroundColor: "#297E3E",
    paddingBottom: "10px",
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    marginTop: "35px",
    // position: "relative",
    ":hover": {},
    "@media screen and (max-width: 880px)": {
      width: "328px",
      // height: "195px",
      position: "relative",
      marginTop: "0px",
    },
  }));

  const TopClientReview = styled("h3", ({}) => ({
    width: "264px",
    minHeight: "205px",
    paddingTop: "0px",
    color: "#545454",
    fontFamily: "var(--secondaryfont)",
    fontStyle: "normal",
    textAlign: "center",
    fontWeight: "500",
    fontSize: "15px",
    // position: "absolute",
    // top: "20px",
    // left: "30px",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    lineHeight: "20px",
    marginTop: "0px",

    ":hover": {
      // border: "2px dashed darkred"
    },
    "@media screen and (max-width: 880px)": {
      width: "270px",
      fontFamily: "var(--secondaryfont)",
      fontStyle: "normal",
      fontWeight: "300",
      fontSize: "15px",
      position: "relative",
      color: "#545454",
      lineHeight: "20px",
      paddingTop: "10px",
    },
  }));
  const ClientImg = styled("img", () => ({
    width: "70px",
    height: "70px",
    transform: "translate(-0%, -60%)",
    borderRadius: "50%",
    ":hover": {},
    "@media screen and (max-width: 880px)": {
      width: "70px",
      height: "70px",
    },
  }));

  const BottomHeading = styled("h1", ({ color }) => ({
    width: "540px",
    marginTop: "100px",
    color: "#013030",
    fontFamily: "var(--mainfont)",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: "32px",
    lineHeight: "40px",
    marginTop: "99px",
    ":hover": {
      // border: "2px dashed darkred"
    },
    "@media screen and (max-width: 880px)": {
      width: "175px",
      height: "44px",
      position: "relative",
      color: "#013030",
      fontFamily: "var(--mainfont)",
      fontStyle: "normal",
      fontWeight: "900",
      fontSize: "24px",
      textAlign: "center",
      lineHeight: "24px",
      marginTop: "60px",
      marginBottom: "30px",
    },
  }));

  const ClientName = styled("h3", ({ color }) => ({
    width: "248px",
    color: "white",
    textAlign: "center",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "12px",
    marginTop: "0px",
    marginBottom: "0px",
    ":hover": {
      // border: "2px dashed darkred"
    },
    "@media screen and (max-width: 880px)": {
      width: "248px",

      color: "white",
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "12px",
    },
  }));

  const ClientJobTitle = styled("p", ({ color }) => ({
    width: "248px",
    color: "white",
    textAlign: "center",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "550",
    fontSize: "14px",
    lineHeight: "14px",
    ":hover": {
      // border: "2px dashed darkred"
    },
    "@media screen and (max-width: 880px)": {
      width: "248px",
      color: "white",
      fontFamily: "Roboto+",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "12px",
    },
  }));

  const WebSlider = styled("div", () => ({
    width: "1312px",
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "center",
    justifyContent: "center",
    ":hover": {},
    "@media screen and (max-width: 880px)": {
      display: "none",
    },
  }));
  const WebInternalDIv = styled("div", () => ({
    width: "1312px",
    ":hover": {},
    "@media screen and (max-width: 880px)": {
      display: "none",
    },
  }));

  const MobileSlider = styled("div", () => ({
    display: "none",
    ":hover": {},
    "@media screen and (max-width: 880px)": {
      width: "360px",
      position: "relative",
      display: "flex",
      flexFlow: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      marginTop: "0px",
      backgroundColor: "transparent",
    },
  }));
  const MobileInternalDIv = styled("div", () => ({
    display: "none",
    // position: "relative",
    ":hover": {},
    "@media screen and (max-width: 880px)": {
      display: "block",
      width: "328px",
      position: "relative",
      marginTop: "0px",
    },
  }));

  //setting for mobile and web

  const Websettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const Mobilesettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  


  //setting for mobile and web
  return (
    <SLiderDiv>
      <Top>
        <TOPTop>
          <BottomHeading>Here’s what our clients say</BottomHeading>
        </TOPTop>
        <WebSlider>
          <WebInternalDIv id="sliderdiv">
            <Slider {...Websettings}>
              <TopClientDiv>
                <TopClientInfpDiv>
                  <TopClientReview>
                    With every enquiry, we provide you with a free no-obligation
                    quote and detailed consultation. We can come to your home or
                    office, measure and scope the requirements of the job. We
                    provide floor plans with every consultation to ensure all
                    the discussed areas have been quoted, and detailed join
                    plans with every carpet quote, to show you what our solution
                    will look like in your home or office.
                  </TopClientReview>
                </TopClientInfpDiv>
                <ClientInfoDiv>
                  <ClientImg
                    src="https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg"
                    alt="avatar img"
                  />
                  <ClientName>Jack Cooper</ClientName>
                  <ClientJobTitle>CEO , Taylor Smith LTD.</ClientJobTitle>
                </ClientInfoDiv>
              </TopClientDiv>
              <TopClientDiv>
                <TopClientInfpDiv>
                  <TopClientReview>
                    With every enquiry, we provide you with a free no-obligation
                    quote and detailed consultation. We can come to your home or
                    office, measure and scope the requirements of the job. We
                    provide floor plans with every consultation to ensure all
                    the discussed areas have been quoted, and detailed join
                    plans with every carpet quote, to show you what our solution
                    will look like in your home or office.
                  </TopClientReview>
                </TopClientInfpDiv>
                <ClientInfoDiv>
                  <ClientImg
                    src="https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg"
                    alt="avatar img"
                  />
                  <ClientName>Jack Cooper</ClientName>
                  <ClientJobTitle>CEO , Taylor Smith LTD.</ClientJobTitle>
                </ClientInfoDiv>
              </TopClientDiv>
              <TopClientDiv>
                <TopClientInfpDiv>
                  <TopClientReview>
                    With every enquiry, we provide you with a free no-obligation
                    quote and detailed consultation. We can come to your home or
                    office, measure and scope the requirements of the job. We
                    provide floor plans with every consultation to ensure all
                    the discussed areas have been quoted, and detailed join
                    plans with every carpet quote, to show you what our solution
                    will look like in your home or office.
                  </TopClientReview>
                </TopClientInfpDiv>
                <ClientInfoDiv>
                  <ClientImg
                    src="https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg"
                    alt="avatar img"
                  />
                  <ClientName>Jack Cooper</ClientName>
                  <ClientJobTitle>CEO , Taylor Smith LTD.</ClientJobTitle>
                </ClientInfoDiv>
              </TopClientDiv>
              <TopClientDiv>
                <TopClientInfpDiv>
                  <TopClientReview>
                    With every enquiry, we provide you with a free no-obligation
                    quote and detailed consultation. We can come to your home or
                    office, measure and scope the requirements of the job. We
                    provide floor plans with every consultation to ensure all
                    the discussed areas have been quoted, and detailed join
                    plans with every carpet quote, to show you what our solution
                    will look like in your home or office.
                  </TopClientReview>
                </TopClientInfpDiv>
                <ClientInfoDiv>
                  <ClientImg
                    src="https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg"
                    alt="avatar img"
                  />
                  <ClientName>Jack Cooper</ClientName>
                  <ClientJobTitle>CEO , Taylor Smith LTD.</ClientJobTitle>
                </ClientInfoDiv>
              </TopClientDiv>
              <TopClientDiv>
                <TopClientInfpDiv>
                  <TopClientReview>
                    With every enquiry, we provide you with a free no-obligation
                    quote and detailed consultation. We can come to your home or
                    office, measure and scope the requirements of the job. We
                    provide floor plans with every consultation to ensure all
                    the discussed areas have been quoted, and detailed join
                    plans with every carpet quote, to show you what our solution
                    will look like in your home or office.
                  </TopClientReview>
                </TopClientInfpDiv>
                <ClientInfoDiv>
                  <ClientImg
                    src="https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg"
                    alt="avatar img"
                  />
                  <ClientName>Jack Cooper</ClientName>
                  <ClientJobTitle>CEO , Taylor Smith LTD.</ClientJobTitle>
                </ClientInfoDiv>
              </TopClientDiv>
              <TopClientDiv>
                <TopClientInfpDiv>
                  <TopClientReview>
                    With every enquiry, we provide you with a free no-obligation
                    quote and detailed consultation. We can come to your home or
                    office, measure and scope the requirements of the job. We
                    provide floor plans with every consultation to ensure all
                    the discussed areas have been quoted, and detailed join
                    plans with every carpet quote, to show you what our solution
                    will look like in your home or office.
                  </TopClientReview>
                </TopClientInfpDiv>
                <ClientInfoDiv>
                  <ClientImg
                    src="https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg"
                    alt="avatar img"
                  />
                  <ClientName>Jack Cooper</ClientName>
                  <ClientJobTitle>CEO , Taylor Smith LTD.</ClientJobTitle>
                </ClientInfoDiv>
              </TopClientDiv>
            </Slider>
          </WebInternalDIv>
        </WebSlider>
        <MobileSlider>
          <MobileInternalDIv id="sliderdiv">
            <Slider {...Mobilesettings}>
              <TopClientDiv>
                <TopClientInfpDiv>
                  <TopClientReview>
                    With every enquiry, we provide you with a free no-obligation
                    quote and detailed consultation. We can come to your home or
                    office, measure and scope the requirements of the job. We
                    provide floor plans with every consultation to ensure all
                    the discussed areas have been quoted, and detailed join
                    plans with every carpet quote, to show you what our solution
                    will look like in your home or office.
                  </TopClientReview>
                </TopClientInfpDiv>
                <ClientInfoDiv>
                  <ClientImg
                    src="https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg"
                    alt="avatar img"
                  />
                  <ClientName>Jack Cooper</ClientName>
                  <ClientJobTitle>CEO , Taylor Smith LTD.</ClientJobTitle>
                </ClientInfoDiv>
              </TopClientDiv>
            </Slider>
          </MobileInternalDIv>
        </MobileSlider>
      </Top>
    </SLiderDiv>
  );
};

export default Review;
