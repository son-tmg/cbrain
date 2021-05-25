import React, { useEffect } from "react";
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import { withFormik } from "formik";
import { ThemeProvider } from "styled-components";
import Input from "../../../components/Form/components/Input";
import { theme } from "../../../theme"
import * as Yup from "yup";
import * as R from "ramda";

const SessionValidation = Yup.object().shape({
  username: Yup.string()
    .trim()
    .min(0)
    .required("A valid username is required."),
  password: Yup.string()
    .trim()
    .required("Password is required."),
});

const Component = ({ setFormHandler, setIsSubmitDisabled, ...props }) => {
  const {
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    values,
  } = props;

  // useEffect(() => {
  //   setFormHandler(handleSubmit);
  // }, [handleSubmit, setFormHandler]);

  // useEffect(() => {
  //   // Disable the submit until all required fields are completed without errors.
  //   setIsSubmitDisabled(() => {
  //     if (R.isEmpty(touched)) {
  //       return true;
  //     }
  //     return !R.isEmpty(errors);
  //   });
  // }, [errors, setIsSubmitDisabled, touched]);

  return (
    <React.Fragment>
      <Input
        style={{ padding: "1rem" }}
        width={"80%"}
        placeholder={"Enter your username"}
        name={"login"}
        htmlFor={"login"}
        type={"text"}
        // value={values.login}
        onChange={handleChange}
        onBlur={handleBlur}
        // error={touched.login && errors.login}
      />
      <Input
        style={{ padding: "1rem" }}
        width={"80%"}
        placeholder={"Enter your password"}
        name={"password"}
        htmlFor={"password"}
        type={"password"}
        // value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        // error={touched.password && errors.password}
      />
    </React.Fragment>
  );
};

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

Component.displayName = "LoginForm";

export default withFormik({
  mapPropsToValues: () => ({
    username: "",
    password: "",
  }),
  handleSubmit: async (values, { props }) => {
    const { username, password } = values;
    const status = await props.loginMutation({
      variables: {
        login: username,
        password,
      },
    });
    return status;
  },
  validationSchema: SessionValidation,
})(Component);

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