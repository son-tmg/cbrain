import React, { useState } from "react";
import PropTypes from "prop-types";
import Cell from "./Cell";
import { StyledDrawerIcon, StyledDrawerCell } from "../styles";

// Drawer that pops open under a table row with additional info that is not necessary at a glance.
const Component = ({ children, variant }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <React.Fragment>
      <Cell
        variant={variant}
        width={"auto"}
        flex={"unset"}
        cursor={children ? "pointer" : "auto"}
        onClick={() => setIsDrawerOpen(!!children && !isDrawerOpen)}
      >
        <StyledDrawerIcon show={!!children || variant === "head"} />
      </Cell>
      {isDrawerOpen && (
        <StyledDrawerCell isDrawerOpen={isDrawerOpen}>
          {children}
        </StyledDrawerCell>
      )}
    </React.Fragment>
  );
};

Component.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  variant: PropTypes.oneOf(["head"]),
};

Component.displayName = "Row";

export default Component;
