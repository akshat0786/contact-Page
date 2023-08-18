import React from "react";
import styles from "./navigation.module.css";
const NavBar = () => {
  return (
    <nav className={`${styles.navigation} container`}>
      <div className="logo">
        <img
          src="/images/logo.png"
          alt="logo image"
          height="70px"
          width="70px"
        />
      </div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;
