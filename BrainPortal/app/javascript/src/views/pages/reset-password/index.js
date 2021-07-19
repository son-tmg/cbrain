import React from "react";
import PropTypes from "prop-types";
import Titlebar from "src/components/Titlebar";
import { Formik } from "formik";
import * as R from "ramda";
import * as Yup from "yup";
import { UPDATE_USER } from "src/queries";
import { useMutation } from "@apollo/client";
import Banner from "src/components/Banner";

import { ErrorMessage, Field, Input } from "src/components/Form";
import { Box } from "src/components/globals";
import { StyledForm } from "./styles";
import { Button, ButtonSection } from "src/components/Buttons";

export const validationSchema = Yup.object().shape({
  password: Yup.string().required("Password is required."),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref("password")], "Password fields must be the same.")
    .required("Password confirmation is required."),
});

const Component = ({ userId, history }) => {
  const [updateUser, { loading, error }] = useMutation(UPDATE_USER, {
    refetchQueries: ["getUserById"],
    awaitRefetchQueries: true,
  });

  return (
    <Formik
      initialValues={{
        password: "",
        passwordConfirmation: "",
      }}
      onSubmit={async (values) => {
        const { password, passwordConfirmation } = values;

        await updateUser({
          variables: {
            userId,
            input: {
              user: {
                password,
                passwordConfirmation,
              },
            },
          },
        });
        history.push("/groups");
      }}
      validationSchema={validationSchema}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        touched,
      }) => (
        <StyledForm
          id={"reset-password"}
          initialValues={{
            password: "",
            passwordConfirmation: "",
          }}
          loading={loading}
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <Titlebar variant={"primary"} width={"100%"}>
            Reset Password
          </Titlebar>
          <Box position="relative">
            {error && (
              <Banner position="absolute" variant={"error"}>
                Something went wrong. Please try again.
              </Banner>
            )}
          </Box>
          <Box px={"15%"} py={4} flexDirection={"column"}>
            <Field>
              <Input
                name={"password"}
                error={touched.password && errors.password}
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                type="password"
                flexDirection={"column"}
                justifyContent={["center", "space-between", "center"]}
              >
                Reset Password
              </Input>
              <ErrorMessage name={"password"} justifyContent={"center"} />
            </Field>
            <Field>
              <Input
                name={"passwordConfirmation"}
                error={
                  touched.passwordConfirmation && errors.passwordConfirmation
                }
                value={values.passwordConfirmation}
                onBlur={handleBlur}
                onChange={handleChange}
                type="password"
                flexDirection={"column"}
                justifyContent={["center", "space-between", "center"]}
              >
                Confirm Password Reset
              </Input>
              <ErrorMessage
                name={"passwordConfirmation"}
                justifyContent={"center"}
              />
            </Field>
          </Box>
          <ButtonSection>
            <Button
              type="submit"
              variant={"solid"}
              disabled={!R.isEmpty(errors) || loading}
              form={"reset-password"}
            >
              Submit
            </Button>
          </ButtonSection>
        </StyledForm>
      )}
    </Formik>
  );
};

Component.propTypes = {
  userId: PropTypes.number.isRequired,
  history: PropTypes.object,
};
Component.displayName = "ResetPasswordPage";

export default Component;
