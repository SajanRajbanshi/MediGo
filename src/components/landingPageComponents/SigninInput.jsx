import "./signinInput.css";
import { IoCaretDownCircleSharp, IoEye } from "react-icons/io5";
import AccountList from "./AccountList";
import { IoMdEyeOff } from "react-icons/io";
import { useEffect, useState, useRef } from "react";
import interfaceDateFromDb from "./Database.json";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function SigninInput(props) {
  const [active, setActive] = useState(false);
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameInput = useRef(null);
  const passwordInput = useRef(null);

  function showSignedinAccountMenu() {
    setActive(true);
  }

  function hideSignedinAccountMenu() {
    setActive(false);
  }

  function handleUsernameChange(event) {
    usernameInput.current.value = event.target.value;
    setUsername(usernameInput.current.value);
  }

  function handlePasswordChange(event) {
    passwordInput.current.value = event.target.value;
    setPassword(passwordInput.current.value);
  }

  function setCredentials(thisOne) {
    console.log(thisOne);
    setUsername(thisOne);
    setPassword(props.signedInAccountsDict[thisOne]);
  }

  function performSignin() {
    console.log(
      "username:",
      usernameInput.current.value,
      "password:",
      passwordInput.current.value
    );
    let newUser = {
      userName: usernameInput.current.value,
      password: passwordInput.current.value,
    };
    props.addAccountMethod(newUser);
  }


  return (
    <div className="signinInputComponent" id="signinInputComponent">
      <section
        className="page1Signin"
        id="page1Signin"
        onMouseLeave={hideSignedinAccountMenu}
      >
        <div
          style={{
            display: "flex",
            padding: "0 10%",
            justifyContent: "space-around",
            flexWrap: "wrap",
            width: "100%",
            height: "fit-content",
          }}
        >
          <div className="textwrapper" id="textwrapper">
            <div>
              <span
                className="gradient"
                id="gradient"
                style={{ fontSize: "5vw", fontWeight: "600" }}
              >
                Welcome back
              </span>
            </div>
            <div
              style={{
                textAlign: "left",
                fontSize: "2vw",
                color: "#aaaaaa",
                margin: "2vw",
              }}
            >
              <span
                style={{ textAlign: "left", fontSize: "2vw", color: "#aaaaaa" }}
              >
                Being away means
                <br />
                Your were Healthy <br />
                And We are <br />
                Happy
              </span>
            </div>
          </div>
          <div className="glassdivSignin" id="glassdivSignin">
            <div className="placeholder" id="placeholder"></div>
            <div className="inputbox" id="inputbox1">
              <div className="inputBoxWrapper" id="inputBoxWrapper1">
                <TextField
                  variant="outlined"
                  type="text"
                  value={username}
                  ref={usernameInput}
                  onClick={() => {
                    showSignedinAccountMenu();
                  }}
                  onChange={handleUsernameChange}
                  label="Username"
                  fullWidth
                  required
                />
              </div>
            </div>
            <div className="placeholder" id="placeholder"></div>
            <div className="inputbox" id="inputbox2">
              <div className="inputBoxWrapper" id="inputBoxWrapper2">
                <TextField
                  fullWidth
                  required
                  value={password}
                  variant="outlined"
                  label="Password"
                  type={isPasswordVisible ? "text" : "password"}
                  ref={passwordInput}
                  onChange={handlePasswordChange}
                />
                <button
                  className="passwordVisibilityToggle"
                  onClick={() => {
                    setPasswordVisibility(!isPasswordVisible);
                  }}
                  id="passwordVisibilityToggle"
                >
                  {isPasswordVisible ? (
                    <IoMdEyeOff
                      className="passwordVisibilityToggleIcon"
                      id="passwordVisibilityToggleIcon"
                    />
                  ) : (
                    <IoEye
                      className="passwordVisibilityToggleIcon"
                      id="passwordVisibilityToggleIcon"
                    />
                  )}
                </button>
              </div>
            </div>
            <div className="button_signin" id="button_signin">
              <Button
                variant="outlined"
                onClick={() => {
                  performSignin();
                }}
              >
                Sign in
              </Button>
            </div>
          </div>
        </div>
        <div>
          <div className="bigcircle" id="bigcircle"></div>
          <div className="smallcircle1" id="smallcircle1"></div>
          <div className="smallcircle2" id="smallcircle2"></div>
        </div>

        {Object.keys(props.signedInAccountsDict).length === 0 ? (
          <></>
        ) : (
          <div
            className={active ? "signedinAccountShow" : "signedinAccountHide"}
            id="signedinAccount"
          >
            <button
              onClick={hideSignedinAccountMenu}
              className="signedInAccountMenuCloseButton"
              id="signedInAccountMenuCloseButton"
            >
              X
            </button>
            <AccountList
              onDelete={props.method}
              onSetCredentials={setCredentials}
              signedInAccountsDict={props.signedInAccountsDict}
            />
          </div>
        )}
      </section>
    </div>
  );
}
