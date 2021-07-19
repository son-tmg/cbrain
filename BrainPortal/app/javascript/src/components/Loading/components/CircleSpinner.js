import React from "react";
import PropTypes from "prop-types";
import { StyledCircleSpinner, StyledCircle } from "../styles";

const Component = (props) => {
  return (
    <StyledCircleSpinner>
      <StyledCircle bg={props.bg} />
      <StyledCircle delay={true} bg={props.bg} />
    </StyledCircleSpinner>
  );
};

Component.propTypes = {
  bg: PropTypes.string,
};

Component.displayName = "CircleSpinner";

export default Component;
