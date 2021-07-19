import React from "react";
import ReactDom from "react-dom";
import { ThemeProvider } from "styled-components";
import { Table, Cell } from "src/components/Table"
import { theme } from "src/theme";

const Component = (props) => {

    return(
        <React.Fragment>
            <Table
              columns= {["name", "description", "managers","number of users","number of projects"]}

              empty={{ icon: "tools", message: "There are no tools." }}
              
              renderColumns={({
                data,
                rows,
                sortBy = "name",
                setSortBy,
                orderBy = "ASC",
                setOrderBy,
              }) => {
                return (
                  <Cell
                    key={data}
                    variant={"head"}
                    sortBy={sortBy === data}
                    orderBy={orderBy}
                    handleClick={() => {
                      if (rows.length === 0) {
                        return;
                      }
                      setSortBy(data);
                      setOrderBy(orderBy === "ASC" ? "DESC" : "ASC");
                    }}
                  >
                    {data}
                  </Cell>
                );
              }}

              rows= {(JSON.parse(props.sites))}

              renderRows={({ columns, data }) => {
                return columns.map((c, i) => {
                  return <Cell key={i}>{data[c] || "-"}</Cell>;
                });
              }}
            >

            </Table>
        </React.Fragment>
    )
}


document.addEventListener("DOMContentLoaded", () => {
    const node = document.getElementById("sites");
    const data = node.getAttribute("data");


    ReactDom.render(
      <ThemeProvider theme={theme}>
        <Component sites = {data}/>
      </ThemeProvider>,
      document.getElementById('sites').appendChild(document.createElement('div')),

    );
  });
  