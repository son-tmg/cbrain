import React from "react";
import { useParams } from "react-router-dom";
import { Bourreau } from "src/views/Bourreau";
import { Box, Card } from "src/components/globals";
import { GET_BOURREAU_BY_ID } from "src/queries";
import { useQuery } from "@apollo/client";
import Titlebar from "src/components/Titlebar";
import Loading from "src/components/Loading";
import Error from "src/components/Error";

const Component = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_BOURREAU_BY_ID, {
    variables: { id },
    skip: !id,
  });
  if (loading) {
    return <Loading />;
  }

  if (error || !data) {
    return <Error />;
  }
  return (
    <Box p={4} flex={1} flexDirection={"column"}>
      <Card>
        <Titlebar icon="settings">Execution Server Information</Titlebar>
        <Bourreau data={data && data.bourreau} />
      </Card>
    </Box>
  );
};

Component.displayName = "BourreauPage";

export default Component;
