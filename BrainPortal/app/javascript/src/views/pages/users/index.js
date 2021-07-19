import React, { useState } from "react";
import PropTypes from "prop-types";
import Taskbar from "src/components/Taskbar";
import { Stats } from "src/components/Stats";
import { Box } from "src/components/globals";
import { UsersFeed, UsersTable, TaskbarActions } from "src/views/Users/";

const Component = () => {
  const [selectedUsers, setSelectedUserIds] = useState([]);
  const [totalUsers, setTotalUsers] = useState(null);
  const [limit, setLimit] = useState(null);
  const [stats, setStats] = useState({
    "total users": 0,
    locations: 0,
    active: 0,
    locked: 0,
  });

  return (
    <React.Fragment>
      <Stats title="users" stats={stats}></Stats>
      <Box flex={1} flexDirection={"column"}>
        <Taskbar
          showCreateTask={false}
          setLimitValue={(num) => setLimit(num)}
          totalItems={totalUsers}
        >
          <TaskbarActions
            showAllActions={selectedUsers.length === 1}
            selectedUsers={selectedUsers}
            setSelectedUserIds={setSelectedUserIds}
          />
        </Taskbar>
        <UsersFeed
          limit={limit}
          setTotal={(v) => setTotalUsers(v)}
          stats={stats}
          setStats={(v) => setStats(v)}
        >
          {(props) => {
            return (
              <UsersTable
                {...props}
                selectedUsers={selectedUsers}
                setSelectedUserIds={setSelectedUserIds}
              />
            );
          }}
        </UsersFeed>
      </Box>
    </React.Fragment>
  );
};

Component.displayName = "Users";

Component.propTypes = {
  data: PropTypes.object,
};

export default Component;
