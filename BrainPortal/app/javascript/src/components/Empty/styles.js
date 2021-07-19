import styled from "styled-components";
import { Box } from "src/components/globals";

export const StyledEmptyContainer = styled(Box).attrs(props => ({
  flex: "auto",
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "stretch",
  flexDirection: "column",
  bg: "bg.alt",
  position: "absolute",
  width: "100%",
  height: "100%",
  ...props
}))``;

export const StyledIcon = styled(Box).attrs(() => ({
  width: "100%",
  alignItems: "center",
  justifyContent: "center"
}))``;
