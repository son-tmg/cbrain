import styled from "styled-components";
import { Box } from "src/components/globals";

/*
=============================================================
| Login Page
=============================================================
*/

export const StyledPage = styled(Box).attrs((props) => ({
  bg: "bg.default",
  position: "relative",
  width: "100%",
  height: "100%",
}))``;

export const StyledMain = styled(Box).attrs((props) => ({
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  bg: "bg.default",
  height: "100%",
  position: "relative",
}))`
  overflow: scroll;
`;

const LOGO_HEIGHT = 3;

export const StyledLogo = styled(Box).attrs(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  px: 7,
  py: 4,
}))`
  div {
    height: ${LOGO_HEIGHT - 0.5}rem;
    border-radius: 0.5rem;
    overflow: hidden;
    img {
      height: 100%;
    }
  }
`;

export const StyledBanner = styled(Box).attrs((props) => ({
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  position: "absolute",
  px: 10,
  height: "100%",
  bg: "bg.secondary",
}))``;
