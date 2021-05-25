import React, { useContext, useState, useCallback } from "react";
import Proptypes from "prop-types";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "src/queries";
import { ButtonSection, Button } from "src/components/Buttons";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import RegisterSuccess from "./components/RegisterSuccess";
import { StyledLoading, StyledForm } from "./styles";
import { Box } from "src/components/globals";
import { SessionContext } from "src/context/";
import Banner from "src/components/Banner";
import Loading from "src/components/Loading";

//  Component that handles log in and register. Might be better to separate them more in the future.
const Component = ({ showLoginForm, ...props }) => {
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [handleForm, setHandleForm] = useState(null);
  const sessionContext = useContext(SessionContext);
  const [
    createUser,
    {
      loading: createUserLoading,
      error: createUserError,
      data: createUserData,
    },
  ] = useMutation(CREATE_USER);

  const formHandler = useCallback((fn) => {
    return setHandleForm({ submit: fn });
  }, []);

  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault();
        handleForm.submit();
      }}
    >
      <Box
        position={"relative"}
        flexDirection="column"
        px={[4, 7]}
        py={[7]}
        flex={1}
        {...props}
      >
        {sessionContext.loginData.error && (
          <Banner variant={"error"} position="absolute" left={0} top={0}>
            Login unsuccessful.
          </Banner>
        )}
        {createUserError && (
          <Banner variant={"error"} position="absolute" left={0} top={0}>
            Account could not be created. Please try again.
          </Banner>
        )}
        {sessionContext.loginData.loading || createUserLoading ? (
          <StyledLoading>
            <Loading />
          </StyledLoading>
        ) : null}
        {/* Toggles between showing either the login form or the register foorm */}
        {showLoginForm ? (
          <LoginForm
            loginMutation={(props) => sessionContext.login(props)}
            setFormHandler={formHandler}
            isSubmitDisabled={isSubmitDisabled}
            setIsSubmitDisabled={(props) => setIsSubmitDisabled(props)}
          />
        ) : createUserData ? (
          // If the user is created, return a success message.
          <RegisterSuccess />
        ) : (
              <RegisterForm
                createUser={(props) => createUser(props)}
                setFormHandler={formHandler}
                isSubmitDisabled={isSubmitDisabled}
                setIsSubmitDisabled={(props) => setIsSubmitDisabled(props)}
              />
            )}
      </Box>
      {props.renderButtons({ type: "submit", disabled: isSubmitDisabled })}
    </StyledForm>
  );
};

Component.propTypes = {
  showLoginForm: Proptypes.bool,
  setShowLoginForm: Proptypes.func,
  renderButtons: Proptypes.func,
};

Component.displayName = "LoginPage";

export default Component;
