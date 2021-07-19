import React from "react";
import { useParams } from "react-router-dom";
import Userfile from "src/views/Userfile";
import { Box } from "src/components/globals";

const Component = () => {
  const { userfile_id: userfileId } = useParams();

  return (
    <Box p={4} flex={1} flexDirection={"column"}>
      <Userfile userfileId={+userfileId} />
    </Box>
  );
};

Component.displayName = "UserfilePage";

export default Component;
