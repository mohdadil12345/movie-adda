import React, { useState } from "react";
import Signup from "./Signup";
import { useNavigate } from "react-router-dom";

function Login(props) {
  let [email, setemail] = useState("");
  let [pass, setPass] = useState("");
  let [showsign, setshowsign] = useState("none");
  let [showlogin, setshowlogin] = useState("block");
  const navigate= useNavigate()
  


  const loginform = (e) => {
    e.preventDefault();
    // console.log(email, pass);
    let loginData = JSON.parse(localStorage.getItem("loginData"))

     let userCheck = loginData.find(e => e.email == email , e.password == pass)
     if (userCheck) {
      //  alert("sahi hai boss")
      localStorage.setItem("userlogin", JSON.stringify({username: userCheck.username}))
      props.setLoggedIn({username:userCheck.username})
      navigate("/")
     }else{
       alert("username or password is incorrect")
     }

  };
  const emailvalue = (e) => {
    setemail(e.target.value);
  };

  const paswrdval = (e) => {
    // console.log(e.target.value);
    setPass(e.target.value);
  };

  const gotoSign = ()=> {
    setshowsign("block")
    setshowlogin("none")
  }

  return (
    <div id="login-page">
      <div style={{ display: showlogin }} className="loginform">
        <h1>Login</h1>
        <form onSubmit={(e) => loginform(e)} id="form">
          <input
            onChange={(e) => emailvalue(e)}
            type="email"
            placeholder="username"
          />
          <input
            onChange={(e) => paswrdval(e)}
            type="password"
            placeholder="password"
          />
          <input type="Submit" />
        </form>
        <button onClick={()=> gotoSign()}>create an account</button>
      </div>
      <div style={{ display: showsign }}>
        <Signup loginpopup = {setshowlogin} signuppop = {setshowsign}/>
      </div>
    </div>
  );
}

export default Login;
