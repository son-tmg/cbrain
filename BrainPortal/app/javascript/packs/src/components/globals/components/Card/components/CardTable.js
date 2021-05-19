import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  border,
  color,
  flexbox,
  layout,
  space,
  typography,
} from "styled-system";

// a simple + styled table to display in a card row.

export const CardTable = styled("table").attrs((props) => ({
  width: "100%",
  flex: 1,
  border: "1px solid",
  borderColor: "bg.border",
  maxWidth: "500px",
  ...props,
}))`
    ${border}
    ${color}
    ${flexbox}
    ${layout}
    ${space}
    border-collapse: collapse;
    border-spacing: 0;
`;

const StyledTh = styled("th").attrs((props) => ({
  width: "unset",
  flex: 1,
  border: "1px solid",
  borderColor: "bg.border",
  p: 2,
  justifyContent: "center",
  bg: props.variant === "head" ? "bg.light" : "bg.default",
  fontWeight: 400,
  color: "text.grey_400",
  ...props,
}))`
    ${border}
    ${color}
    ${flexbox}
    ${layout}
    ${space}
    ${typography}

    text-align:center;
    text-transform: capitalize;
    font-size: ${(props) => props.theme.text.sm.fontSize};
`;

const StyledTd = styled("td").attrs((props) => ({
  width: "unset",
  flex: 1,
  borderRight: "1px solid",
  borderColor: "bg.border",
  p: 2,
  justifyContent: "center",
  bg: props.variant === "head" ? "bg.light" : "bg.default",
  ...props,
}))`
    ${border}
    ${color}
    ${flexbox}
    ${layout}
    ${space}
    ${typography}

    text-align:center;
    font-size: ${(props) => props.theme.text.xs.fontSize};

`;

export const CardTableCell = (props) => {
  return props.variant === "head" ? (
    <StyledTh {...props}>{props.children}</StyledTh>
  ) : (
    <StyledTd {...props}>{props.children}</StyledTd>
  );
};

CardTableCell.propTypes = {
  variant: PropTypes.oneOf(["head"]),
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.node,
    PropTypes.string,
  ]),
};
