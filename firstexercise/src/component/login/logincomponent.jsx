import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, seterrormessage] = useState("");

  const checkEmailInput = (event) => {
    seterrormessage("");  
    setEmail(event.target.value);
  };

  const checkPasswordInput = (event) => {
    seterrormessage("");  
    setPassword(event.target.value);
  };
  const data = {
    emaildata: "user",
    datapassword: "123456",
  }
  const disabledstatus = email === "" || password.length < 6;
  function success() {
    if (
      email.toLowerCase() === data.emaildata.toLowerCase() &&
      password.toLowerCase() === data.datapassword.toLowerCase()
    ) {
      alert("success");
      seterrormessage("");   
    } else {
      seterrormessage("login failed`❌❌❌");
    }
  }
  return (
    <div className="wrapper">
      <div className="row">
        <label htmlFor={"email"}>Email</label>
        <input id={"email"} type={"email"} onChange={checkEmailInput} />
      </div>
      <div className="row">
        <label htmlFor={"password"}>Password</label>
        <input
          id={"password"}
          type={"password"}
          onChange={checkPasswordInput}
        />
      </div>

      {/* Place login error inside this div. Show the div ONLY if there are login errors. */}
      <div className="errorMessage">{errorMessage}</div>

      <div className="button">
        <button disabled={disabledstatus} onClick={success}>
          Login
        </button>
      </div>
    </div>
  );
}
