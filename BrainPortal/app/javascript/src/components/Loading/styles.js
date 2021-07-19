import styled, { css } from "styled-components";
import { Box } from "src/components/globals";
import { animated } from "react-spring";
import * as R from "ramda";



export const StyledLoadingContainer = styled(Box).attrs((props) => ({
  flex: "auto",
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "stretch",
  position: "absolute",
  width: "100%",
  height: "100%",
  zIndex: 1000,
}))`
  ${(props) =>
    props.opacity &&
    css`
      background: none;
      opacity: 1;
      &::before {
        content: "";
        background: ${(props) =>
          R.path(R.split(".", props.bg), props.theme.colors)};
        width: 100%;
        height: 100%;
        position: absolute;
        opacity: ${props.opacity};
      }
    `}
`;

export const StyledSpinnerBox = styled(animated.div)`
  will-change: transform;
  margin: 0 ${(props) => props.theme.space[2]};

  ${(props) =>
    props.variant === "sm" &&
    css`
      width: 2px;
      height: 10px;
    `};
  ${(props) => props.variant === "md" && css``}
  ${(props) =>
    props.variant === "lg" &&
    css`
      width: 25px;
      height: 100px;
    `};
`;

/*
=============================================================
| Circle Spinner
=============================================================
*/
export const StyledCircleSpinner = styled("div")`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const StyledCircle = styled(Box).attrs((props) => ({
  width: "100%",
  height: "100%",
  bg: "bg.primary",
  position: "absolute",
  top: 0,
  left: 0,
  ...props,
}))`
  @-webkit-keyframes sk-bounce {
    0%,
    100% {
      -webkit-transform: scale(0);
    }
    50% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes sk-bounce {
    0%,
    100% {
      transform: scale(0);
      -webkit-transform: scale(0);
    }
    50% {
      transform: scale(1);
      -webkit-transform: scale(1);
    }
  }

  border-radius: 50%;
  opacity: 0.6;

  -webkit-animation: sk-bounce 2s infinite ease-in-out;
  animation: sk-bounce 2s infinite ease-in-out;

  ${(props) =>
    props.delay &&
    css`
      -webkit-animation-delay: -1s;
      animation-delay: -1s;
    `}
`;
