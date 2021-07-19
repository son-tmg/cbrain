import React from "react";
import { useParams } from "react-router-dom";
import Taskbar from "src/components/Taskbar";
import { TaskbarActions } from "src/views/Users/";
import User from "src/views/User";
import { Box } from "src/components/globals";

const Component = () => {
  const { id } = useParams();

  return (
    <Box p={4} flex={1} flexDirection={"column"}>
      {/* Need to add restrictions (i.e. only show edit and delete for users that current user has access to) */}
      <Taskbar>
        <TaskbarActions showAllActions selectedUsers={[id]} />
      </Taskbar>
      <User id={id} />
    </Box>
  );
};

Component.displayName = "UserPage";

export default Component;
