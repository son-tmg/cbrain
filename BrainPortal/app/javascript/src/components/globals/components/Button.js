import styled from "styled-components";
import {
  border,
  color,
  flexbox,
  layout,
  shadow,
  space,
  compose,
} from "styled-system";

// Basic button component customizable through props.
const ButtonDefault = styled.button(
  compose(border, color, flexbox, layout, shadow, space)
);

const StyledButton = styled(ButtonDefault).attrs((props) => ({ ...props }))`
  cursor: pointer;
  text-decoration: none;
  transition: ${(props) => props.theme.transitions.hover.off};

  &:focus {
    outline: none;
  }

  &:hover {
    transition: ${(props) => props.theme.transitions.hover.on};
  }
`;

StyledButton.defaultProps = {
  display: "flex",
  alignItems: "center",
  p: 2,
  border: 0,
};

export default StyledButton;
