"use client";
import React from "react";
import Select from "react-select";
import classes from "./style.module.css";

import makeAnimated from "react-select/animated";
const SelectDropDown = (props) => {
  const animatedComponents = makeAnimated();
  return (
    <div className={classes.inputs}>
      <Select
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderSize: "20px",
            borderColor: "#ececec",
            borderRadius: "3px",
            fontSize: "12px",
            fontWeight: "500",
            padding: "3px 10px",
            width: "100%",
            color: "red",
            backgroundColor: "transparent",
          }),
          option: (styles, { data }) => ({
            ...styles,
            fontSize: "12px",
          }),
        }}
        className={classes.select}
        components={animatedComponents}
        onChange={props.onChange}
        value={props.value}
        classNamePrefix="ok"
        options={[
          { label: "Featured", value: "Featured" },
          { label: "Price Low - High", value: "Price Low - High" },
          { label: "Price High - Low", value: "Price High - Low" },
        ]}
      />
    </div>
  );
};

export default SelectDropDown;
