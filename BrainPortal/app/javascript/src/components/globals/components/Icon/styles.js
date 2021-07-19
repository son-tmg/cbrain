import styled from "styled-components";
import { Box } from "src/components/globals";

export const InlineSvg = styled.svg.attrs((props) => ({
  fillRule: "evenodd",
  clipRule: "evenodd",
  strokeLinejoin: "round",
  strokeMiterlimit: "10",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-labelledby": "title",
  viewBox: "0 0 32 32",
  preserveAspectRatio: "xMidYMid meet",
  fit: true,
  id: props.glyph,
}))`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

export const SvgWrapper = styled(Box).attrs((props) => ({
  width: typeof props.size === "string" ? props.size : `${props.size}rem`,
  height: typeof props.size === "string" ? props.size : `${props.size}rem`,
  position: props.position || "relative",
}))`
  transition: ${(props) => props.theme.transitions.hover.off}

  &:hover {
    transition: ${(props) => props.theme.transitions.hover.on}
  }
  ${InlineSvg} {
    fill: ${(props) => props.fill};
    stroke: ${(props) => props.stroke};
    stroke-width: ${(props) => props.strokeWidth};
  }
`;