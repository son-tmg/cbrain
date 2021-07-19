import React from "react";
import { useParams } from "react-router-dom";
import Task from "src/views/Task";
import { Box } from "src/components/globals";

const Component = () => {
  const { task_id: taskId } = useParams();

  return (
    <Box p={4} flex={1} flexDirection={"column"}>
      <Task taskId={+taskId} />
    </Box>
  );
};

Component.displayName = "TaskPage";

export default Component;
