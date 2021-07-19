import React, { useState } from "react";
import { StyledPage } from "./styles";
import Banner from "./components/Banner";
import Main from "./components/Main";
import Login from "src/views/Login";
import { ButtonSection, LoginButton } from "src/components/Buttons";

const Component = () => {
  // Show sign in as a default.
  const [isSignInView, setIsSignInView] = useState(true);
  const [toggle, setToggle] = useState(null);

  const renderButtons = (props) => (
    <ButtonSection bg={"bg.default"}>
      <LoginButton
        width={["100%"]}
        justifyContent="center"
        bg={"bg.dark"}
        {...props}
      >
        {isSignInView ? "Sign In" : "Register"}
      </LoginButton>
    </ButtonSection>
  );
  return (
    <StyledPage>
      <Main isSignInView={isSignInView} toggle={toggle} width={70}>
        <Login
          showLoginForm={isSignInView}
          renderButtons={(props) => renderButtons(props)}
        />
      </Main>
      <Banner
        toggle={toggle}
        setToggle={(v) => setToggle(v)}
        isSignInView={isSignInView}
        setIsSignInView={(v) => setIsSignInView(v)}
        width={30}
      ></Banner>
    </StyledPage>
  );
};
Component.propTypes = {};

Component.displayName = "LoginPage";

export default Component;
