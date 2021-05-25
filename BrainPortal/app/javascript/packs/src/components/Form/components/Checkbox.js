import React from "react";
import PropTypes from "prop-types";
import { StyledLabel, StyledInput } from "../styles";
import { Text } from "src/components/globals";

// Form's checkbox.
const Component = ({ checked, onChange, name, children, ...rest }) => {
  return (
    <StyledLabel {...rest}>
      <Text variant={"sm"}>{children}</Text>
      <StyledInput
        name={name}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
    </StyledLabel>
  );
};

// [checked] : current checked state of the checkbox
// [children]: either the text or component accompanying the checkbox
// [disabled]: current disabled state of checkbox.
// [error]   : current error state of checkbox. Will make label red if true.
// [name]    : name of form element.
// [onChange]: function handling the onChange event.
Component.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

Component.displayName = "FormCheckbox";

export default Component;
