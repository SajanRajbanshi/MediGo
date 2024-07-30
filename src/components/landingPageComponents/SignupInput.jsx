import "./signupInput.css";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import interfaceDateFromDb from "./Database.json";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

export default function SignupInput() {
  const [interfaceDate, setInterfaceData] = useState({
    signupButtonTapCount: 0,
    signupEmailInputBoxTapCount: 0,
    signupPasswordInputBoxTapCount: 0,
    signupRepasswordInputBoxTapCount: 0,
  });
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const emailInput = useRef();
  const passwordInput = useRef();
  const repasswordInput = useRef();

  function handleEmailInputChange(event) {
    emailInput.current = event.target.value;
    setEmail(emailInput.current);
  }

  function handlePasswordInputChange(event) {
    passwordInput.current = event.target.value;
    setPassword(passwordInput.current);
  }

  function handleRepasswordInputChange(event) {
    repasswordInput.current = event.target.value;
    setRepassword(repasswordInput.current);
  }

  useEffect(() => {
    return () => {
      console.log(
        interfaceDateFromDb.signinButton + interfaceDate.signupButtonTapCount,
        interfaceDateFromDb.signinEmailInputBox +
          interfaceDate.signupEmailInputBoxTapCount,
        interfaceDateFromDb.signinPasswordInputBox +
          interfaceDate.signupPasswordInputBoxTapCount,
        interfaceDateFromDb.signupRepasswordInputBox +
          interfaceDate.signupRepasswordInputBoxTapCount
      );
    };
  }, []);
  return (
    <div>
      <div className="page1Signup" id="page1Signup">
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
                style={{
                  fontSize: "6vw",
                  fontWeight: "600",
                  margin: "2vw 0 0 0",
                }}
              >
                Welcome
              </span>
            </div>
            <div
              style={{
                textAlign: "left",
                fontSize: "2vw",
                color: "#aaaaaa",
                padding: "0 0 0 2vw",
              }}
            >
              <span
                style={{ textAlign: "left", fontSize: "2vw", color: "#aaaaaa" }}
              >
                Life Begins with
                <br />
                Good chioces
                <br />
                Lets Start
                <br />
                New Life
              </span>
            </div>
          </div>

          <div className="glassdivSignup" id="glassdivSignup">
            <div className="placeholder" id="placeholder"></div>
            <div className="inputbox" id="inputbox1">
              <div className="inputBoxWrapper">
                {/* <input
                  type="text"
                  className="ipbox"
                  name="email"
                  id="email"
                  onClick={() => {
                    interfaceDate.signupEmailInputBoxTapCount++;
                    setInterfaceData(interfaceDate);
                  }}
                /> */}
                <TextField
                  fullWidth
                  type="email"
                  label="Email"
                  value={email}
                  onChange={handleEmailInputChange}
                  required
                  onClick={() => {
                    interfaceDate.signupEmailInputBoxTapCount++;
                    setInterfaceData(interfaceDate);
                  }}
                />
              </div>
            </div>
            <div className="placeholder" id="placeholder"></div>
            <div className="inputbox" id="inputbox2">
              <div className="inputBoxWrapper">
                {/* <input
                  type={isPasswordVisible ? "text" : "password"}
                  className="ipbox"
                  name="password"
                  id="password"
                  onClick={() => {
                    interfaceDate.signupPasswordInputBoxTapCount++;
                    setInterfaceData(interfaceDate);
                  }}
                /> */}
                <TextField
                  type={isPasswordVisible ? "text" : "password"}
                  label="Password"
                  value={password}
                  onChange={handlePasswordInputChange}
                  onClick={() => {
                    interfaceDate.signupPasswordInputBoxTapCount++;
                    setInterfaceData(interfaceDate);
                  }}
                  fullWidth
                  required
                />
                <button
                  onClick={() => {
                    setPasswordVisibility(!isPasswordVisible);
                  }}
                  className="passwordVisibilityToggle"
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
            <div className="placeholder" id="placeholder"></div>
            <div className="inputbox" id="inputbox3">
              <div className="inputBoxWrapper">
                {/* <input
                  type={isPasswordVisible ? "text" : "password"}
                  className="ipbox"
                  name="re_password"
                  id="re_password"
                  onClick={() => {
                    interfaceDate.signupRepasswordInputBoxTapCount++;
                    setInterfaceData(interfaceDate);
                  }}
                /> */}
                <TextField
                  fullWidth
                  value={repassword}
                  onChange={handleRepasswordInputChange}
                  label="Re-Password"
                  type={isPasswordVisible ? "text" : "password"}
                  required
                  onClick={() => {
                    interfaceDate.signupRepasswordInputBoxTapCount++;
                    setInterfaceData(interfaceDate);
                  }}
                />
                <button
                  onClick={() => {
                    setPasswordVisibility(!isPasswordVisible);
                  }}
                  className="passwordVisibilityToggle"
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
              {/* <div className="button_wrapper" id="button_wrapper">
                <button
                  className="signupInput"
                  id="signin"
                  onClick={() => {
                    interfaceDate.signupButtonTapCount++;
                    setInterfaceData(interfaceDate);
                  }}
                >
                  Sign up
                </button>
              </div> */}
              <Button
                onClick={() => {
                  interfaceDate.signupButtonTapCount++;
                  setInterfaceData(interfaceDate);
                }}
                variant="outlined"
              >
                Sign up
              </Button>
            </div>
          </div>
        </div>
        <div>
          <div className="bigcircle" id="bigcircle"></div>
          <div className="smallcircle1" id="smallcircle1"></div>
          <div className="smallcircle2" id="smallcircle2"></div>
        </div>
      </div>
      {console.log("signup rendred")}
    </div>
  );
}