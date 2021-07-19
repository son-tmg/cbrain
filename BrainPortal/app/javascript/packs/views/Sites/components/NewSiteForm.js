import React from "react";
import ReactDom from "react-dom";
import { Formik, Field } from "formik";
import { ThemeProvider } from "styled-components";
import { theme } from "src/theme";
import Input from "src/components/Form/components/Input";
import PropTypes from "prop-types";
import * as Yup from "yup";

const Component = () => (

  <React.Fragment>
    <Formik
      initialValues={{ 'site[name]': "", 'site[description]': "", checked: [] }}
      onSubmit={async (values) => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {(props) => {
        const { values, touched, handleChange, handleBlur, handleSubmit } =
          props;
        return (
          <form onSubmit={handleSubmit}>
            <label>Name</label>

            <Input
              style={{ padding: "1rem" }}
              width={"80%"}
              name={"site[name]"}
              placeholder={"Enter the site name"}
              htmlFor={"site[name]"}
              type={"text"}
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              form="site"
            />

            <label>Description</label>
            <textarea
              style={{ padding: "1rem" }}
              width={"80%"}
              name={"site[description]"}
              placeholder={"Enter the description"}
              htmlFor={"site[description]"}
              type={"text"}
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              form="site"
            />


             <br></br>

            <label>Regular User</label>
            <Field
              type="checkbox"
              name="checked"
              htmlFor={"Regular User"}
              value="user_id"
              form="site"
            />

            <br></br>

            <label>Site Manager</label>
            <Field
              type="checkbox"
              name="checked"
              htmlFor={"Site Manager"}
              value="manager_id"
              form="site"
            /> 

          </form>
        );
      }}
    </Formik>
  </React.Fragment>
);

Component.propTypes = {
  handleBlur: PropTypes.func,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  setIsSubmitDisabled: PropTypes.func,
  setFormHandler: PropTypes.func,
  errors: PropTypes.object,
  touched: PropTypes.object,
  values: PropTypes.object,
};

document.addEventListener("DOMContentLoaded", () => {
  const node = document.getElementById("form_site");
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
