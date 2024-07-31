import "./signupin.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "./Layout";
import profileImage from "./assets/profile-round-1346-svgrepo-com.svg";

import Badge from "@mui/material/Badge";

export default function Signupin(props) {
  const [accountDict, setaccountDict] = useState({});

  function addAccount(addThisOne) {
    if (
      addThisOne.userName === "" ||
      addThisOne.userName in accountDict ||
      addThisOne.password === ""
    ) {
      console.log("there is noting to add");
    } else {
      accountDict[addThisOne.userName] = addThisOne.password;
      let newaccountDict = JSON.parse(JSON.stringify(accountDict));
      setaccountDict(newaccountDict);
    }
  }

  function updateAccounts(deleteThisOne) {
    delete accountDict[deleteThisOne];
    let newaccountDict = JSON.parse(JSON.stringify(accountDict));
    setaccountDict(newaccountDict);
  }

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
              <span className="tab dim" id="tab">
                About
              </span>
              <div className="pricing" id="pricing">
                <span className="tab gradient" id="tab">
                  Pricing
                </span>
              </div>
            </div>
          </div>
          <div className="signupinright" id="right">
            <Badge
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              badgeContent={Object.keys(accountDict).length}
              color="lightgreen"
            >
              <img
                src={profileImage}
                alt="profileIcon"
                className="profileIcon"
                id="profileIcon"
              />
            </Badge>
          </div>
        </div>
      </div>

      <Layout
        states={props.initial}
        method={updateAccounts}
        addAccountMethod={addAccount}
        signedInAccountsDict={accountDict}
      />

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
