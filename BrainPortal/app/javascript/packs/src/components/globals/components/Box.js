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
  typography,
} from "styled-system";

// Basic div that has a flex property. Can be entirely customized through props.

const BoxDefault = styled("div")(
  compose(border, color, flexbox, layout, position, shadow, space, typography)
);

BoxDefault.defaultProps = {
  display: "flex",
};

export default BoxDefault;
