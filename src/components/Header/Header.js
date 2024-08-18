import React from "react";
import styles from "./style.module.css";
const Header = (props) => {
  return (
    <header className={styles.header}>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </header>
  );
};

export default Header;
