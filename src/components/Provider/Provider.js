"use client";
import React from "react";
import store from "@/app/store";
import { Provider } from "react-redux";
const ReduxProvider = (props) => {
  return <Provider store={store}>{props.children}</Provider>;
};

export default ReduxProvider;
