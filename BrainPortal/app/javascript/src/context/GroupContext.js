import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import {
  getLocalStorageItem,
  storeLocalStorageItem,
  removeLocalStorageItem,
} from "src/helpers/localStorage";

/*
 Context for a user selected group which sets the id in local storage.
*/
export const GroupContext = React.createContext({
  groupId: null,
  selectGroup: () => { },
  removeGroup: () => { },
});

const Component = ({ children }) => {
  const [groupId, setGroupId] = useState(null);

  const selectGroup = (id) => {
    if (id && groupId !== id) {
      storeLocalStorageItem("groupId", id);
      return setGroupId(id);
    }
    return groupId;
  };

  const removeGroup = () => {
    removeLocalStorageItem("groupId");
    return setGroupId(null);
  };

  useEffect(() => {
    setGroupId(getLocalStorageItem("groupId"));
  }, []);

  return (
    <GroupContext.Provider
      value={{
        groupId,
        selectGroup,
        removeGroup,
      }}
    >
      {children}
    </GroupContext.Provider>
  );
};

Component.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

Component.displayName = "GroupContextProvider";

export default Component;
