import React from "react";
import PropTypes from "prop-types";
import { StyledEmptyContainer, StyledIcon } from "./styles";
import { Icon, Text } from "src/components/globals";

// Displays an empty placeholder.
const Component = ({ children, icon, size, ...rest }) => {
  return (
    <StyledEmptyContainer {...rest}>
      {icon && (
        <StyledIcon>
          <Icon glyph={icon} size={size} fill={"bg.wash"} strokeWidth={0.2} />
        </StyledIcon>
      )}
      <Text variant="title-sm">{children}</Text>
    </StyledEmptyContainer>
  );
};

// [children] is the message you want to display.
// [icon] is the optional icon to display.
// [size] is the icon's size in rem.
Component.propTypes = {
  children: PropTypes.string,
  icon: PropTypes.string,
  size: PropTypes.number,
};

Component.defaultProps = {
  children: "There is nothing to see here.",
};

Component.displayName = "Empty";

export default Component;
