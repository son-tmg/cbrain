import React from "react";
import { ButtonSection, Button } from "src/components/Buttons";

const Component = ({ showLoginForm, setShowLoginForm }) => {
  return (
    <ButtonSection mt={7}>
      <Button type="submit" width={["100%"]} justifyContent="center">
        {showLoginForm ? "Login" : "Register"}
      </Button>
      <Button
        variant={"link"}
        onClick={() => setShowLoginForm(!showLoginForm)}
        whiteSpace="wrap"
      >
        {showLoginForm
          ? "Don't Have An Account? Sign Up!"
          : "Already Have an Account? Login!"}
      </Button>
    </ButtonSection>
  );
};

export default Component;
