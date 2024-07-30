import SignupInput from "./SignupInput";
import SigninInput from "./SigninInput";
import { useEffect, useState } from "react";
import interfaceDateFromDb from "./Database.json";
import React from "react";
import MoreAuthOptions from "./MoreAuthOptions";

const Layout=React.memo((props)=>{
  useEffect(() => {
    console.log("useEffect block");
    return () => {
      console.log(
        interfaceDateFromDb.switchToSignin +
          interfaceDate.switchToSigninTapCount,
        interfaceDateFromDb.switchToSignup +
          interfaceDate.switchToSignupTapCount,
        interfaceDateFromDb.googleAuth + interfaceDate.googleauthTapCount
      );
    };
  }, []);

  const [interfaceDate, setInterfaceData] = useState({
    switchToSigninTapCount: 0,
    switchToSignupTapCount: 0,
    googleauthTapCount: 0,
  });

  const [status, setStatus] = useState(props.states.switch.action);
  const [message, setMessage] = useState(props.states.switch.message);
  const [active, setActive] = useState(props.states.state);

  function toggleInput() { //useCallback()
    if (active === 1) {
      interfaceDate.switchToSigninTapCount++;
      setInterfaceData(interfaceDate);
      setActive((active + 1) % 2);
      setStatus("Sign in");
      setMessage("Already have an Account?");
    } else {
      interfaceDate.switchToSignupTapCount++;
      setInterfaceData(interfaceDate);
      setActive((active + 1) % 2);
      setStatus("Sign up");
      setMessage("Don't have an account?");
    }
  }

  // const MoreAuthOptions = React.memo(() => {
  //   <div className="moreoptions" id="moreoptions">
  //     <div
  //       style={{
  //         width: "50%",
  //         minWidth: "400px",
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //       }}
  //     >
  //       <button
  //         className="google"
  //         id="google"
  //         onClick={() => {
  //           interfaceDate.googleauthTapCount++;
  //           setInterfaceData(interfaceDate);
  //         }}
  //       >
  //         Continue with Google
  //       </button>
  //     </div>
  //     <div
  //       style={{
  //         width: "50%",
  //         minWidth: "400px",
  //         display: "flex",
  //         alignItems: "center",
  //         justifyContent: "center",
  //       }}
  //     >
  //       <div
  //         style={{
  //           display: "flex",
  //           alignItems: "center",
  //           justifyContent: "center",
  //         }}
  //       >
  //         <span>{message}</span>
  //         <button className="signupAuth" onClick={toggleInput} id="signupAuth">
  //           {status}
  //         </button>
  //       </div>
  //     </div>
  //   </div>;
  // });

  return (
    <div>
      {active === 1 ? (
        <SigninInput
          method={props.method}
          addAccountMethod={props.addAccountMethod}
          signedInAccountsDict={props.signedInAccountsDict}
        />
      ) : (
        <SignupInput />
      )}
      {/* <div className="moreoptions" id="moreoptions">
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
            onClick={() => {
              interfaceDate.googleauthTapCount++;
              setInterfaceData(interfaceDate);
            }}
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
            <span>{message}</span>
            <button
              className="signupAuth"
              onClick={toggleInput}
              id="signupAuth"
            >
              {status}
            </button>
          </div>
        </div>
      </div> */}
      <MoreAuthOptions
        messageProp={message}
        statusProp={status}
        onToggleInput={toggleInput}
        interfaceDateProp={interfaceDate}
        onSetInterfaceData={setInterfaceData}
      />
    </div>
  );
})

export default Layout;
