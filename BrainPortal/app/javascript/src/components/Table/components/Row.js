import React from "react";
import PropTypes from "prop-types";
import { Checkbox } from "src/components/Form/components/Checkbox";
import Cell from "./Cell";
import { StyledTableRow } from "../styles";

// Table rows, can have variant "head" to describe header row.
const Component = ({
  checked,
  children,
  handleCheckbox,
  hasCheckbox,
  variant,
  ...rest
}) => {
  return (
    <StyledTableRow variant={variant} {...rest}>
      {hasCheckbox && (
        <Cell
          variant={variant}
          width={"auto"}
          flex={"unset"}
          color={"text.grey_100"}
        >
          <Checkbox
            display={"block"}
            checked={checked}
            onChange={() => handleCheckbox && handleCheckbox()}
          />
        </Cell>
      )}
      {children}
    </StyledTableRow>
  );
};

Component.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  handleCheckbox: PropTypes.func,
  hasCheckbox: PropTypes.bool,
  renderDrawer: PropTypes.func,
  variant: PropTypes.oneOf(["head"]),
};

Component.displayName = "Row";

export default Component;
