import React from "react";
import Logo from "../../src/logo.svg";
//import base web compoennets
import { useStyletron } from "baseui";

import "./footer.css"

import { styled } from "styletron-react";
//import base web compoenents

const Img = styled("img", () => ({
  width: "300px",
  height: "109px",

  ":hover": {},
  "@media screen and (max-width: 880px)": {
    width: "auto",
    maxWidth: "160px",
    // maxWidth: "207px",
    height: "auto",
    maxHeight: "59px",
    // height: "29.02px",
    paddingLeft: "0px",
    marginLeft: "0px",
    marginRight: "0px",

    // position: "absolute",
    // top: "27.83px",
    // left: "20px",
  },
}));

 

export default function Footer() {
  const [css] = useStyletron();
  const footerNav = [{title:"Products",children:[{uri:"/",title:"Fibre Cables"}]},{title:"Services",children:[{uri:"/",title:"Fibre Cables"}]},{title:"Quick Links",children:[{uri:"/about-us",title:"About Us"},{uri:"/services",title:"Services"},{uri:"/contact-us",title:"Contact-Us"}]}]
  const globals = [{phoneNumber:"02245576040",email:"gurpreet1161@gmail.com" ,address:"south island New Zealand"}]
   
  return (
    <div className="mainBorderdiv">
      <div className="footerMainDiv">
        {/* leftside */}

        <div className="LeftFooterSection">
          <div className="Image">
            <div className="avatar1">
              <Img src={Logo} alt="company logo" />
            </div>
          </div>
        </div>

        {/* leftside */}
        <div className="rightFooterSection">
          <div className="rightmainDiv">
            {footerNav.map((item, i) => (
              <div className="ListingMainDiv" key={i}>
                <p style={{ fontFamily: "Roboto" }}>{item.title}</p>
                <ul>
                  {item.children.map((child, j) => (
                    <li key={j}>
                      {child.uri ? (
                        <a
                          href={`/${child.uri}/#TopPage`}
                          as={`/${child.uri}/#TopPage`}
                        >
                          {child.title}
                        </a>
                      ) : (
                        <span>{child.title}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="rightMainDiv">
              <div className="ListingMainDiv">
                <p style={{ fontFamily: "Roboto" }}>Contact</p>
                <ul>
                  <li>
                    <a href={`tel:${globals[0].phoneNumber}`}>
                      1300 0 BEARE
                      <br />
                      {globals[0].phoneNumber}
                    </a>
                  </li>
                  <li style={{ cursor: "pointer" }}>
                    <a href={`mailto:${globals[0].email}`}>
                      {" "}
                      {globals[0].email}
                    </a>
                  </li>
                  <li style={{ cursor: "pointer" }}>{globals[0].address}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Coipyright_div">
        <h6 style={{ fontFamily: "Roboto" }}>Copyright @2021 Beare Flooring</h6>
        <h6 style={{ fontFamily: "Roboto" }}>All rights Reserved.</h6>
      </div>
    </div>
  );
}
