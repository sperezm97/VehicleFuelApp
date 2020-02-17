import styled from "styled-components";
import is, { match } from "styled-is";
import { Container as nbContainer } from "native-base";

const Container = styled(nbContainer)`
  background-color: ${({ theme }) => theme.colors.grey.lighter};
`;

export default Container;
