import React from "react";
import styles from "../css/appStyles.css";

export default function AccountBar() {
  let button = (button) => {
    const isLoggedIn = localStorage.getItem("firstName");
    if (isLoggedIn) {
      return <button>{localStorage.getItem("firstName")}</button>;
    }
    return (
      <a href="login" className="login-button">
        se connecter
      </a>
    );
  };

  let logout = (logoutButton) => {
    const isLoggedIn = localStorage.getItem("firstName");
    if (isLoggedIn) {
      return <button onClick={loginAction}>se déconnecter</button>;
    }
  };

  const loginAction = () => {
    localStorage.removeItem("firstName");
    window.location.reload(false);
  };

  return (
    <>
      <div className="accountBar">
        {button()}
        {logout()}
      </div>
    </>
  );
}
