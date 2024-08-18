"use client";
import React from "react";
import styles from "./styles.module.css";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import SelectDropDown from "../Select/Select";
const Menu = (props) => {
  // const [filter, setFilter] = React.useState({
  //   label: "Featured",
  //   value: "Featured",
  // });
  const handleFilter = (e) => {
    props.setFilter({ label: e.value, value: e.value });
  };
  React.useEffect(() => {}, [props]);
  return (
    <div className={styles.menu}>
      <div className={styles.fil}>
        <div className={styles.filter}>
          <FilterListRoundedIcon className={styles.icon} />
          <p>FILTER</p>
        </div>
      </div>
      <div className={styles.grid}>
        <div
          onClick={() => props.setGrid(0)}
          className={`${styles.grid1} ${
            props.grid == 0 ? styles.gridActive : ""
          }`}
        >
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
        <div
          onClick={() => props.setGrid(1)}
          className={`${styles.grid2} ${
            props.grid == 1 ? styles.gridActive : ""
          }`}
        >
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
      </div>
      <SelectDropDown
        placeholder="Sort By"
        value={props.filter}
        onChange={handleFilter}
      />
      {/* <select name="" id="">
        <option value="Relevance">Relevance</option>
        <option value="Popularity">Popularity</option>
        <option value="Price">Price</option>
      </select> */}
    </div>
  );
};

export default Menu;
