import SignupInput from "./SignupInput";
import SigninInput from "./SigninInput";
import { useEffect, useState } from "react";
import React from "react";
// import MoreAuthOptions from "./MoreAuthOptions";

const Layout=React.memo((props)=>{

  const [status, setStatus] = useState(props.states.switch.action);
  const [message, setMessage] = useState(props.states.switch.message);
  const [active, setActive] = useState(props.states.state);

  function toggleInput() {
    if (active === 1) {
      setActive((active + 1) % 2);
      setStatus("Sign in");
      setMessage("Already have an Account?");
    } else {
      setActive((active + 1) % 2);
      setStatus("Sign up");
      setMessage("Don't have an account?");
    }
  }

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
      <MoreAuthOptions
        messageProp={message}
        statusProp={status}
        onToggleInput={toggleInput}
      />
    </div>
  );
})

export default Layout;
