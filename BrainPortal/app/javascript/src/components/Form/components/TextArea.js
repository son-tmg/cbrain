import React from "react";
import PropTypes from "prop-types";
import { StyledLabel, StyledTextArea } from "../styles";
import { Box, Text } from "src/components/globals";

// Form's textarea.
const Component = (props) => {
  return (
    <StyledLabel
      htmlFor={props.name}
      disabled={props.disabled}
      error={props.error}
      {...props}
    >
      <Box width="100%" flexDirection={"column"}>
        <Text mr={2} mb={2} variant={props.variant || "sm"}>
          {props.children}
        </Text>
        <StyledTextArea
          id={props.id}
          placeholder={props.placeholder}
          disabled={props.disabled}
          error={props.error}
          name={props.name}
          onBlur={(val) => props.onBlur(val)}
          onChange={(val) => props.onChange(val)}
          autoFocus={props.autoFocus}
          type={props.type}
          value={props.value}
          variant={props.variant || "sm"}
          mb={2}
          {...props}
        />
      </Box>
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
// [variant]              : Text variant for label, defaults to "sm".
Component.propTypes = {
  autoFocus: PropTypes.bool,
  children: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  variant: PropTypes.string,
};

Component.displayName = "FormTextArea";

export default Component;
