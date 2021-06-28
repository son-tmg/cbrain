import React from "react";
import ReactDom from "react-dom";
import { Formik, Field } from "formik";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";
import Input from "../../../components/Form/components/Input";
import * as Yup from "yup";

const Component = () => (

  <React.Fragment>
    <Formik
      initialValues={{ name: "", description: "", checked: [] }}
      onSubmit={async (values) => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {(props) => {
        const { values, handleChange, handleBlur, handleSubmit } =
          props;
        return (
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <Input
              style={{ padding: "1rem" }}
              width={"80%"}
              name={"name"}
              htmlFor={"name"}
              type={"text"}
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              form="newSite"
            />

            <label>Description</label>
            <textarea
              style={{ padding: "1rem" }}
              width={"80%"}
              name={"description"}
              htmlFor={"description"}
              type={"text"}
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              form="newSite"
            />

            <br></br>

            <label>Regular User</label>
            <Field
              type="checkbox"
              name="checked"
              htmlFor={"Regular User"}
              value="regularUser"
              form="newSite"
            />

            <br></br>

            <label>Site Manager</label>
            <Field
              type="checkbox"
              name="checked"
              htmlFor={"Site Manager"}
              value="siteManager"
              form="newSite"
            />
          </form>
        );
      }}
    </Formik>
  </React.Fragment>
);

/*
function NewSiteForm() {

    const formik = useFormik({
        initialValues: {
          name: '',
          description: '',
          login: '',
          regularUsers: false,
          siteManager: false
        },

        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        }
      });

    return (
      <div>
        <h1>Add New Site</h1>

        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Name</label>

          <Input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            style={{padding : "1rem"}}
          />

          <label htmlFor="description">Description</label>

          <textarea
            id="description"
            name="description"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            style={{padding : "1rem"}}
          />

          <br></br>

          <label htmlFor="checkbox">Regular User</label>
          <Input type="checkbox" id="site_user_ids"/>

          <label htmlFor="checkbox" id="site_manager_ids">Site Manager</label>
          <Input type="checkbox" />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  
}

*/

document.addEventListener("DOMContentLoaded", () => {
  const node = document.getElementById("newSiteForm");
  const data = node.getAttribute("data");
  const data_json = JSON.parse(data);
  const append_to = data_json.append_to;

  ReactDom.render(
    <ThemeProvider theme={theme}>
      <Component />
    </ThemeProvider>,
    document
      .getElementById(append_to)
      .appendChild(document.createElement("div"))
  );
});
