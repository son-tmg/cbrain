import React from "react";
import Login from "src/views/Login";
import Titlebar from "src/components/Titlebar";
import { Card } from "src/components/globals";
import { ButtonSection, Button } from "src/components/Buttons";

const Component = () => {
  const renderButtons = (props) => (
    <ButtonSection>
      <Button width={["100%"]} justifyContent="center" {...props}>
        Register
      </Button>
    </ButtonSection>
  );
  return (
    <Card width={"100%"} style={{ overflow: "hidden", position: "relative" }}>
      <Titlebar
        icon="cbrain"
        variant={"primary"}
        fill={"bg.secondary"}
        stroke={"bg.default"}
        size={2}
      >
        Register User
      </Titlebar>
      <Login
        showLoginForm={false}
        renderButtons={(props) => renderButtons(props)}
      ></Login>
    </Card>
  );
};

Component.propTypes = {};

Component.displayName = "RegisterPage";

export default Component;
