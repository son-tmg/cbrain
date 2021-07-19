import React from "react";
import { useParams } from "react-router-dom";
import DataProvider from "src/views/DataProvider";
import { Box } from "src/components/globals";

const Component = () => {
  const { id } = useParams();

  return (
    <Box p={4} flex={1} flexDirection={"column"}>
      <DataProvider id={id} />
    </Box>
  );
};

Component.displayName = "DataProviderPage";

export default Component;
