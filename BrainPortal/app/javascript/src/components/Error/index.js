import React from "react";
import PropTypes from "prop-types";
import { StyledErrorContainer, StyledIcon } from "./styles";
import { Icon, Text } from "src/components/globals";

// Displays an error placeholder
const Component = ({ children, icon, size, ...rest }) => {
  return (
    <StyledErrorContainer {...rest}>
      {icon && (
        <StyledIcon>
          <Icon glyph={icon} size={size || 1} />
        </StyledIcon>
      )}
      <Text variant="title-sm">{children}</Text>
    </StyledErrorContainer>
  );
};

Component.defaultProps = {
  children: "Oops, something went wrong. Please refresh.",
};

// [children] is the message you want to display.
// [icon] is the optional icon to display.
// [size] is the icon's size.
Component.propTypes = {
  children: PropTypes.string,
  icon: PropTypes.string,
  size: PropTypes.number,
};

Component.displayName = "Error";

export default Component;
