import styled, { css } from "styled-components";
import { Box, Icon, Text } from "src/components/globals";
import { Table, TRow, TCell } from "src/components/globals";
import { NAV_WIDTH, NAV_EXPANDED_WIDTH } from "src/views/pages/styles";

export const StyledTableWrapper = styled(Box).attrs((props) => ({
  position: "relative",
  flex: 1,
  width: `calc(100vw - ${
    props.isNavigationExpanded ? NAV_EXPANDED_WIDTH : NAV_WIDTH
  }rem)`,
  overflow: "scroll",
  ...props,
}))``;

export const StyledTable = styled(Table).attrs((props) => ({
  width: "100%",
  height: "100%",
  bg: "bg.default",
  ...props,
}))`
  border-collapse: collapse;
  border-spacing: 0;
  position: relative;
`;

export const StyledTableRow = styled(TRow).attrs((props) => ({
  bg: props.variant === "head" ? "bg.light" : "bg.default",
  display: "flex",
  borderBottom: "1px solid",
  borderColor: "bg.border",
  position: "relative",
  flexWrap: props.variant === "head" ? "nowrap" : "wrap",
}))`
  box-shadow: 5px 2px 10px 0px rgb(208, 213, 224, 0.5),
    0px 2px 3px 0px rgb(208, 213, 224, 0.5);
  &:hover {
    background: ${(props) =>
      props.variant !== "head" && props.theme.colors.bg.alt};
  }
`;

export const StyledTableCell = styled(TCell).attrs((props) => ({
  px: 4,
  py: props.variant === "head" ? 4 : 3,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  minWidth: props.width || "10rem",
  width: props.width || "10rem",
  flex: props.flex || 1,
  ...props,
}))`
  white-space: nowrap;
  overflow: hidden;
  cursor: ${(props) => props.cursor || "auto"};

  ${(props) =>
    props.variant === "head" &&
    css`
      background: ${props.isSelected && "#EBEEF1"};
      cursor: ${props.cursor || "pointer"};
      ${Text} {
        color: ${props.theme.colors.text.grey_400};
        text-transform: capitalize;
      }
      svg {
        fill: ${props.theme.colors.bg.grey_400};
        stroke: ${props.theme.colors.bg.grey_400};
      }
      &:hover {
        background: ${(props) => props.onClick && css`#ebeef1`};
        transition: background 0.2s ease-in-out;
      }
    `};

  ${(props) =>
    props.variant === "line" &&
    css`
      min-width: 0.25rem;
      width: 0.25rem;
      height: 100%;
      position: absolute;
      padding: 0;
    `};
`;

export const StyledDrawerIcon = styled(Icon).attrs((props) => ({
  size: 1,
  glyph: "caret-down",
  stroke: "bg.primary",
  fill: "bg.primary",
  opacity: props.show ? 1 : 0,
  visibility: props.show ? "visible" : "hidden",
}))``;

export const StyledDrawerCell = styled(StyledTableCell).attrs((props) => ({
  display: props.isDrawerOpen ? "block" : "none",
  width: "100%",
  flex: "unset",
  p: 4,
  bg: "bg.alt",
}))`
  order: 1;
`;

export const StyledLine = styled(TCell).attrs((props) => ({
  pr: "0.2rem",
  height: "100%",
  position: "absolute",
}))``;

export const StyledText = styled(Text).attrs((props) => ({}))`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  > * {
    font-size: ${(props) => props.theme.text[props.variant].fontSize};
  }
`;
