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

// Base form elements.

export const FormDefault = styled.form(
  compose(border, color, flexbox, layout, position, shadow, space)
);

export const FieldDefault = styled.fieldset(
  compose(border, color, flexbox, layout, position, shadow, space)
);

export const LabelDefault = styled.label(
  compose(border, color, flexbox, layout, position, shadow, space)
);

export const InputDefault = styled.input(
  compose(border, color, flexbox, layout, position, shadow, space, typography),
  { cursor: "pointer" }
);

export const TextAreaDefault = styled.textarea(
  compose(border, color, flexbox, layout, position, shadow, space)
);
