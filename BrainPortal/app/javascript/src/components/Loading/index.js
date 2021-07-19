import React from "react";
import PropTypes from "prop-types";
import Spinner from "./components/Spinner";
import CircleSpinner from "./components/CircleSpinner";
import { StyledLoadingContainer } from "./styles";

/*
  An absolute positioned Loading spinner. Ensure that the parent has a "position: relative" for best results.
*/
const Component = (props) => {
  if (props.isCircle) {
    return <CircleSpinner {...props} />;
  }
  return (
    <StyledLoadingContainer backdrop={props.bg || "none"} {...props}>
      <Spinner fill={props.color} />
    </StyledLoadingContainer>
  );
};

// [color]    = loading icon color
// [bg]       = background color of area covered.
// [isCircle] = loads a circle spinner instead of the default.
Component.propTypes = {
  color: PropTypes.string,
  bg: PropTypes.string,
  isCircle: PropTypes.bool,
};

Component.displayName = "Loading";

export default Component;
