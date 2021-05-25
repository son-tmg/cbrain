import styled from "styled-components";
import { Box, Text } from "../../src/components/globals";

export const StyledForm = styled("form").attrs((props) => ({}))`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const StyledText = styled(Text).attrs((props) => ({
  textTransform: "uppercase",
  variant: "sm",
  whiteSpace: "normal",
}))``;

export const StyledLoading = styled(Box).attrs((props) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  justifyContent: "center",
  zIndex: 1000,
}))`
  &::after {
    content: "";
    background: ${(props) => props.theme.colors.bg.default};
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    opacity: 0.7;
  }
`;
