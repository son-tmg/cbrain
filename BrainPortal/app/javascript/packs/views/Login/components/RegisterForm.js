import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import * as R from "ramda";
import PropTypes from "prop-types";
import { withFormik } from "formik";
import { Checkbox, Field, Input, ErrorMessage } from "src/components/Form";
import { Text } from "src/components/globals";
import Select from "src/components/Select";
import moment from "moment-timezone";

// [NOTE]: With the current API (5.1.3) you can only create an account as
// an administrator. So you must log in to have the following form work.

const SessionValidation = Yup.object().shape({
  fullName: Yup.string()
    .trim()
    .min(0)
    .required("Your full name is required."),
  email: Yup.string()
    .trim()
    .min(0)
    .required("A valid email is required."),
  login: Yup.string()
    .trim()
    .min(0)
    .required("A valid username is required. One letter + alphanums."),
  password: Yup.string()
    .trim()
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/\d/, "Password must contain a number."),
  passwordConfirmation: Yup.string()
    .trim()
    .oneOf([Yup.ref("password"), null], "Passwords must match."),
});

const Component = ({ setFormHandler, setIsSubmitDisabled, ...props }) => {
  const {
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    values,
    setValues,
  } = props;
  const timeZones = moment.tz.names();
  useEffect(() => {
    setFormHandler(handleSubmit);
  }, [handleSubmit, setFormHandler]);

  useEffect(() => {
    setIsSubmitDisabled(() => {
      if (R.isEmpty(touched)) {
        return true;
      }
      return !R.isEmpty(errors);
    });
  }, [errors, setIsSubmitDisabled, touched]);

  return (
    <React.Fragment>
      <Input
        mt={2}
        width={"100%"}
        name={"fullName"}
        htmlFor={"fullName"}
        type={"text"}
        value={values.fullName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.fullName && errors.fullName}
        additionalInformation={
          "One letter + alphanums. By convention: first letter of your first name + last name. For John Doe: 'jdoe'"
        }
      >
        Full Name
      </Input>
      <Input
        mt={2}
        width={"100%"}
        name={"email"}
        htmlFor={"email"}
        type={"text"}
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.email && errors.email}
        additionalInformation={
          "We will send you an email to validate your account."
        }
      >
        Email
      </Input>
      <ErrorMessage name="email" />
      <Input
        mt={2}
        width={"100%"}
        name={"login"}
        htmlFor={"login"}
        type={"text"}
        value={values.login}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.login && errors.login}
      >
        Username
      </Input>
      <ErrorMessage name="login" />
      <Input
        mt={2}
        width={"100%"}
        name={"password"}
        htmlFor={"password"}
        type={"password"}
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.password && errors.password}
      >
        Password
      </Input>
      <ErrorMessage name="password" />
      <Input
        mt={2}
        width={"100%"}
        name={"passwordConfirmation"}
        htmlFor={"passwordConfirmation"}
        type={"password"}
        value={values.passwordConfirmation}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.passwordConfirmation && errors.passwordConfirmation}
      >
        Password Confirmation
      </Input>

      <ErrorMessage name="passwordConfirmation" />
      <Input
        mt={2}
        width={"100%"}
        name={"city"}
        htmlFor={"city"}
        type={"text"}
        value={values.city}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.city && errors.city}
      >
        City
      </Input>
      <Input
        mt={2}
        width={"100%"}
        name={"country"}
        htmlFor={"country"}
        type={"text"}
        value={values.country}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.country && errors.country}
      >
        Country
      </Input>
      <Field m={0}>
        <Text mr={2} mb={2} variant={"sm"}>
          Select the timezone:
        </Text>
        <Select
          name={"timeZone"}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.timeZone}
          error={touched.timeZone && errors.timeZone}
          flex={1}
        >
          {timeZones.map((timeZone) => {
            return (
              <option key={timeZone} value={timeZone}>
                (GMT {moment.tz(timeZone).format("Z")}){" " + timeZone}
              </option>
            );
          })}
        </Select>
      </Field>
      <Field m={0}>
        <Text mr={2} mb={2} variant={"sm"}>
          Select the account type:
        </Text>
        <Select
          name={"type"}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.type}
          error={touched.type && errors.type}
          flex={1}
        >
          <option key={"NormalUser"} value={"NormalUser"}>
            Normal User
          </option>
        </Select>
        <ErrorMessage style={{ justifyContent: "flex-start" }} name="type" />
      </Field>

      <Field>
        <Checkbox
          name="noPasswordResetNeeded"
          onChange={(e) => {
            e.persist();
            const { checked } = e.target;
            return setValues({
              ...values,
              forcePasswordReset: checked,
              noPasswordResetNeeded: checked ? 0 : 1,
            });
          }}
          onBlur={handleBlur}
        >
          Force user to reset password at log in:
        </Checkbox>
      </Field>
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
  setValues: PropTypes.func,
};

Component.displayName = "RegisterForm";

export default withFormik({
  mapPropsToValues: () => ({
    login: "",
    password: "",
    passwordConfirmation: "",
    fullName: "",
    email: "",
    city: "",
    country: "",
    timeZone: "",
    type: "NormalUser",
    siteId: 0,
    accountLocked: "false",
    noPasswordResetNeeded: 1,
    forcePasswordReset: false,
  }),
  handleSubmit: async (values, { props }) => {
    const { noPasswordResetNeeded, forcePasswordReset, ...rest } = values;

    await props.createUser({
      variables: {
        input: {
          user: {
            ...rest,
          },
          noPasswordResetNeeded,
          forcePasswordReset,
        },
      },
    });
  },
  validationSchema: SessionValidation,
})(Component);
