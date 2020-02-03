import { Text as nbText } from "native-base";
import styled from "styled-components";
import styledTS from "styled-components-ts";
import is from "styled-is";
import { ConfigText } from "../types";

const Text = styledTS<ConfigText>(nbText)`
  font-family: IBMPlexMono, IBMPlexSans;
  color: ${({ color, theme }) => color || theme.colors.grey.dark};

  ${is("displayXLarge")`
    font-size: ${({ theme }) => theme.fonts.displayXLarge.fontSize}px;
    line-height: ${({ theme }) => theme.fonts.displayXLarge.lineHeight}px;
    font-weight: ${({ theme }) => theme.fonts.displayXLarge.fontWeight};
  `};

  ${is("displayLarge")`
    font-size: ${({ theme }) => theme.fonts.displayLarge.fontSize}px;
    line-height: ${({ theme }) => theme.fonts.displayLarge.lineHeight}px;
    font-weight: ${({ theme }) => theme.fonts.displayLarge.fontWeight};
  `};

  ${is("displayMedium")`
    font-size: ${({ theme }) => theme.fonts.displayMedium.fontSize}px;
    line-height: ${({ theme }) => theme.fonts.displayMedium.lineHeight}px;
    font-weight: ${({ theme }) => theme.fonts.displayMedium.fontWeight};
  `};

  ${is("displaySmall")`
    font-size: ${({ theme }) => theme.fonts.displaySmall.fontSize}px;
    line-height: ${({ theme }) => theme.fonts.displaySmall.lineHeight}px;
    font-weight: ${({ theme }) => theme.fonts.displaySmall.fontWeight};
  `};

  ${is("heading")`
    font-size: ${({ theme }) => theme.fonts.heading.fontSize}px;
    line-height: ${({ theme }) => theme.fonts.heading.lineHeight}px;
    font-weight: ${({ theme }) => theme.fonts.heading.fontWeight};
  `};

  ${is("subHeading")`
    font-size: ${({ theme }) => theme.fonts.subHeading.fontSize}px;
    line-height: ${({ theme }) => theme.fonts.subHeading.lineHeight}px;
    font-weight: ${({ theme }) => theme.fonts.subHeading.fontWeight};
  `};

  ${is("body")`
    font-size: ${({ theme }) => theme.fonts.body.fontSize}px;
    line-height: ${({ theme }) => theme.fonts.body.lineHeight}px;
    font-weight: ${({ theme }) => theme.fonts.body.fontWeight};
  `};

  ${is("caption")`
    font-size: ${({ theme }) => theme.fonts.caption.fontSize}px;
    line-height: ${({ theme }) => theme.fonts.caption.lineHeight}px;
    font-weight: ${({ theme }) => theme.fonts.caption.fontWeight};
  `};
`;

export default Text;
