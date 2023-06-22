import React, { useState } from "react";

function Signup(props) {
  let [user, setuser] = useState("");
  let [emailval, setemailval] = useState("");
  let [pass, setpass] = useState("");

  const username = (e) => {
    setuser(e.target.value);
  };

  const emailchange = (e) => {
    setemailval(e.target.value);
  };

  const passchange = (e) => {
    setpass(e.target.value);
  };

  const formsubmit = (e) => {
    e.preventDefault();
    //    console.log(user, emailval, pass);
    let formobj = {
      username: user,
      email: emailval,
      password: pass,
    };
    console.log(formobj);

    let loginData = JSON.parse(localStorage.getItem("loginData"));

    if (loginData) {
      loginData.push(formobj);
      localStorage.setItem("loginData", JSON.stringify(loginData));
    } else {
      localStorage.setItem("loginData", JSON.stringify([formobj]));
    }
  };

  const loginpage = () => {
    props.loginpopup("block");
    props.signuppop("none");
  };

  return (
    <div id="signup">
      <h1>Sign Up</h1>
      <form onSubmit={(e) => formsubmit(e)}>
        <input
          onChange={(e) => username(e)}
          type="text"
          placeholder="username"
        />
        <input
          onChange={(e) => emailchange(e)}
          type="email"
          placeholder="email"
        />
        <input
          onChange={(e) => passchange(e)}
          type="password"
          placeholder="password"
        />
        <input type="submit" value="Sign up" />
      </form>
      <button onClick={() => loginpage()}>Already have an account Login</button>
    </div>
  );
}

export default Signup;
