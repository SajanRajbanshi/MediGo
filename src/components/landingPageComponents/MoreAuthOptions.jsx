import { memo } from "react";

const MoreAuthOptions = memo((props) => {
    console.log("more opetion rerendered")
  return (
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
          onClick={() => {
            props.interfaceDateProp.googleauthTapCount++;
            props.onSetInterfaceData(props.interfaceDateProp);
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
          <span>{props.messageProp}</span>
          <button
            className="signupAuth"
            onClick={props.onToggleInput}
            id="signupAuth"
          >
            {props.statusProp}
          </button>
        </div>
      </div>
    </div>
  );
});

export default MoreAuthOptions;
