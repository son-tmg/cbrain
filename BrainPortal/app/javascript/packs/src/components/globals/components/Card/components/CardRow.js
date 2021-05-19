import React from "react";
import PropTypes from "prop-types";
import { Box, Text } from "../../../../globals";

// Card Row is a row that contains a label and value and stretches the width of a card.
// [value] can be provided as a string through props or as a child in which case, the style can be customized even more.
const Component = ({ label, value, children, ...rest }) => {
  return (
    <Box px={7} py={4} flexDirection={"column"} {...rest}>
      {label && (
        <Text color={"text.default"} variant={"sm"} mb={2}>
          {label.charAt(0).toUpperCase() + label.slice(1)}
        </Text>
      )}
      {value && (
        <Text
          color={"text.default"}
          variant={"xs"}
          textTransform={"capitalize"}
          flex={1}
        >
          {value || "n/a"}
        </Text>
      )}
      {children}
    </Box>
  );
};

Component.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.node,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.node,
  ]),
};
Component.displayName = "CardRow";

export default Component;
