import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles";

export default WrappedComponent => {
  const hocComponent = ({ ...props }) => (
    <ThemeProvider theme={theme}>
      <WrappedComponent {...props} />
    </ThemeProvider>
  );

  return hocComponent;
};
