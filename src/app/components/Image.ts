import styled from "styled-components";
import is, { match } from "styled-is";
import { Image as nbImage } from "react-native";
import spacing from "../styles/spacing";

const Image = styled(nbImage)`
  ${match("type")`
    height: 150px;
    width: ${spacing.deviceWidth}px;
  `}
`;

export default Image;
