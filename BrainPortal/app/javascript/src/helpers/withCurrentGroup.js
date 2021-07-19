import React, { useContext, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_GROUP_BY_ID } from "src/queries";
import { GroupContext } from "src/context";
import Loading from "src/components/Loading";

// HOC retrieving currently selected group data.
const CurrentGroupData = ({ children }) => {
  // Get the group id from the context.
  const groupContext = useContext(GroupContext);
  const group_id = groupContext.groupId;

  // Fetch the data for the group if a group id is present.
  const [getGroupById, { loading, error, data }] = useLazyQuery(
    GET_GROUP_BY_ID
  );

  useEffect(() => {
    group_id &&
      getGroupById({
        variables: { id: group_id },
      });
  }, [group_id, getGroupById]);

  // if there is no group id then return null
  if (!loading && !group_id) {
    return children({ data: null, error: null });
  }
  // if the data is loading return a loading spinner
  if (loading) {
    return <Loading />;
  }
  return children({ data, error });
};

const Component = (Component) => {
  const wrappedComponent = (props) => {
    return (
      <CurrentGroupData>
        {({ data }) => {
          return (
            <Component
              data={{ group: (data && data.group) || null }}
              {...props}
            />
          );
        }}
      </CurrentGroupData>
    );
  };

  return wrappedComponent;
};

Component.propTypes = {};
Component.displayName = "withCurrentGroup";
export default Component;
