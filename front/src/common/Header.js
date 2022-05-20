import React, { useEffect } from "react";
import styles from "../css/header.css";

export default function AccountBar() {
  useEffect(() => {
    // call api or anything
    button();
    logout();
  }, []);

  let button = button => {
    const isLoggedIn = localStorage.getItem("username");
    if (isLoggedIn) {
      return (
        <button className="login-button">
          {localStorage.getItem("username")}
        </button>
      );
    }
    return (
      <a href="login" className="login-button">
        Se connecter
      </a>
    );
  };

  let logout = logoutButton => {
    const isLoggedIn = localStorage.getItem("username");
    if (isLoggedIn) {
      return (
        <button className="login-button" onClick={loginAction}>
          Se déconnecter
        </button>
      );
    }
  };

  const loginAction = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
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
