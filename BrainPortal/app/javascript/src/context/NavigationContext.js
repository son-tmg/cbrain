import React, { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import withCurrentSession from "src/helpers/withCurrentSession";
import {
  getLocalStorageItem,
  storeLocalStorageItem,
} from "src/helpers/localStorage";
import { SessionContext } from "src/context/";

/*
  Context managing whether the navigation should be displayed and if it should be expanded or not.
*/
export const NavigationContext = createContext();

const Component = ({ children }) => {
  const { isSessionAuthenticated } = useContext(SessionContext);
  const [showNavigation, setShowNavigation] = useState(false);
  const [isNavigationExpanded, setNavigationExpanded] = useState(() => {
    if (!getLocalStorageItem("navigation")) {
      return false;
    }
    return getLocalStorageItem("navigation")["isNavigationExpanded"] || false;
  });

  useEffect(() => {
    setShowNavigation((prev) => {
      if (isSessionAuthenticated) {
        return true;
      }
      return prev;
    });
  }, [isSessionAuthenticated]);

  useEffect(() => {
    storeLocalStorageItem("navigation", {
      isNavigationExpanded: isNavigationExpanded,
    });
  }, [isNavigationExpanded]);

  return (
    <NavigationContext.Provider
      value={{
        isNavigationExpanded,
        setIsNavigationExpanded: () =>
          setNavigationExpanded(!isNavigationExpanded),

        showNavigation: isSessionAuthenticated && showNavigation,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

Component.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  session: PropTypes.object,
};
Component.displayName = "NavigationContextProvider";

export default withCurrentSession(Component);
