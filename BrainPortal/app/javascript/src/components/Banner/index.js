import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyledBanner, StyledBannerText, StyledBannerIcon } from "./styles";

/*
Banner that should be used to notify a user inside a form or page.
*/
const Component = ({ children, variant, ...rest }) => {
  const [showBanner, setShowBanner] = useState(true);
  return (
    showBanner && (
      <StyledBanner variant={variant} {...rest}>
        <StyledBannerText variant={variant}>{children}</StyledBannerText>
        <StyledBannerIcon
          glyph="close"
          size={1}
          variant={variant}
          onClick={() => setShowBanner(false)}
        />
      </StyledBanner>
    )
  );
};

Component.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /*
  Three variants and a default
  success: green,
  warn: yellow,
  error: red,
  default: cbrain blue
  */
  variant: PropTypes.oneOf(["success", "error", "warn"]),
};

export default Component;
