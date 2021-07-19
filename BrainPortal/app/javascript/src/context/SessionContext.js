import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useMutation, useLazyQuery } from "@apollo/client";
import { GET_SESSION, LOGIN, LOGOUT } from "src/queries";
import Loading from "src/components/Loading";
import { client } from "src/index";
import { clearLocalStorage } from "src/helpers/localStorage";

export const SessionContext = createContext();

/*
Session context provides functions to authenticate the user and access to session data.
*/
const Component = ({ children }) => {
  let history = useHistory();

  const [isSessionAuthenticated, setIsSessionAuthenticated] = useState(null);

  // Fetch the session information through the network only to get the freshest data.
  // We set the authentication context to true if the query returns.
  const [getSession, sessionData] = useLazyQuery(GET_SESSION, {
    fetchPolicy: "network-only",
    onCompleted: () => setIsSessionAuthenticated(true),
    onError: () => setIsSessionAuthenticated(false),
  });

  // Once the user has been logged, set the authentication context to true.
  const [loginMutation, loginData] = useMutation(LOGIN, {
    onCompleted: () => {
      getSession()
    },
    onError: () => setIsSessionAuthenticated(false),
  });

  // Logout the user, set the authentication context to false and clear the local storage.
  // Below, we reset the store below and redirect the suer to the login page.
  const [logoutMutation, logoutData] = useMutation(LOGOUT, {
    onCompleted: () => {
      setIsSessionAuthenticated(false);
      clearLocalStorage();
    },
    onError: () => setIsSessionAuthenticated(false),
  });

  useEffect(() => {
    getSession()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (sessionData.loading || loginData.loading || logoutData.loading) {
    return <Loading />;
  }
  return (
    <SessionContext.Provider
      value={{
        isSessionAuthenticated,
        setIsSessionAuthenticated,
        sessionData: sessionData,
        login: (props) => loginMutation(props),
        loginData: loginData,
        logout: (props) => {
          // Logs out the user, clears the apollo cache and redirects the user to the login page.
          client.resetStore();
          logoutMutation(props);
          history.push("/login");
        },
        logoutData: logoutData,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

Component.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

Component.displayName = "SessionContextProvider";

export default Component;
