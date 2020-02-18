import { compose } from "@reduxjs/toolkit";
import WithSafeArea from "./WithSafeArea";
import WithTheme from "./WithTheme";
import WithProvider from "./WithProvider";

export { WithSafeArea, WithTheme, WithProvider };
export default Components =>
  compose(WithSafeArea, WithTheme, WithProvider)(Components);
