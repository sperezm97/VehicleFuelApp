import styled from "styled-components";
import is, { match } from "styled-is";
import { Icon as nbIcon } from "native-base";

const Icon = styled(nbIcon)`
  color: ${({ theme, colors }) => colors || theme.colors.white};

  ${match("kind", "add")`
      font-size: ${({ theme }) => theme.fonts.displayXLarge.fontSize}px;
      color: ${({ theme }) => theme.colors.white};
  `}

  ${match("kind", "collapse")`
      margin-left: 0;
      font-size: ${({ theme }) => theme.fonts.body.fontSize}px;
      color: ${({ theme }) => theme.colors.black};
  `}
`;

export default Icon;
