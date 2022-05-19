import React from "react";
{
  /*import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";*/
}

{
  /*import styles from "../../../css/nav.module.css";*/
}

export default function AccountBar() {
  let button = (button) => {
    const isLoggedIn = localStorage.getItem("firstName");
    if (isLoggedIn) {
      return <button>{localStorage.getItem("firstName")}</button>;
    }
    return <button href="login">se connecter</button>;
  };

  let logout = (logoutButton) => {
    const isLoggedIn = localStorage.getItem("firstName");
    if (isLoggedIn) {
      return <button onClick={loginAction}>se déconnecter</button>;
    }
    return <button href="login">s'inscrire</button>;
  };

  const loginAction = () => {
    localStorage.removeItem("firstName");
    window.location.reload(false);
  };

  return (
    <>
      <div>
        {button()}
        {logout()}
      </div>
    </>
  );
}

{
  /*className={styles.accountBar}*/
  /*className={styles.accountBarConnection}*/
}
