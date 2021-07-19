import React from "react";
import PropTypes from "prop-types";
import { StyledTableCell, StyledText } from "../styles";
import { Box, Icon } from "src/components/globals";

//  Handles every table cell.
const Component = ({
  children,
  handleClick,
  orderBy,
  sortBy,
  color = "text.grey_300",
  variant,
  ...rest
}) => {
  return (
    <StyledTableCell
      variant={variant}
      isSelected={sortBy}
      onClick={handleClick}
      {...rest}
    >
      <StyledText variant={variant === "head" ? "sm" : "xs"} color={color}>
        {children}
      </StyledText>
      {orderBy && (
        <Box flexDirection="column" px={2}>
          {
            <Icon
              glyph={"caret-up"}
              size={0.5}
              opacity={sortBy && orderBy === "ASC" ? 1 : 0.5}
            />
          }
          <Icon
            glyph={"caret-down"}
            size={0.5}
            opacity={sortBy && orderBy === "DESC" ? 1 : 0.5}
          />
        </Box>
      )}
    </StyledTableCell>
  );
};

// variant:
//  - checkbox: a cell with a checkbox.
//  - drawer: a cell that opens and closes.
//  - head: a header cell.
//  - line: a small/simple vertical cell.
//  - link: a cell with a text link.

Component.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.object,
  ]),
  color: PropTypes.string,
  handleClick: PropTypes.func,
  orderBy: PropTypes.oneOf(["ASC", "DESC"]),
  sortBy: PropTypes.bool,
  variant: PropTypes.oneOf(["checkbox", "drawer", "head", "line", "link"]),
};

Component.displayName = "Cell";

export default Component;
