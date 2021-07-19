import React, { useContext } from "react";
import PropTypes from "prop-types";
import { withRouter, Redirect } from "react-router-dom";
import { NavigationContext, SessionContext } from "src/context/";
import { StyledPageLayout } from "./styles";
import { Box } from "src/components/globals";

import LoginPage from "src/views/pages/login";
import StyleGuidePage from "src/views/pages/styleguide";
import GroupsPage from "src/views/pages/groups";
import DataProvidersPage from "src/views/pages/data-providers";
import DataProviderPage from "src/views/pages/data-provider";
import UsersPage from "src/views/pages/users";
import UserPage from "src/views/pages/user";
import ToolsPage from "src/views/pages/tools";
import UserfilesPage from "src/views/pages/userfiles";
import UserfilePage from "src/views/pages/userfile";
import TasksPage from "src/views/pages/tasks";
import TaskPage from "src/views/pages/task";
import RegisterPage from "src/views/pages/register";
import ResetPasswordPage from "src/views/pages/reset-password";
import CreateTaskPage from "src/views/pages/create-task";
import BourreauxPage from "src/views/pages/bourreaux";
import BourreauPage from "src/views/pages/bourreau";

const Component = ({ match, ...props }) => {
  const { isSessionAuthenticated, sessionData } = useContext(SessionContext);
  const { showNavigation, isNavigationExpanded } = useContext(
    NavigationContext
  );

  const renderPage = () => {
    switch (match.path) {
      case "/login": {
        return isSessionAuthenticated ? (
          <Redirect from="/login" to="/groups" exact />
        ) : (
          <LoginPage {...props} />
        );
      }
      case "/styleguide": {
        return <StyleGuidePage {...props} />;
      }
      case "/groups": {
        return <GroupsPage {...props} />;
      }
      case "/groups/:id/userfiles": {
        return <UserfilesPage {...props} />;
      }
      case "/groups/:id/userfiles/:userfile_id": {
        return <UserfilePage {...props} />;
      }
      case "/groups/:id/tasks": {
        return <TasksPage {...props} />;
      }
      case "/groups/:id/tasks/:task_id": {
        return <TaskPage {...props} />;
      }
      case "/users": {
        return <UsersPage {...props} />;
      }
      case "/users/:id": {
        return <UserPage {...props} />;
      }
      case "/tools": {
        return <ToolsPage {...props} />;
      }
      case "/data-providers": {
        return <DataProvidersPage {...props} />;
      }
      case "/data-providers/:id": {
        return <DataProviderPage {...props} />;
      }
      case "/create-task": {
        return <CreateTaskPage {...props} />;
      }
      case "/servers": {
        return <BourreauxPage {...props} />;
      }
      case "/servers/:id": {
        return <BourreauPage {...props} />;
      }
      case "/register": {
        return <RegisterPage {...props} />;
      }
      case "/reset-password": {
        return (
          <ResetPasswordPage
            userId={+sessionData.data.session.userId}
            {...props}
          />
        );
      }
      default: {
        return <GroupsPage {...props} />;
      }
    }
  };

  return (
    <React.Fragment>
      <StyledPageLayout
        showNavigation={showNavigation}
        isNavigationExpanded={isNavigationExpanded}
      >
        <Box
          width={"100%"}
          height={"100%"}
          flexWrap={"wrap"}
          flexDirection={"column"}
        >
          {renderPage()}
        </Box>
      </StyledPageLayout>
    </React.Fragment>
  );
};

Component.propTypes = {
  match: PropTypes.object.isRequired,
  session: PropTypes.object,
};

Component.displayName = "Pages";

export default withRouter(Component);
