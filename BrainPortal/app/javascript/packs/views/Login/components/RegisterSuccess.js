import React from "react";
import PropTypes from "prop-types";
import { Box, Text } from "src/components/globals";

const Component = () => {
  return (
    <Box justifyContent={"center"}>
      <Text variant={"sm"}>Success! Your account was created!</Text>
    </Box>
  );
};

Component.propTypes = {
  email: PropTypes.string.isRequired,
};
Component.displayName = "RegisterSuccess";

export default Component;
