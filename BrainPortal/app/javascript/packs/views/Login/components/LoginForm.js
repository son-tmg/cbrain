import React, { useEffect, useState, useCallback } from "react";
import { render } from "react-dom";
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import { Formik, Form, Field, useFormik } from "formik";
import { ThemeProvider } from "styled-components";
import Input from "../../../components/Form/components/Input";
import ErrorMessage from "../../../components/Form/components/ErrorMessage";
import { theme } from "../../../theme"
import * as Yup from "yup";
import * as R from "ramda";

const Component = () => (
  <React.Fragment>
    <Formik
      initialValues={{ login: "", password: "" }}
      onSubmit={async values => {
        await new Promise(resolve => setTimeout(resolve, 500));
        alert(JSON.stringify(values, null, 2));
      }}
      validationSchema={
        Yup.object().shape({
          login: Yup.string()
            .trim()
            .min(0)
            .required("A valid username is required."),
          password: Yup.string()
            .trim()
            .required("Password is required."),
        })
      }
    >
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <Input
              style={{ padding: "1rem" }}
              width={"80%"}
              placeholder={"Enter your username"}
              name={"login"}
              htmlFor={"login"}
              type={"text"}
              value={values.login}
              onChange={handleChange}
              onBlur={handleBlur}
              form='session'
              error={touched.login && errors.login}
            />
            {errors.login && touched.login && (
              <div className="input-feedback">{errors.login}</div>
            )}

            <Input
              style={{ padding: "1rem" }}
              width={"80%"}
              placeholder={"Enter your password"}
              name={"password"}
              htmlFor={"password"}
              type={"password"}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              form='session'
              error={touched.password && errors.password}
            />
            {errors.password && touched.password && (
              <div className="input-feedback">{errors.password}</div>
            )}
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

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('form_login')
  const data = node.getAttribute("data")
  const data_json = JSON.parse(data)
  const append_to = data_json.append_to
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <Component />
    </ThemeProvider>,
    document.getElementById(append_to).appendChild(document.createElement('div')),
  )
})