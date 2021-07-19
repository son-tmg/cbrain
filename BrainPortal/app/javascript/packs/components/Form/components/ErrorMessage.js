import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "formik";
import { Box, Text } from "src/components/globals";

// Error message is a styled formik component that displays as an error if yup validation fails.
const Component = ({ children, name, ...rest }) => {
  return (
    <Box width="100%" justifyContent="flex-end" {...rest}>
      <Text color={"error.default"} variant="xs">
        <ErrorMessage name={name}>{children}</ErrorMessage>
      </Text>
    </Box>
  );
};

// [name]    : form's input name.
// [children]: component or string
Component.propTypes = {
  name: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};
Component.displayName = "FormErrorMessage";

export default Component;
