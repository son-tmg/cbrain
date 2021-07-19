import React from "react";
import PropTypes from "prop-types";
import { StyledLabel, StyledUnderlineInput } from "../styles";
import { Text } from "src/components/globals";

const Component = ({
  id,
  autoFocus,
  defaultValue,
  type,
  onChange,
  placeholder,
  value,
  children,
  ...rest
}) => {
  return (
    <StyledLabel {...rest}>
      <Text variant={"sm"}>{children}</Text>
      <StyledUnderlineInput
        id={id}
        type={type}
        autoFocus={autoFocus}
        defaultValue={defaultValue}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        {...rest}
      />
    </StyledLabel>
  );
};

// [autoFocus]            : Should the input autofocus
// [children]             : String that will appear as a label
// [disabled]             : Input's disabled state.
// [error]                : Input's error state. Will make border + label appear red.
// [id]                   : Input's id.
// [name]                 : Input's name.
// [onBlur]               : onBlur Event handler.
// [onChange]             : onChange Event handler.
// [type]                 : Type of input.
// [value]                : Value of input.
Component.propTypes = {
  autoFocus: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  type: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

Component.displayName = "FormUnderlineInput";

export default Component;
