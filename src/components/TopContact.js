import React from "react";
import { styled } from "baseui";

//icons
import RoomIcon from "@material-ui/icons/Room";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
//icons

function TopContact() {
  const MainDiv = styled("div", {
    width: "100%",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"white"
  });
  const CenterDiv = styled("div", {
    width: "1312px",
    height: "40px",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
  });
  const AddressContactDiv = styled("div", {
    height: "40px",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  });

  const AdressContact = styled("p", {
    color: "black",
    fontSize: "14px",
    lineHeight: "16px",
    color: "organge",
    marginBottom: "0px",
    paddingRight: "20px",
  });

  return (
    <MainDiv>
      <CenterDiv>
        <AddressContactDiv>
          <AdressContact>
            <RoomIcon />
            South Island, New Zealand
          </AdressContact>
          <AdressContact>
            <PhoneIcon />
            +1-650 770 9157
          </AdressContact>
          <AdressContact>
            <EmailIcon />
            info@rnvcomms.com
          </AdressContact>
        </AddressContactDiv>
        <AddressContactDiv>
          <AdressContact>
            <FacebookIcon />
          </AdressContact>
          <AdressContact>
            <TwitterIcon />
          </AdressContact>
          <AdressContact>
            <LinkedInIcon />
          </AdressContact>
          <AdressContact>
            {" "}
            <YouTubeIcon />{" "}
          </AdressContact>
        </AddressContactDiv>
      </CenterDiv>
    </MainDiv>
  );
}

export default TopContact;
