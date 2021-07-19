import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { color, flexbox, space, typography, compose } from "styled-system";

// Base link element

const LinkDefault = styled(Link)(compose(color, flexbox, space, typography));

const StyledLink = styled(LinkDefault).attrs((props) => ({}))`
  flex-wrap: wrap;
  cursor: pointer;
  color: ${(props) => props.theme.colors.text.primary}
  text-decoration: ${(props) => props.textDecoration || "none"};
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;


  &:hover {
    color: ${(props) => props.color || props.theme.colors.bg["secondary"]};
    text-decoration: ${(props) => props.hoverTextDecoration || "underline"};
  }
  ${(props) =>
    props.variant === "secondary" &&
    css`
      color: ${props.theme.colors.text.secondary};
      &:hover {
        color: ${props.theme.colors.text.dark};
      }
    `}
    ${(props) =>
      props.variant === "taskbar" &&
      css`
        &:hover {
          text-decoration: underline;
          color: ${(props) => props.theme.colors.bg.default};
        }
      `}
`;

StyledLink.defaultProps = {
  display: "flex",
  color: "inherit",
};

const Component = ({ children, to, ...rest }) => {
  return (
    <StyledLink to={to} {...rest}>
      {children}
    </StyledLink>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string.isRequired,
};

export default StyledLink;
