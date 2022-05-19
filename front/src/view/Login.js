import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginAction = () => {
    if (email.length == 0 || password.length == 0) {
      alert("Empty form");
      return;
    }

    const headers = {
      Authorization: "Basic " + btoa(email + ":" + password)
    };

    axios
      .post(
        "http://127.0.0.1:3000/users/login",
        {},
        {
          headers: headers
        }
      )
      .then(response => {
        let token = response.data.token;
        let username = response.data.user.username;

        localStorage.setItem("token", token);
        localStorage.setItem("username", username);
        navigate("/");
        window.location.reload(false);
      })
      .catch(error => {
        alert(error);
      });
  };

  return (
    <div>
      <p>Login</p>
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => {
            setEmail(e.target.value);
          }}
        ></input>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
        ></input>
        <button onClick={loginAction}></button>
      </form>
    </div>
  );
};

export default Login;
