import React, { useContext } from "react";
import PropTypes from "prop-types";
import * as R from "ramda";
import Loading from "src/components/Loading";
import Error from "src/components/Error";
import Empty from "src/components/Empty";
import Row from "./Row";
import Drawer from "./Drawer";
import { THead, TBody } from "src/components/globals";
import { StyledTableWrapper, StyledTable } from "../styles";

/*
 Main Table component.
 Main functionality:
 - Will show error + loading + empty views if the data is not ready (props passed from the parent)
 - Handles the checkboxes.
 - Renders the rows, cells and drawer.
rows          = data for each row.
columns       = data for each header.
renderColumns = a function passed to table that renders the columns in a row (aka. the headers)
renderRows    = a function passed to table that renders the cells in a row

*/
const Component = ({
  columns = [],
  renderColumns,
  rows = [],
  renderRows,
  renderDrawer,
  checked,
  setChecked,
  isLoading,
  isError,
  empty,
  ...rest
}) => {
  const hasCheckbox = !!(setChecked || checked);

  return (
    <React.Fragment>
      <StyledTableWrapper >
        {isLoading && <Loading bg="bg.default" />}
        {isError && <Error bg="bg.default" />}
        {!isError && !isLoading && rows.length === 0 && (
          <Empty icon={empty.icon} size={20}>
            {empty.message}
          </Empty>
        )}
        {!isLoading && !isError && (
          <StyledTable>
            <THead>
              <Row
                variant="head"
                checked={
                  checked &&
                  checked.length > 0 &&
                  checked.length === rows.length
                }
                hasCheckbox={hasCheckbox}
                handleCheckbox={() =>
                  setChecked &&
                  setChecked(() =>
                    checked && checked.length === rows.length
                      ? []
                      : R.map((r) => r.id, rows)
                  )
                }
              >
                {columns.map((column) =>
                  renderColumns({ data: column, variant: "head", rows })
                )}
                {renderDrawer && <Drawer variant={"head"} opacity={0.5} />}
              </Row>
            </THead>

            <TBody rows={rows}>
              {!isLoading &&
                rows.map((row) => {
                  return (
                    <Row
                      key={row.id}
                      hasCheckbox={hasCheckbox}
                      checked={checked && R.includes(row.id, checked)}
                      handleCheckbox={() =>
                        setChecked &&
                        setChecked(() =>
                          checked.includes(row.id)
                            ? R.filter((tid) => tid !== row.id, [...checked])
                            : [...checked, row.id]
                        )
                      }
                    >
                      {renderRows({ columns, data: row })}
                      {renderDrawer && (
                        <Drawer>{renderDrawer({ data: row })}</Drawer>
                      )}
                    </Row>
                  );
                })}
            </TBody>
          </StyledTable>
        )}
      </StyledTableWrapper>
    </React.Fragment>
  );
};

Component.propTypes = {
  columns: PropTypes.array,
  renderColumns: PropTypes.func,
  rows: PropTypes.array,
  renderRows: PropTypes.func,
  renderDrawer: PropTypes.func,
  checked: PropTypes.array,
  setChecked: PropTypes.func,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  empty: PropTypes.shape({
    icon: PropTypes.string,
    message: PropTypes.string,
  }),
  data: PropTypes.array
};

Component.displayName = "Table";

export default Component;
