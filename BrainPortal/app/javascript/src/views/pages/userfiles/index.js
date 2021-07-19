import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useQuery } from "@apollo/client";
import { GET_GROUP_BY_ID } from "src/queries";
import { GroupContext } from "src/context";
import Taskbar from "src/components/Taskbar";
import { Stats } from "src/components/Stats";

import Loading from "src/components/Loading";
import Error from "src/components/Error";
import {
  UserfilesFeed,
  UserfilesTable,
  TaskbarActions,
} from "src/views/Userfiles/";

const Component = () => {
  const groupContext = useContext(GroupContext);
  const group_id = groupContext.groupId;

  const { loading, error, data, refetch } = useQuery(GET_GROUP_BY_ID, {
    variables: { id: group_id },
    skip: !group_id,
  });

  const [selectedUserfileIds, setSelectedUserfileIds] = useState([]);
  const [totalUserfiles, setTotalUserfiles] = useState(null);
  const [limit, setLimit] = useState(null);

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (loading) {
    return <Loading />;
  }

  if (!data || !data.group || error) {
    return <Error>Something went wrong.</Error>;
  }

  const { group } = data;

  return (
    <React.Fragment>
      <Stats
        title="Files"
        stats={{
          files: group && group.userfiles.length,
          tasks: group && group.tasks.length,
          users: group && group.users.length + 1,
        }}
      ></Stats>
      <Taskbar
        showCreateTask={!!group}
        setLimitValue={(num) => setLimit(num)}
        totalItems={totalUserfiles}
      >
        <TaskbarActions
          group={group}
          selectedUserfileIds={selectedUserfileIds}
          setSelectedUserfileIds={setSelectedUserfileIds}
        />
      </Taskbar>

      <UserfilesFeed
        groupId={group && group.id}
        limit={limit}
        setTotal={(v) => setTotalUserfiles(v)}
      >
        {(props) => {
          return (
            <UserfilesTable
              {...props}
              selectedUserfileIds={selectedUserfileIds}
              setSelectedUserfileIds={setSelectedUserfileIds}
            />
          );
        }}
      </UserfilesFeed>
    </React.Fragment>
  );
};

Component.displayName = "UserFilesPages";

Component.propTypes = {
  data: PropTypes.object,
};

export default Component;
