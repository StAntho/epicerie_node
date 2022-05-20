import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../css/form.css';

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
      <form 
      onSubmit={e => {
      e.preventDefault();
      }} method="post">

        <h1 class="h3 mb-3 font-weight-normal">Merci d'entrer vos informations de connexion</h1>

        <label for="Email">Email</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => {
            setEmail(e.target.value);
          }}
          class="form-control" 
        ></input>
        <label for="Password">Mot de passe</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          class="form-control" 
        ></input>

        <button onClick={loginAction} class="btn btn-lg btn-primary">
            Se connecter
        </button>
</form>
        
    </div>
  );
};

export default Login;
