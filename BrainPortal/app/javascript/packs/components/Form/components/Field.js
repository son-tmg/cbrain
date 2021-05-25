import React from "react";
import PropTypes from "prop-types";
import { StyledField } from "../styles";

// Styled field component
const Component = ({ children, ...rest }) => {
  return <StyledField {...rest}>{children}</StyledField>;
};

Component.displayName = "FormField";

// [children]: Component
Component.propTypes = {
  children: PropTypes.node,
};
export default Component;
