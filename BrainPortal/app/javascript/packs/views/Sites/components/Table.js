import React from "react";
import ReactDom from "react-dom";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

class Table extends React.Component {
  constructor(props) {
    super(props);
    console.log("loading");

    this.state = {
      rowData: [
        {
          Name: "test",
          Description: "test",
          Managers: 35000,
          NumberOfUsers: 1,
          NumberOfProjects: 10,
        },
        {
          Name: "test2",
          Description: "test2",
          Managers: 35000,
          NumberOfUsers: 50,
          NumberOfProjects: 20,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <div className="ag-theme-alpine" style={{ height: 400, width: 1200 }}>
          <AgGridReact rowData={this.state.rowData}>
            <AgGridColumn field="Name" sortable={true}></AgGridColumn>
            <AgGridColumn field="Description" sortable={true}></AgGridColumn>
            <AgGridColumn field="Managers" sortable={true}></AgGridColumn>
            <AgGridColumn
              field="NumberOfUsers"
              sortable={true}
            ></AgGridColumn>
            <AgGridColumn
              field="NumberOfProjects"
              sortable={true}
            ></AgGridColumn>
          </AgGridReact>
        </div>
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDom.render(<Table />, document.getElementById("table"));
});
