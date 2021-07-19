import React from "react";
import PropTypes from "prop-types";
import Transition from "./Transition";
import { Box, Text } from "src/components/globals";
import { StyledMain, StyledLogo } from "../styles";

// Banner Animation that moves either to the left of right depending on the toggle mechanism

const Component = ({ children, isSignInView, toggle, width }) => {
  return (
    <Transition
      runAnimation={toggle !== null}
      from={{ left: "0%", width: `${width}%` }}
      to={
        toggle
          ? {
              to: [{ width: `${width}%`, left: `${100 - width}%` }],
            }
          : {
              to: [{ left: "0%", width: `${width}%` }],
            }
      }
    >
      <StyledMain px={isSignInView ? 10 : 4}>
        <StyledLogo>
          <div>
            <img src="src/assets/cbrain-logo-max.png" />
          </div>
        </StyledLogo>
        <Text
          variant={"4xl"}
          fontWeight={700}
          color={"bg.secondary"}
          pt={isSignInView ? 4 : 7}
        >
          {isSignInView ? "Sign in to CBRAIN" : "Create Account"}
        </Text>
        <Box width={"100%"}>{children}</Box>
      </StyledMain>
    </Transition>
  );
};

Component.propTypes = {
  isSignInView: PropTypes.bool,
  setIsSignInView: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  width: PropTypes.number,
  toggle: PropTypes.bool,
};

Component.displayName = "LoginMain";

export default Component;
