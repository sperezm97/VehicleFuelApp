import React from "react";
import { Provider } from "react-redux";
import store from "../../../app/store";

const WithSafeArea = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default WithSafeArea;
