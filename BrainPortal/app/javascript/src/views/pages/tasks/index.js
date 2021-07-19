import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Stats, TasksFeed, TasksTable } from "src/views/Tasks/";
import Taskbar from "src/components/Taskbar";
import { useQuery } from "@apollo/client";
import { GET_GROUP_BY_ID } from "src/queries";
import { GroupContext } from "src/context";

import Loading from "src/components/Loading";
import Error from "src/components/Error";

const Component = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const groupContext = useContext(GroupContext);
  const group_id = groupContext.groupId;

  const { loading, error, data } = useQuery(GET_GROUP_BY_ID, {
    variables: { id: group_id },
    skip: !group_id,
  });

  if (loading) {
    return <Loading />;
  }

  if (!data || !data.group || error) {
    return <Error>Something went wrong.</Error>;
  }

  const { group } = data;

  return (
    <React.Fragment>
      <Stats tasks={group && group.tasks} />
      <Taskbar
        showCreateTask={!!group}
        isGridView={false}
        setLimitValue={() => {}}
        totalItems={(group && group.tasks.length) || 0}
      ></Taskbar>
      <TasksFeed groupId={group && group.id}>
        {(props) => (
          <TasksTable
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            {...props}
          />
        )}
      </TasksFeed>
    </React.Fragment>
  );
};

Component.propTypes = {
  data: PropTypes.object,
};

Component.displayName = "TaskPage";

export default Component;
