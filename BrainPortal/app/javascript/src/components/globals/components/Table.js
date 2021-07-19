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

// Base table elements

export const TableDefault = styled.table(
  compose(border, color, flexbox, layout, position, shadow, space)
);

export const HeadDefault = styled.thead(
  compose(border, color, flexbox, layout, position, shadow, space)
);

export const BodyDefault = styled.tbody(
  compose(border, color, flexbox, layout, position, shadow, space),
  `
    height: 100%;
    width: 100%;
    overflow: hidden;
  `
);

export const RowDefault = styled.tr(
  compose(border, color, flexbox, layout, position, shadow, space)
);

export const CellDefault = styled.td(
  compose(border, color, flexbox, layout, position, shadow, space, typography)
);
