import React from "react";
import PropTypes from "prop-types";
import { StyledInput, StyledLabel } from "../styles";
import { Text } from "../../../src/components/globals";

// Form's input.
const Input = ({
  id,
  autoFocus,
  checked,
  disabled,
  error,
  name,
  onBlur,
  onChange,
  placeholder,
  value,
  children,
  type,
  variant = "sm",
  additionalInformation,
  ...rest
}) => {
  return (
    <StyledLabel htmlFor={name} disabled={disabled} error={error} {...rest}>
      {children && (
        <Text mr={2} mb={2} variant={variant}>
          {children}
        </Text>
      )}
      <StyledInput
        id={id}
        checked={checked}
        autoFocus={autoFocus}
        disabled={disabled}
        error={error}
        name={name}
        onBlur={(val) => onBlur(val)}
        onChange={(val) => onChange(val)}
        placeholder={placeholder}
        value={value}
        variant={variant}
        type={type}
        mb={2}
        {...rest}
      />
      {additionalInformation && (
        <i>
          <Text variant="xs">Note: {additionalInformation}</Text>
        </i>
      )}
    </StyledLabel>
  );
};

// [additionalInformation]: text that appears as a small note under the input. Could be info about what input is expected for example.
// [autoFocus]            : Should the input autofocus
// [checked]              : Input's checked state.
// [children]             : String that will appear as a label
// [disabled]             : Input's disabled state.
// [error]                : Input's error state. Will make border + label appear red.
// [id]                   : Input's id.
// [name]                 : Input's name.
// [onBlur]               : onBlur Event handler.
// [onChange]             : onChange Event handler.
// [type]                 : Type of input.
// [value]                : Value of input.
// [variant]              : Text variant for label, defaults to "sm".
Input.propTypes = {
  additionalInformation: PropTypes.string,
  autoFocus: PropTypes.bool,
  checked: PropTypes.bool,
  children: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string,
  variant: PropTypes.string,
};

Input.displayName = "FormInput";

export default Input;
