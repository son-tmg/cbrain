import styled from "styled-components";
import { Box } from "src/components/globals";

export const StyledHeader = styled(Box).attrs((props) => ({
  width: "100%",
  bg: "#F8F8F8",
  border: props.subheading ? 0 : `2px solid ${props.theme.colors.bg.border}`,
  justifyContent: "center",
  p: 2,
}))``;

export const StyledSection = styled(Box).attrs((props) => ({
  flexDirection: "column",
  my: 2,
}))``;

export const StyledSectionContent = styled(Box).attrs((props) => ({
  bg: "bg.default",
  border: `2px solid ${props.theme.colors.bg.border}`,
  borderTop: 0,
  justifyContent: "center",
  p: 2,
  flexWrap: "wrap",
}))``;

export const StyledSwatch = styled(Box).attrs((props) => ({
  flex: props.flex || "1 1 0px",
  alignItems: "center",
  px: 4,
  py: 5,
  border: `1px solid ${props.theme.colors.bg.border}`,
}))``;

export const StyledRow = styled(Box).attrs((props) => ({
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  p: 2,
}))``;

export const StyledOverride = styled.div`
  * {
    position: unset !important;
  }
`;
