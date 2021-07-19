import styled, { css } from "styled-components";
import {
  border,
  color,
  flexbox,
  layout,
  space,
  typography,
  variant,
  compose,
} from "styled-system";

// Base Text elements with variants["xs","sm", "md",...] corresponding to the theme.
const TextDefault = styled.div(
  { userSelect: "none" },
  variant({
    scale: "text",
    variants: {},
  }),
  compose(border, color, flexbox, layout, space, typography)
);

const StyledText = styled(TextDefault)`
  white-space: ${(props) => props.whiteSpace};
  text-transform: ${(props) => props.textTransform};
  ${(props) =>
    props.error &&
    css`
      color: ${(props) => props.theme.colors.error.default};
    `}
  >* {
    font-size: inherit;
  }
`;

StyledText.defaultProps = {
  color: "text.default",
  textTransform: "none",
  variant: "md",
  whiteSpace: "normal",
};

export default StyledText;
