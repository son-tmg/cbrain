import React from "react";
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import { StyledInput, StyledLabel } from "../styles";
import { Text } from "../../globals";
import { theme } from "../../../../theme"
import { ThemeProvider } from "styled-components";
import { withFormik, useFormik} from "formik";

const validate = values => {
  const errors = {};

  // if (!values.firstName) {
  //   errors.firstName = 'Required';
  // } else if (values.firstName.length > 15) {
  //   errors.firstName = 'Must be 15 characters or less';
  // }
};

// Form's input.
const Component = ({
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

  const handleOnBlur = ((e) => {
    console.log(e.target)
  });

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
        onBlur={handleOnBlur.bind(this)}
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
Component.propTypes = {
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

Component.displayName = "FormInput";

export default Component;


document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('input_data')
  const data = node.getAttribute("data")
  const data_json = JSON.parse(data)
  const append_to = data_json.append_to
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <Component name={data_json.name} placeholder={data_json.placeholder} />
    </ThemeProvider>,
    document.getElementById(append_to).appendChild(document.createElement('div')),
  )
})