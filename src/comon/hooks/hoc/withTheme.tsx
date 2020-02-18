import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles";

const WithTheme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default WithTheme;
