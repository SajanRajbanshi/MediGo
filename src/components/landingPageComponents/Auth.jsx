import "./signupin.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import profileImage from "./assets/profile-round-1346-svgrepo-com.svg";
import SigninInput from "./SigninInput";
import SignupInput from "./SignupInput";
import { Outlet } from "react-router-dom"


import Badge from "@mui/material/Badge";

export default function Auth(props) {


  return (
    <div className="bodySign" id="bodySign">
      <div className="headerSign" id="headerSign">
        <div className="headerdivSign" id="headerdivSign">
          <div className="leftSign" id="left">
            <div className="logoSign" id="logo">
              <Link to="/">
                <span style={{ color: "black" }}>Medi</span>
                <span style={{ color: "#C42121" }}>Go</span>
              </Link>
            </div>
            <div className="tabsSign" id="tabs">
              <span className="tab dim" id="tab">
                Contact
              </span>
              <Link to="/about">
                <span className="tab dim" id="tab">
                  About
                </span>
              </Link>
              <div className="pricing" id="pricing">
                <Link to="/subscription">
                  <span className="tab gradient" id="tab">
                    Pricing
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>


      <Outlet/>

      <div className="footerSign" id="footerSign">
        <div className="glassdiv2" id="glassdiv2">
          <div className="logo" id="logo">
            <Link to="/">
              <span style={{ color: "black" }}>Medi</span>
              <span style={{ color: "#C42121" }}>Go</span>
            </Link>
          </div>
          <div
            className="slogan"
            id="slogan"
            style={{ fontSize: "3vw", color: "#aaaaaa", textAlign: "left" }}
          >
            Your Health our Goal
          </div>
          <hr
            color="#aaaaaa"
            style={{
              marginTop: "2vw",
              marginBottom: "2vw",
              height: "1px",
              border: "none",
            }}
          />
          <div
            style={{
              width: "60%",
              display: "flex",
              justifyContent: "space-between",
              color: "#767676",
              fontSize: "1vw",
              fontWeight: "500",
            }}
          >
            <div className="lawsRules" id="lawsRules">
              All Right Reserved 2024
            </div>
            <div className="lawsRules" id="lawsRules">
              Terms and Contditions
            </div>
            <div className="lawsRules" id="lawsRules">
              Privacy Policy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
