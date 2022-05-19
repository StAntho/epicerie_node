import React from "react";
import logo from "../../src/assets/LaPetiteEpicerie_Logo.png";
import styles from "../css/appStyles.css";

{
  /*import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";*/
}

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <p>mentions légales</p>
        <a>
          <p>copyright | 2022 Epicerie</p>
        </a>
        <img src={logo} width="100vw" height="100vw" />
      </footer>
    </>
  );
}

{
  /*className={styles.legalmentions}*/
}
