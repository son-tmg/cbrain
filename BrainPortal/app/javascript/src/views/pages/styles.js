import styled, { css } from "styled-components";
import { Box } from "src/components/globals";

export const NAV_WIDTH = 3.5;
export const NAV_EXPANDED_WIDTH = 14;

export const StyledPageLayout = styled(Box).attrs((props) => ({
  width: "100%",
  flex: "1 1 auto",
  flexDirection: "column",
  position: "relative",
  bg: "bg.default",
  ...props,
}))`
  overflow-y: auto;
  transition: ${(props) => props.theme.transitions.drawer.off};

  ${(props) =>
    props.showNavigation &&
    css`
      margin-left: ${(props) =>
        props.isNavigationExpanded
          ? `${NAV_EXPANDED_WIDTH}rem`
          : `${NAV_WIDTH}rem`};
      transition: ${(props) => props.theme.transitions.drawer.on};
    `}
`;

export const StyledSection = styled(Box).attrs((props) => ({
  width: `calc(100vw - ${
    props.isNavigationExpanded ? NAV_EXPANDED_WIDTH : NAV_WIDTH
  }rem)`,
  flexDirection: "column",
}))``;
