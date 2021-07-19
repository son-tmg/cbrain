import React from "react";
import PropTypes from "prop-types";
import Glyph from "./components/Glyph";
import { SvgWrapper, InlineSvg } from "./styles";
import { theme } from "src/theme";
import * as R from "ramda";

/*
    Loads SVG icons where the glyph property is a string that matches a svg icon in the Glyphs component. The [...rest] props could contain svg modifying properties such as stroke, strokeWidth, and fill among others.
*/

const Component = ({
  glyph,
  size = 1.5,
  onClick,
  fill,
  strokeWidth,
  stroke,
  ...rest
}) => {
  // This allows for accessing theme colors keys with a string e.g. "bg.primary" which is the preferred method, using hex codes is permitted but not encouraged.
  let fillColor =
    fill.charAt(0) === "#" || fill === "none"
      ? fill
      : R.path(fill.split("."), theme.colors);

  let strokeColor =
    stroke.charAt(0) === "#" || stroke === "none"
      ? stroke
      : R.path(stroke.split("."), theme.colors);

  return (
    <SvgWrapper
      size={size}
      fill={fillColor}
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      onClick={onClick}
      {...rest}
    >
      <InlineSvg>
        <Glyph glyph={glyph} stroke={strokeColor} fill={fillColor} />
      </InlineSvg>
    </SvgWrapper>
  );
};

Component.defaultProps = {
  stroke: "#000",
  fill: "#fff",
};

Component.propTypes = {
  glyph: PropTypes.string.isRequired,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
  stroke: PropTypes.string,
  size: PropTypes.number,
  onClick: PropTypes.func,
};

Component.displayName = "Icon";

export default Component;
