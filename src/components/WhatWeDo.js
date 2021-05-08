import React from "react";
import { styled } from "baseui";

function WhoWeDO() {
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
    paddingTop: "50px",
    paddingBottom: "50px",
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
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridTemplateRows: "1fr",
    gridColumnGap: "20px",
    gridRowGap: "20px",
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
    paddingLeft: "30px",
    paddingRight: "30px",
    position: "relative",
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

  const WhatWeDoImage = styled("img", {
    width: "auto",
    minWidth: "271px",
    maxWidth: "271px",
    height: "auto",
    minHeight: "271px",
    maxHeight: "271px",
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
    ":hover": {},
  });
  const WhatWeDoText = styled("div", {
    display: "none",
    minWidth: "251px",
    maxWidth: "251px",
    height: "auto",
    minHeight: "251px",
    maxHeight: "251px",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    marginTop: "0px",
    marginBottom: "0px",
    color: "transparent",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: "16px",
    lineHeight: "24px",
    marginTop: "18px",
    textAlign: "center",
    position: "absolute",
    top: "10px",
    zIndex: "100",
    padding: "20px",
    ":hover": {
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "center",
      alignItems: "center",
      minWidth: "251px",
      maxWidth: "251px",
      height: "auto",
      minHeight: "251px",
      maxHeight: "251px",
      position: "absolute",
      top: "10px",
      zIndex: "100",
      color: "white",
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "16px",
      lineHeight: "18px",
      //   transitionDelay:"0.5s",
      backgroundColor: "rgba(84, 84, 84, 0.7)",
    },
  });

  return (
    <MainDiv>
      <CenterDiv>
        <CenterTextHeading> What WE DO</CenterTextHeading>
        <CenterText>
          At R&V communications we understand that technology is a powerful force
          for improving people’s lives. Unfortunately, many people do not have
          access to the benefits and opportunities that technology offers.
          That’s why we’re committed to doing more globally to bring the
          benefits of technology to the people and organizations who need them
          most. We strive to empower every person and every organization
          wherever they are to achieve more.
        </CenterText>
        <Grid>
          <GridSection>
            <WhatWeDoImage src="https://static.wixstatic.com/media/dd954c_887bd0bcd11749adb22b493762920039.jpg" />
            <WhatWeDoText>
              Competitive Analysis of operators Speech Quality Index Voice
              Quality – Customer Perceived Congestion‐ Network availability
              Various KPI monitoring and reporting
            </WhatWeDoText>
          </GridSection>
          <GridSection>
            <WhatWeDoImage src="https://www.collinsaerospace.com/-/media/project/collinsaerospace/collinsaerospace-website/product-assets/marketing/e/ethernet/images/ethernet-cable_color_1920x1080.jpg?rev=0881455dde8c4cb49570609523d94d9d&w=491&hash=A572EDAA7CC4A2F16608613882F2443C" />
            <WhatWeDoText>
              Competitive Analysis of operators Speech Quality Index Voice
              Quality – Customer Perceived Congestion‐ Network availability
              Various KPI monitoring and reporting
            </WhatWeDoText>
          </GridSection>
          <GridSection>
            <WhatWeDoImage src="https://www.beca.com/media/assets/blog/Are-you-willing-to-be-exposed-Marvin-Clough_1920x1440.jpg?quality=80&width=500" />
            <WhatWeDoText>
              Competitive Analysis of operators Speech Quality Index Voice
              Quality – Customer Perceived Congestion‐ Network availability
              Various KPI monitoring and reporting
            </WhatWeDoText>
          </GridSection>
          <GridSection>
            <WhatWeDoImage src="https://thecurrent.pk/wp-content/uploads/2020/05/Work-site-telecommunication.jpg" />
            <WhatWeDoText>
              Competitive Analysis of operators Speech Quality Index Voice
              Quality – Customer Perceived Congestion‐ Network availability
              Various KPI monitoring and reporting
            </WhatWeDoText>
          </GridSection>
          <GridSection>
            <WhatWeDoImage src="https://www.computersciencedegreehub.com/wp-content/uploads/2020/06/Is-Telecommunications-a-Growing-Field-1024x683.jpg" />
            <WhatWeDoText>
              Competitive Analysis of operators Speech Quality Index Voice
              Quality – Customer Perceived Congestion‐ Network availability
              Various KPI monitoring and reporting
            </WhatWeDoText>
          </GridSection>
          <GridSection>
            <WhatWeDoImage src="https://www.careers.govt.nz/assets/jobs/telecommunications-technician/Telecommunications-technician-photographing-telecommunications-equipment-after-finishing-repair-work.jpg" />
            <WhatWeDoText>
              Competitive Analysis of operators Speech Quality Index Voice
              Quality – Customer Perceived Congestion‐ Network availability
              Various KPI monitoring and reporting
            </WhatWeDoText>
          </GridSection>
          <GridSection>
            <WhatWeDoImage src="https://dialtone.co.nz/wp-content/uploads/2015/12/Dialtone-Strategic-Planning.jpg" />
            <WhatWeDoText>
              Competitive Analysis of operators Speech Quality Index Voice
              Quality – Customer Perceived Congestion‐ Network availability
              Various KPI monitoring and reporting
            </WhatWeDoText>
          </GridSection>
          <GridSection>
            <WhatWeDoImage src="https://www.careers.govt.nz/assets/jobs/telecommunications-engineer/Telecommunications-engineer-designing-new-telecommunications-equipment.jpg" />
            <WhatWeDoText>
              Competitive Analysis of operators Speech Quality Index Voice
              Quality – Customer Perceived Congestion‐ Network availability
              Various KPI monitoring and reporting
            </WhatWeDoText>
          </GridSection>
        </Grid>
      </CenterDiv>
    </MainDiv>
  );
}

export default WhoWeDO;
