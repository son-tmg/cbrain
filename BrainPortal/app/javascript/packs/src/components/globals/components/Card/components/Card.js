import styled from "styled-components";
import {
  border,
  color,
  compose,
  flexbox,
  layout,
  position,
  shadow,
  space,
} from "styled-system";

// Base Card component.

const CardDefault = styled("div")(
  compose(border, color, flexbox, layout, position, shadow, space),
  { overflow: "hidden" }
);

CardDefault.defaultProps = {
  bg: "bg.default",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  width: "100%",
  boxShadow: "mid",
  borderRadius: "2px",
};

export default CardDefault;
