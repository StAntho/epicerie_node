import React from "react";
import styles from "../css/header.css";

export default function AccountBar() {
  let button = (button) => {
    const isLoggedIn = localStorage.getItem("firstName");
    if (isLoggedIn) {
      return <button className="login-button">{localStorage.getItem("firstName")}</button>;
    }
    return (
      <a href="login" className="login-button">
        Se connecter
      </a>
    );
  };

  let logout = (logoutButton) => {
    const isLoggedIn = localStorage.getItem("firstName");
    if (isLoggedIn) {
      return <button className="login-button" onClick={loginAction}>Se déconnecter</button>;
    }
  };

  const loginAction = () => {
    localStorage.removeItem("firstName");
    window.location.reload(false);
  };

  return (
    <>
      <div className="accountBar">
        <h1 className="headerTitle"> La petite épicerie</h1>
        {button()}
        {logout()}
      </div>
    </>
  );
}
