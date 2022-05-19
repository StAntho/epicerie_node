import React from "react";
import logo from "../../src/assets/LaPetiteEpicerie_Logo.png";
import styles from "../css/appStyles.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <a href="#">
          <p className="footerText">mentions légales</p>
        </a>
        <img src={logo} className="footer-logo" width="100vw" height="100vw" />
        <p className={styles.footerText}>@ copyright | 2022 Epicerie</p>
      </footer>
    </>
  );
}
