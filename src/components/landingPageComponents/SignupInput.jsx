import "./signupInput.css";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function SignupInput() {
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
  return (
    <>
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
                <TextField
                  fullWidth
                  type="email"
                  label="Email"
                  value={email}
                  onChange={handleEmailInputChange}
                  required
                />
              </div>
            </div>
            <div className="placeholder" id="placeholder"></div>
            <div className="inputbox" id="inputbox2">
              <div className="inputBoxWrapper">
                <TextField
                  type={isPasswordVisible ? "text" : "password"}
                  label="Password"
                  value={password}
                  onChange={handlePasswordInputChange}
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
                <TextField
                  fullWidth
                  value={repassword}
                  onChange={handleRepasswordInputChange}
                  label="Re-Password"
                  type={isPasswordVisible ? "text" : "password"}
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
            <div className="button_signin" id="button_signin">
              <Button
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
    </div>
    <div className="moreoptions" id="moreoptions">
      <div
        style={{
          width: "50%",
          minWidth: "400px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          className="google"
          id="google"
        >
          Continue with Google
        </button>
      </div>
      <div
        style={{
          width: "50%",
          minWidth: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span>Already have an Account?</span>
          <Link to="/auth">
          <button
            className="signupAuth"
            id="signupAuth"
          >
            Sign in
          </button>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
