import { compose } from "@reduxjs/toolkit";
import WithSafeArea from "./withSafeArea";
import WithTheme from "./withTheme";

export { WithSafeArea, WithTheme };

export default Component => compose(WithSafeArea, WithTheme)(Component);
