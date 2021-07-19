import styled, { css } from "styled-components";
import { Box, Icon, Text } from "src/components/globals";

export const StyledBanner = styled(Box).attrs((props) => ({
  width: "100%",
  alignItems: "center",
  justifyContent: "space-between",
  border: "1px solid",
  borderColor: "bg.secondary",
  borderRadius: "2px",
  p: 2,
  zIndex: 1000,
  position: "relative",
  ...props,
}))`

&:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: ${(props) => props.theme.colors.bg.secondary};
  z-index: -1;
}
${(props) =>
  props.variant === "warn" &&
  css`
    border-color: ${props.theme.colors.warn.border};
    &:before {
      background: ${props.theme.colors.warn.alt};
    }
  `}
${(props) =>
  props.variant === "success" &&
  css`
    border-color: ${props.theme.colors.success.border};
    &:before {
      background: ${props.theme.colors.success.alt};
    }
  `}
${(props) =>
  props.variant === "error" &&
  css`
    border-color: ${props.theme.colors.error.border};
    &:before {
      background: ${props.theme.colors.error.alt};
    }
  `}


`;

export const StyledBannerText = styled(Text).attrs((props) => ({
  variant: "xs",
  color: (() => {
    switch (props.variant) {
      case "warn": {
        return "text.reverse";
      }
      case "success": {
        return "text.reverse";
      }
      case "error": {
        return "text.reverse";
      }
      default: {
        return "text.reverse";
      }
    }
  })(),
}))`
  * {
    font-size: inherit;
  }
`;

export const StyledBannerIcon = styled(Icon).attrs((props) => ({
  fill: props.theme.colors.bg.primary,
  stroke: props.theme.colors.bg.primary,
}))`
  cursor: pointer;
  ${(props) =>
    props.variant === "error" &&
    css`
      stroke: ${props.theme.colors.error.dark};
      fill: ${props.theme.colors.error.dark};
    `};
  ${(props) =>
    props.variant === "warn" &&
    css`
      stroke: ${props.theme.colors.warn.dark};
      fill: ${props.theme.colors.warn.dark};
    `};
  ${(props) =>
    props.variant === "success" &&
    css`
      stroke: ${props.theme.colors.success.dark};
      fill: ${props.theme.colors.success.dark};
    `}
`;
