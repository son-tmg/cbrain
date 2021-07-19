import React from "react";
import PropTypes from "prop-types";
import Transition from "./Transition";
import { Box, Text } from "src/components/globals";
import { StyledBanner } from "../styles";
import { LoginButton } from "src/components/Buttons";
import Particles from "./Particles";

// Banner Animation that moves either to the left of right depending on the toggle mechanism
const Component = ({
  isSignInView,
  setIsSignInView,
  toggle,
  setToggle,
  width,
}) => {
  return (
    <Transition
      runAnimation={toggle !== null}
      from={{ right: "0%", width: `${width}%` }}
      to={
        toggle
          ? {
              to: [{ width: `${width}%`, right: `${100 - width}%` }],
            }
          : {
              to: [{ right: "0%", width: `${width}%` }],
            }
      }
    >
      <StyledBanner>
        <Box
          position={"absolute"}
          zIndex={200}
          px={10}
          flexDirection={"column"}
        >
          <Box my={7}>
            {isSignInView ? (
              <Box flexDirection={"column"} alignItems={"center"}>
                <Text
                  variant={"3xl"}
                  color={"text.reverse"}
                  fontWeight={700}
                  textAlign={"center"}
                >
                  New to CBRAIN?
                </Text>

                <Text
                  variant={"md"}
                  color={"text.grey_200"}
                  my={7}
                  textAlign={"center"}
                  lineHeight={"1.5rem"}
                >
                  <Text
                    variant={"md"}
                    color={"text.grey_200"}
                    textAlign={"center"}
                    lineHeight={"1.5rem"}
                    fontWeight={700}
                  >
                    Hello!
                  </Text>
                  Enter a few details to start your journey.
                </Text>
              </Box>
            ) : (
              <Box flexDirection={"column"} alignItems={"center"}>
                <Text
                  variant={"3xl"}
                  color={"text.reverse"}
                  fontWeight={700}
                  textAlign={"center"}
                >
                  Not your first time?
                </Text>

                <Text
                  variant={"md"}
                  color={"text.grey_200"}
                  my={7}
                  textAlign={"center"}
                  lineHeight={"1.5rem"}
                >
                  <Text
                    variant={"md"}
                    color={"text.grey_200"}
                    textAlign={"center"}
                    lineHeight={"1.5rem"}
                    fontWeight={700}
                  >
                    Welcome back!
                  </Text>
                  {"We've"} missed you (and so did your data).
                </Text>
              </Box>
            )}
          </Box>
          <LoginButton
            bg={"bg.secondary"}
            onClick={() => {
              setToggle(!toggle);
              setIsSignInView(!isSignInView);
            }}
          >
            {isSignInView ? "Register" : "Sign In"}
          </LoginButton>
        </Box>
        <Particles />
      </StyledBanner>
    </Transition>
  );
};

Component.propTypes = {
  isSignInView: PropTypes.bool,
  setIsSignInView: PropTypes.func,
  toggle: PropTypes.bool,
  setToggle: PropTypes.func,
  width: PropTypes.number,
};

Component.displayName = "LoginBanner";

export default Component;
