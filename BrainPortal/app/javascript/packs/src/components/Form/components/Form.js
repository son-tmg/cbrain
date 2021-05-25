import React from "react";
import PropTypes from "prop-types";
import { StyledForm } from "../styles";
import Loading from "src/components/Loading";

// Styled form component.
const Component = ({ children, loading, ...rest }) => {
  return (
    <StyledForm
      bg={"bg.default"}
      display={"flex"}
      flexDirection={"column"}
      position={"relative"}
      {...rest}
    >
      {loading && <Loading opacity={0.75} bg={"bg.default"} />}

      {children}
    </StyledForm>
  );
};

// [loading] : if true display a loading spinner.
// [children]: component
Component.propTypes = {
  children: PropTypes.node,
  loading: PropTypes.bool,
};

Component.displayName = "FormContainer";

export default Component;
